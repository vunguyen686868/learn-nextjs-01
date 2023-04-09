// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

//khi cần forward all data từ client --> proxy --> API ko cần bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' });
  }

  return new Promise((resolve) => {
    //clear all cookie
    req.headers.cookie = '';

    // hàm xử lý khi nhận res từ proxy server
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      //nhận res streaming --> concat lại thành string
      let body = '';
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });

      //kết thúc res
      proxyRes.on('end', function () {
        try {
          const isSuccess =
            proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300;

          if (!isSuccess) {
            (res as NextApiResponse).status(proxyRes.statusCode || 500).json(body);
            resolve(true);
          }

          //convert string to json data
          const { accessToken, expiredAt } = JSON.parse(body);
          console.log({ accessToken, expiredAt });

          //convert token to cookies
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });
          //return res to client
          (res as NextApiResponse).status(200).json({ message: 'login OK' });
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: 'login Error' });
        }

        resolve(true);
      });
    };

    //proxy done --> đưa res cho nextjs tiếp tục xử lý --> client
    proxy.once('proxyRes', handleLoginResponse);

    //proxy forward req to API
    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: true, // proxy server trả res cho nextjs tiếp tục xử lý --> handleLoginResponse
    });
  });
}

//Client --> login --> proxy --> server
