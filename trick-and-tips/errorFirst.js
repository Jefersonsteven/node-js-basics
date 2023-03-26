
function async(cb) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      cb(null, a);
    } catch (error) {
      cb(error)
    }
  }, 1000);
}

async((error, data = undefined) => {
  if(error) {
    console.error(`hay un error y es: `, error);
    return false;
  }

  console.log('Todo bien esta es mi data: ', data);
})