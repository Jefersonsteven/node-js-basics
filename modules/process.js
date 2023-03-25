
process.on('beforeExit', () => {
  console.log('Oy!, el proceso se va a acabar');
})

process.on('uncaughtException', (err, origin) => {
  console.error(`Se te a olvidado manejar este error:`);
  console.log(err);
})

// process.on('uncaughtRejection', (err, origin) => {
//   console.error();
// })

process.on('exit', () => {
  console.log('Hey!, el proceso a acabado');
})

functionNoExits();