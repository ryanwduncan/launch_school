let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let remainder = number1 % number2

console.log(`The remainder of ${number1} divided by ${number2} equates to ${remainder}`);
