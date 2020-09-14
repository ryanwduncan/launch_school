function oddLength(Arr) {
  let strLength = arr.reduce((accumulator, element) => {
    return element.length;
  }).reduce((accumulator, element) => {
    return element % 2 === 1;
  })
  return strLength;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLength(arr));
