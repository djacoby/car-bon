import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiResponse, FuelEconomyApiValue, FuelEconomyApiResponse } from '../../../shared/interfaces';
import { reshapeApiResponse } from '../../../shared/reshape-api-response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiValue[]>>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true });
    }

    const { year } = req.query;

    if (!year) {
      return res.status(400).json({ result: 'Bad Request', error: true });
    }

    const makes = await fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${year}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const response: FuelEconomyApiResponse = await makes.json();

    const result = reshapeApiResponse(response);

    res.status(200).json({ result, error: false });
}
