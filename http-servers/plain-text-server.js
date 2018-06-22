import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(3000, () => console.log('Server is running'));