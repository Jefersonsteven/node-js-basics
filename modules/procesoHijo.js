const { exec, spawn } = require('child_process');
const http = require('http');

const PORT = 3101;
console.info(`Server open in port: https://localhost:${PORT} 🚀`);

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if(req.url === "/") {
    res.end('Whatsuuuuup!!');
  };

  if(req.url.includes('1')) {
    exec("node modules/proceso.js", (err, stdout, stderr) => {
      if(err) {
        console.error('Error:', err);
        return false
      }
      
      res.end(stdout)
    })
  };

  if(req.url.includes('2')) {
    let proceso = spawn('ls', ['-la']);

    proceso.stdout.on('data', (data) => {
      res.end(data)
    });
  
    proceso.on('exit', () => console.log('Proceso termino!!'));
  };

  res.writeHead(200, { "Content-Type": "text/plain" })
}).listen(PORT, "localhost");