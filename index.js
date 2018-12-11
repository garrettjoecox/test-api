const https = require('https');
const Koa = require('koa');
const cors = require('@koa/cors');
const server = new Koa();
const fs = require('fs');

server.use(cors());
server.use(async (ctx, next) => {
  ctx.body = { hello: 'world' };
})

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, server.callback()).listen(process.env.PORT || 3001, () => {
  console.log('listening');
});
