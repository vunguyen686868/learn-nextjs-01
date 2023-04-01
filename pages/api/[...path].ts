// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

//khi cần forward all data từ client --> proxy --> API ko cần bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    //convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const access_token = cookies.get('access_token');
    if (access_token) {
      req.headers.authorization = `Bearer ${access_token}`;
    }
    //clear all cookie
    req.headers.cookie = '';

    //proxy forward req to API
    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: false, // proxy server tự trả vê res cho client
    });

    //proxy done
    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}
