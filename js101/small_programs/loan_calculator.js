const READLINE = require('readline-sync');
const MSGS = require('./loan_calc_messages.json');

// creates formated prompt to ask user questions
function prompt(message) {
  message = calcMsgs(message);
  return console.log(`=> ${message}`);
}

// allows forretrieval of json msgs using just the msg key
function calcMsgs(message) {
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
prompt('apr');
let arpString = READLINE.question();
let monthlyInterest = getMonthlyPayments(arpString);
debugger;
// requests and stores the user's loan duration in months
prompt('duration');
let loanDuration = READLINE.question();

while (invalidNumber(loanDuration)) {
  prompt('invalid');
  loanDuration = Number(READLINE.question());
}
debugger;
//requests and stores the user's loan amount in USD
prompt('loanAmount');
let loanAmount = READLINE.question();
loanAmount = getLoanAmount(loanAmount);
debugger;
// calculates the user's monthly payment amount
let monthlyPayment = (loanAmount * (monthlyInterest /
  (1 - Math.pow((1 + monthlyInterest),
    (-loanDuration))))).toFixed(2);
debugger;
// NOTE: figure out how to interpolate json string
console.log(`=> Your monthly payment is $${monthlyPayment}`);