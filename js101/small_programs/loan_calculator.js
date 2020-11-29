const READLINE = require('readline-sync');
const MSGS = require('./loan_calc_messages.json');

// creates formated generatePrompt to ask user questions
function generatePrompt(message) {
  message = getJsonMessage(message);
  return console.log(`=> ${message}`);
}

// allows forretrieval of json msgs using just the msg key
function getJsonMessage(message) {
  return MSGS[message];
}

// checks to see if user input is valid
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// converts entered APR string into monthly interest rate int
function getMonthlyPayments(aprString) {
  let apr = aprString.split('%');
  if (aprString === '0') {
    return aprString;
  } else {
    return (Number(apr[0]) / 12);
  }
}

// splits off currency and returns only the loan amount
function getLoanAmount(loan) {
  if (loan[0] !== /[$€]/) {
    return Number(loan)
  } else {
    loan = loan.split('$');
    return Number(loan[1]);
  }
}

// requests and stores the user's monthly interest rate
generatePrompt('apr');
let aprString = READLINE.question();
let monthlyInterest = getMonthlyPayments(aprString);

// requests and stores the user's loan duration in months
generatePrompt('duration');
let loanDuration = READLINE.question();

while (invalidNumber(loanDuration)) {
  generatePrompt('invalid');
  loanDuration = Number(READLINE.question());
}

//requests and stores the user's loan amount in USD
generatePrompt('loanAmount');
let loanAmount = READLINE.question();
loanAmount = getLoanAmount(loanAmount);

// calculates the user's monthly payment amount
let monthlyPayment = (loanAmount * (monthlyInterest /
  (1 - Math.pow((1 + monthlyInterest),
    (-loanDuration))))).toFixed(2);

console.log(`=> Your monthly payment is $${monthlyPayment}`);