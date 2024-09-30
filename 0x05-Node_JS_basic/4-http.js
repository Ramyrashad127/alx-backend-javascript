// Desc: Create a simple http server
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
});

server.listen(1245);
