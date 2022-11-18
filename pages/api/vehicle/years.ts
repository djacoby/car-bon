import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiResponse, FuelEconomyApiValue, FuelEconomyApiResponse } from '../../../shared/interfaces';
import { reshapeApiResponse } from '../../../shared/reshape-api-response';
import { fuelEconomyApiRoute } from '../../../shared/api-urls';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiValue[]>>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true });
    }

    const url = fuelEconomyApiRoute.year();

    const years = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const response: FuelEconomyApiResponse = await years.json();

    const result = reshapeApiResponse(response);

    res.status(200).json({ result, error: false });
}
