let numbers = [3, 5, 7];

function sumOfSquare(arr) {
  return arr.reduce((accumulator, element) => accumulator + element * element, 0)
}

console.log(sumOfSquare(numbers));
