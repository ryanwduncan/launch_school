
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else if (Number.isInteger(num) === false ) {
    console.log('Error: Not a number.');
  }
    else  {
    console.log("odd");
  }
}



evenOrOdd('pizza');
