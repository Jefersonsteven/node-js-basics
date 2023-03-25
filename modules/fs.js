const fs = require("fs");

const readFile = (file, cb) => {
  fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
    cb(data);
  })
}

const writeFile = (file, contenido, cb) => {
  fs.appendFile(file, contenido, (err) => {
    if(err) {
      console.error('No he podido escribir el contenido:', err);
    } else {
      cb('se ha escrito correctamente');
    }
  });
}

const deleteFile = (file, cb) => {
  fs.unlink(file, cb);
}

readFile(`${__dirname}/archivo.txt`, console.log);
writeFile(`${__dirname}/archivo.txt`, ` Hello, world
I'm Jeffer`,console.log);
// deleteFile(`${__dirname}/archivo.txt`, console.log);
