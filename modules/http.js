const http = require('http');

const PORT = 3010;
console.log(`Server open in port: http://localhost:${PORT} 🚀`);

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  res.writeHead(200, { "Content-Type": "text/plain" })

  switch(req.url) {
    case '/home':
      res.write('Hola, haz llegado al home');
      res.end();
      break;

    default:
      res.end();
      res.write(`Error 404, No exite esta ruta!!. ${new Date()}`);
  }
}).listen(PORT, "localhost");