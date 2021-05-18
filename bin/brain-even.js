// Requests ansver 'yes' if the number is even, 'no' if the number is odd
// Runs 3 times if user answer is correct. If no, starts from sсratch.

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function isEven(number) {
  return !(number % 2);
}

function convertAnswer(number) {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
}

let counter = 0;
let currentRandomNumber = generateRandomNumber();
const ATTEMPT_COUNTER = 3;

function answerToUser(userAnswer) {
  if (userAnswer === convertAnswer(currentRandomNumber)) {
    counter += 1;
    if (counter === ATTEMPT_COUNTER) {
      return `Congratulations, ${userName}!`;
    }
    return 'Correct!';
  }
  counter = ATTEMPT_COUNTER;
  return `'${userAnswer}' is wrong answer ;( \nCorrect answer was '${convertAnswer(currentRandomNumber)}'. \nLet's try again, ${userName}!`;
}

function init() {
  while (counter < ATTEMPT_COUNTER) {
    currentRandomNumber = generateRandomNumber();
    console.log(`Question: ${currentRandomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(answerToUser(userAnswer));
  }
}

init();
