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

    const years = await fetch('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

    const response: FuelEconomyApiResponse = await years.json()

    const result = reshapeApiResponse(response)

    res.status(200).json({ result, error: false })
}