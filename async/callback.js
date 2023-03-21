const name = 'Jeffer';

function gretting(cb, name) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    cb(name);
  }, 1000);
}

function farawell(cb2, name2 = 'Steven') {
  setTimeout(() => {
    console.log(`Adios, ${name2}`);
    cb2()
  }, 1000)
}

console.log(`Iniciando proceso...`);

gretting((name) => {
  console.log('Ejecutando function Async' , name);
  farawell(() => {
    console.log(`Terminando proceso ${name}!!`);
  }, 'Stiven');
}, name);
