let multiply = (num1, num2) => num1 * num2;

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('Enter the first number: '));
let num2 = Number(rlSync.question('Enter the second number: '));
let sum = multiply(num1,num2);

console.log(`${num1} * ${num2} = ${sum}`);
