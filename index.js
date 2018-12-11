const https = require('https');
const Koa = require('koa');
const server = new Koa();
const fs = require('fs');

server.use(async (ctx, next) => {
  ctx.body = { hello: 'world' };
})

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, server.callback()).listen(process.env.PORT || 3001, () => {
  console.log('listening');
});
