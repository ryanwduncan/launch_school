let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function getMatch(arr, regex) {
	let newArray = arr.map(function(str) {
		return str.match(regex);
	})
	return newArray;
}

console.log(getMatch(words, /ab/));
