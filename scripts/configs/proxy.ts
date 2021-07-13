import { ProxyTable } from '../typings/server';

// 代理，更多(https://github.com/chimurai/http-proxy-middleware)
const proxyTable: ProxyTable = {
    '/api': {
        target: 'http://127.0.0.1:1234',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
};

export default proxyTable;
