import type { NextApiRequest, NextApiResponse } from 'next'

import type { ApiResponse, FuelEconomyApiValue, FuelEconomyApiResponse } from '../../../shared/interfaces'
import { reshapeApiResponse } from '../../../shared/reshape-api-response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiValue[]>>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true })    
    }

    const { year, make, model } = req.query;

    if (!year || !make || !model) {
      return res.status(400).json({ result: 'Bad Request', error: true })
    }

    const trims = await fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

    const response: FuelEconomyApiResponse = await trims.json()

    const result = reshapeApiResponse(response)

    res.status(200).json({ result, error: false })
}