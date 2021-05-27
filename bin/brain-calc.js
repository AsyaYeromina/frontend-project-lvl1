// Requests answer to the question with one of the operations +, - or *.
// Runs 3 times if user answer is correct. If no, starts from sсratch.

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import generateRandomNumber from '../modules/random-generator.js';
// import ATTEMPT_COUNTER from '../modules/variables.js';

const GAME_RULES_MESSAGE = 'What is the result of the expression?';
const ATTEMPT_COUNTER = 3;
const LIMIT_RANDOM_NUMBER = 10;
const RANDOM_OPERATION = ['+', '-', '*'];
let counter = 1;
let curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomOperation;

const getRandomOperation = () => {
  const curRandomOperationIndex = generateRandomNumber(RANDOM_OPERATION.length - 1);
  return RANDOM_OPERATION[curRandomOperationIndex];
};

const getSolution = (first, second, operation) => Number(eval(`${first} ${operation} ${second}`));

const outputToUser = (answer, solution, name) => {
  if (solution === answer) {
    return 'Correct!';
  }
  counter = ATTEMPT_COUNTER;
  return `'${answer}' is wrong answer ;( \nCorrect answer was '${solution}'. \nLet's try again, ${name}!`;
};

const outputOnWin = (name) => `Congratulations, ${name}!`;

const runGame = () => {
  curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomOperation = getRandomOperation();
  const correctSolution = getSolution(curRandomFirst, curRandomSecond, curRandomOperation);

  console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (counter === ATTEMPT_COUNTER) {
    return outputOnWin(userName);
  }
  if (counter < ATTEMPT_COUNTER) {
    counter += 1;
    console.log(outputToUser(userAnswer, correctSolution, userName));
    return runGame();
  }
};

const init = () => {
  console.log(GAME_RULES_MESSAGE);
  console.log(runGame());
};

init();
