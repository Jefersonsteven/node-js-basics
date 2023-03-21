const name = 'Jeffer';

function gretting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello ${name}`);
      resolve(name);
    }, 1000);
  })
}

function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      resolve(name)
    }, 1000);
  })
}

function farawell(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios, ${name}`);
      resolve()
      reject('Hay un Error')
    }, 1000);
  })
}