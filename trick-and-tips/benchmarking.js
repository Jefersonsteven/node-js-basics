// Benchmarking Console 

// Es importante gestionar el tiempo que utiliza cada funcion, Para mejorar el performance y los tiempos de carga.
// Console.time, inicia un tiempo x
// console.timeEnd termina el tiempo y lo muestra.
let suma = 0;

console.log('the asynco starts')
console.time('bucle');
console.time('bucle2');
console.time('Asynco');
for(let i = 0; i < 1000000; i++){
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
for(let i = 0; i < 1000000; i++){
    suma2 += 1;
}
console.timeEnd('bucle2');

function asynco() {
    return new Promise( (resolve) => {
        setTimeout((function () {
            console.log('the process was finished')
            return resolve();
        }))
    })
}

asynco()
    .then(() => {
        console.timeEnd('Asynco')
    })