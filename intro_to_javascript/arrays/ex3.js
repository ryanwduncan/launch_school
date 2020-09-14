var myArray = [[1, 3, 6, 11],[4, 2, 4],[9, 17, 16, 0],];

for(var x = 0; x < myArray.length; x++) {
  for(var y = 0; y < myArray[x].length; y++) {
    var value = myArray[x][y];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}
