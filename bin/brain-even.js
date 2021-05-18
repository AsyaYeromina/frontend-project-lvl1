// Brain-even.
// Requests ansver 'yes' if the number is even, 'no' if the number is odd
// Runs 3 times if user answer is correct. If no, starts from sсratch.

import readlineSync from 'readline-sync';

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function isEven(number) {
  return !(number % 2);
}

const currentRandomNumber = generateRandomNumber();

function convertAnswer(number) {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
}

function answerToUser(userAnswer) {
  if (userAnswer === convertAnswer(currentRandomNumber)) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(.
Correct answer was '${convertAnswer(currentRandomNumber)}'.
Let's try again, {userName}!`;
}

console.log(`Question: ${currentRandomNumber}`);
const userAnswer = readlineSync.question('Your answer: ');

console.log(answerToUser(userAnswer));
