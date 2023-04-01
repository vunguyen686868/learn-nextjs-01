// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' });
  }

  //remove cookie
  const cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'logout success' });
}
