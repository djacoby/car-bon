import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiResponse, OpenCageAddressLookupResponse } from '../../shared/interfaces';
import { openCageApiUrlRoute } from '../../shared/api-urls';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<OpenCageAddressLookupResponse>>
) {
    if (req.method !== 'GET') {
      return res.status(405).json({ result: 'Method not allowed', error: true });
    }

    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ result: 'Bad Request', error: true });
    }

    const url = openCageApiUrlRoute.geoCoordinates(<string> address);

    const coordinates = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    // TODO: trim result to only necessary props and create interface
    const result = await coordinates.json();


    res.status(200).json({ result, error: false });
}
