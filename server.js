const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  const message = fs.readFileSync('./message.txt', 'utf8');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Message: ${message}`);
}).listen(3000, () => {
  console.log('Server running on port 3000');
});

