// functional declaration

greetPeople();

function greetPeople() {
  console.log('Good Morning');
}

// function expression

let greetPeople = function() {
  console.log('Good Morning');
};

greetPeople();

// arrow function

let greetPeople = () => console.log('Good Morning!');
greetPeople();


