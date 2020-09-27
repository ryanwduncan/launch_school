const obj = {a: 1, b: 2, c: 3}
let array = []

array = Object.keys(obj)
for (let i = 0; i < array.length; i++) {
  array[i] = array[i].toUpperCase()
}
console.log(array)
console.log(obj)
