// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");


// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// const fs = require('fs');

// console.log('1. Starting sync read...');
// const data = fs.readFileSync('myfile.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');

              
const fs = require('fs');

console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');