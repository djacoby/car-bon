import type { NextApiRequest, NextApiResponse } from 'next'

import type { ApiResponse, FuelEconomyApiValue, FuelEconomyApiResponse } from '../../../shared/interfaces'
import { reshapeApiResponse } from '../../../shared/reshape-api-response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiValue | FuelEconomyApiValue[]>>
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

    if (trims.status !== 200) {
      lookupVehicleWithoutTrim(req, res)
    }

    const response: FuelEconomyApiResponse = await trims.json()

    const result = reshapeApiResponse(response)

    res.status(200).json({ result, error: false })
}

async function lookupVehicleWithoutTrim(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FuelEconomyApiValue | FuelEconomyApiValue[]>>,
) {
  const { year, make, model } = req.query;

  const vehicle = await fetch(`https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=${year}&year2=${year}&make=${make}&baseModel=${model}&srchtyp=ymm&pageno=1&rowLimit=50`, {
    method: 'GET',
  })

  if (vehicle.status !== 200) {
    res.status(500).json({ result: 'No vehicle found', error: true})
  }

  const response = await vehicle.text()
  const startIndex = response.search('myid="') + 6
  const endIndex = startIndex + 5

  const vehicleId = response.slice(startIndex, endIndex)

  const result: FuelEconomyApiValue = {
    label: '',
    value: vehicleId,
  }

  res.status(200).json({ result, error: false })
}