const { groupEnd } = require("console");

// * Info
console.info('Info');

// * Error
console.error('Error');

// * Warn
console.warn('Hey!!');

// * table
const table = [
  {
    a: 1,
    b: "a",
  },
  {
    a: 2,
    b: "b",
  },
  {
    a: 3,
    b: "c",
  },
];
console.table(table);

// * group
console.group("Grettings: ");

  console.log("Hello");
  console.log("Hi");
  console.log("Hey! whats up!!");

console.groupEnd("Grettings: ");

// * count
console.count('Bye');
console.count('Bye');
console.count('Bye');
console.countReset('Bye');
console.count('Bye');
console.count('Bye');