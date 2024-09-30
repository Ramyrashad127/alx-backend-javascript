// Desc: Create a simple http server
const http = require('http');
const f = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    f();
  }
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  }
  res.end();
});

app.listen(1245);
module.exports = app;
