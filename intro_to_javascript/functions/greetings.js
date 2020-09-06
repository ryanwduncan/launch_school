let greetingMessage  = 'Good Morning!';
console.log(greetingMessage)

function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();
