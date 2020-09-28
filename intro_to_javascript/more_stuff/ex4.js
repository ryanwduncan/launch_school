const list1 = [1, 6, 2, 3]
const list2 = [-1, -6, -2, -3]
const list3 = [2, 2]

function maxNum(list) {
	return Math.max(...list)

}

let max1 = maxNum(list1)
let max2 = maxNum(list2)
let max3 = maxNum(list3)

console.log(max1)
console.log(max2)
console.log(max3)


