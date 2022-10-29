import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: string
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true })    
    }

    const { year, make, model } = req.query;

    if (!year || !make || !model) {
      return res.status(400).json({ result: 'Bad Request', error: true })
    }

    const makes = await fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

    const result = await makes.json();

    res.status(200).json({ result, error: false })
}