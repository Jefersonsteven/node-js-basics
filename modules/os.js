const os = require("os");

console.log('arquitectura:',os.arch());
console.log('sistema operativo:', os.platform());
console.log(`core cpu's:`, os.cpus().length);
// console.log('constantes:', os.constants);
console.log('memoria libre:', os.freemem());
console.log('memoria:', os.totalmem());
console.log('name dir:', os.homedir());
console.log('temp dir:', os.tmpdir());
console.log('host name:', os.hostname());
// console.log('interfaces de red:', os.networkInterfaces());