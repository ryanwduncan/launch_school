function times(number1, number2 = 1, number3 = 1, number4 = 1, number5 = 1) {
  let result = number1 * number2 * number3 * number4 * number5;
  return result;
}

console.log(times(1));
console.log(times(1,2));
console.log(times(1,2,3));
console.log(times(1,2,3,4));
console.log(times(1,2,3,4,5));
