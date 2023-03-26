const { group, groupEnd } = require("console");

let buffer1 = Buffer.alloc(4);
let buffer2 = Buffer.from([1, '82', 5])
let buffer3 = Buffer.from('Hola');
let memoryABC = Buffer.alloc(26);

const abc = memoryABC.map((mh, i)=> mh + (97 + i));

console.group('Buffers');
  console.log(memoryABC);
  console.log(abc, abc.toString());
  console.log(buffer1);
  console.log(buffer2);
  console.log(buffer3);
console.groupEnd('Buffers');