import { createProxyMiddleware } from 'http-proxy-middleware';

export function proxy(app) {
  app.use(
    createProxyMiddleware('/**', {
      target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  );
}
