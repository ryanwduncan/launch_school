const READLINE = require('READLINE-sync');
const MSGS = require('./calculator_messages.json');
const LANGUAGE = 'en';

function calcMsg(message, lang = 'en') {
  return MSGS[lang][message];
}

function prompt(key) {
  let message = calcMsg(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt('welcome');

  prompt('firstNumber');
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt('invalid');
    number1 = READLINE.question();
  }

  prompt('secondNumber');
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt('invalid');
    number2 = READLINE.question();
  }

  prompt('whichOp');
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('chooseOp');
    operation = READLINE.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The output is: ${output}.`);

  prompt('restart');
  let repeat = READLINE.question().toLowerCase();

  while (!['y', 'n', 's', 'j', 'o'].includes(repeat)) {
    prompt('yesOrNo');
    repeat = READLINE.question().toLowerCase();
  }

  if (repeat !== true) {
    prompt('goodbye');
    break;
  }
}