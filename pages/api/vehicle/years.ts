import type { NextApiRequest, NextApiResponse } from 'next'

// TODO: make generic reponse type with passable value for result
type Data = {
  result: string
  error: boolean
}

// TODO: make type for response

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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

    const result = await years.json();

    res.status(200).json({ result, error: false })
}