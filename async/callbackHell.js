const name = 'Jeffer';

function gretting(cb, name) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    cb(name);
  }, 1000);
}

function speak(cb) {
  setTimeout(() => {
    console.log('bla bla bla');
    cb();
  }, 1000)
}

function farawell(cb, name2 = 'Steven') {
  setTimeout(() => {
    console.log(`Adios, ${name2}`);
    cb()
  }, 1000)
}

console.log(`Iniciando proceso...`);

gretting((name) => {
  console.log('Ejecutando function Async' , name);

  speak(() => {
    speak(() => {
      farawell(() => {
        console.log(`Terminando proceso ${name}!!`);
      }, 'Stiven');
    })
  })
  
}, name);
