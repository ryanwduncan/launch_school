let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray = array.filter(function(num) {
  if (Number.isInteger(num) === true) {
    return num;
  }
  });

function removeNonInteger(arr) {
  return array.filter(Number.isInteger);
}

/* console.log(NewArray); */
console.log(removeNonInteger(array));
