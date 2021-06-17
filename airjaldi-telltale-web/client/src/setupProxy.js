const { createProxyMiddleware } = require('http-proxy-middleware');


const API_SERVER =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "http://telltale.airjaldi.net:5000";

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};