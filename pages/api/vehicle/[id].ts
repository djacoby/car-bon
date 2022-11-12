import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiResponse, FuelEconomyApiVehicle, FuelEconomyApiResponse } from '../../../shared/interfaces';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiVehicle>>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true });
    }

    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ result: 'Bad Request', error: true });
    }

    const vehicle = await fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await vehicle.json();

    // TODO: calculate carbon emitted by various aggregatons (trip, week, month, year)

    res.status(200).json({ result, error: false });
}
