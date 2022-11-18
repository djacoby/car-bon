import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiResponse, FuelEconomyApiVehicle } from '../../../shared/interfaces';

import { fuelEconomyApiRoute } from '../../../shared/api-urls';


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

    const url = fuelEconomyApiRoute.vehicle(<string> id);

    const vehicle = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await vehicle.json();

    // TODO: calculate carbon emitted by various aggregatons (trip, week, month, year)

    res.status(200).json({ result, error: false });
}
