function factorial(num) {
  for (let base = 1; base < num; base++) {
    let mult = base * (base + 1);
    let result = mult * mult;
    return result;
  }
}

console.log(factorial(7)); 
