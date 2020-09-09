function cap(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(cap('Ryan W. Duncan'));
