console.log('it works!');

// Simple function with items declared in global scope
const timeDesigning = 3;
const timeAssembling = 12;
const timeFinishing = 2.25;

function timeTotal() {
  const totalTime = timeDesigning + timeAssembling + timeFinishing;
  return totalTime;
}

// Function definition
// Inside {} is the body of the function
// Create parameters
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.2) {
  // Show the variables available
  console.log(billAmount, taxRate);
  console.log('Running Calculate Bill!!');
  // yields odd result 112.999999...
  // Change specific amounts to variables
  // Multiplication renders before addition, prettier removes parentheses
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// calculateBill();

// Call or run it from the browser
// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal, myTotal2);

// example of passing a defined variable into a function- tricky!
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);

// this would be global scope, not what we want
const firstName = sayHiTo('junior');

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo(`young'un`);
// console.log(greeting);

// Example showing more complex argument
// const myTotal3 = calculateBill(20 + 20 + 30 + 30, 0.15);
// console.log(myTotal3);

// Example showing complex argument
const kait = 60;
const myTotal4 = calculateBill(kait + 40, 0.2);
console.log(myTotal4);

const docName = 'Benjamin';

function doctorize(docName = 'Buzz') {
  return `Doctor ${docName}`;
}

// Not okay to re-use a variable in same scope, is okay to use parameters
// Only available within the function
function yell(docName = 'Silly Goose') {
  return `HEY ${docName.toUpperCase()}`;
}

const docStuff = doctorize('Sunny');
console.log(docStuff);

// To fall back to set default, need to pass undefined
const myBill4 = calculateBill(100, undefined, 0.18);
console.log(myBill4);
