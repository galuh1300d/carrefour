const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/saran', { target: 'http://localhost:5000' }));
  app.use('/promo-super', proxy({target:'http://localhost:4000', changeOrigin:true}))
};