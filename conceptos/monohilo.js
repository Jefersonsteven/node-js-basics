console.log('1: Hello, world');

let count = 0;
const num = 2023;
const arr = [ 2,4,6,8,10,12,14,16,18,20 ];

const a = setInterval(() => {
  
  console.log(arr[count]);
  count++

  try {
    if(arr[count] === 17) {
      let x = num + count;
      console.log(x);
      clearInterval(a);
    }
  } catch (error) {
    console.log(`${count}: ${error}`);
  }

  if(!arr[count]) {
    clearInterval(a);
  }
}, 1000);

console.log('2: Hello, world');

setTimeout(() => {
  console.log('3: Hello, world !!');
}, 5000)