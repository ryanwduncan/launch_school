const readline = require('readline-sync');
const CHOICE_NAMES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES = ['r', 'p', 's', 'l', 'rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let compScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'rock' && computerChoice === 'spock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'paper' && computerChoice === 'lizard') ||
    (choice === 'scissors' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'spock' && computerChoice === 'lizard') ||
    (choice === 'spock' && computerChoice === 'paper')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
}

function displayScore(func) {
  if (func === 'You win!') {
    return playerScore += 1;
  } else {
    return compScore += 1;
  }
}

let repeat = 1;
while (repeat > 0) {
  prompt(`Chose one: ${CHOICE_NAMES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  while (choice === 's') {
    prompt("Did you mean Spock or Scissors?");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.ceil(Math.random());
  let computerChoice = CHOICE_NAMES[randomIndex];

  displayWinner(choice, computerChoice);
  displayScore();

  prompt(`Player Score: ${playerScore}`);
  prompt(`Computer Score: ${compScore}`);

  prompt('Do you want to play again? (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y' || playerScore === 5 || compScore === 5) repeat--;
}