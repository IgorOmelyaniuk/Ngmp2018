import http from 'http';
import fs from 'fs';
import through from 'through2';

const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  const readStream =  fs.createReadStream('index.html');

  readStream.pipe(through(function(chunk, enc, cb) {
    const msg = chunk.toString().replace('{message}', 'Hello world');
    this.push(msg);
    cb();
  }))
  .pipe(res);
});

server.listen(3000, () => console.log('Server is running'));