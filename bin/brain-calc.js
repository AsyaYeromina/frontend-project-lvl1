// Requests answer to the question with one of the operations +, - or *.

import gameEngine from '../src/index.js';
import generateRandomNumber from '../modules/random-generator.js';
import gameGreeting from '../modules/game-greeting.js';
import userName from '../src/cli.js';

const GAME_RULES_MESSAGE = 'What is the result of the expression?';
const LIMIT_RANDOM_NUMBER = 10;
const RANDOM_OPERATION = ['+', '-', '*'];
// let curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
// let curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
// let curRandomOperation;

const getRandomOperation = () => {
  const curRandomOperationIndex = generateRandomNumber(RANDOM_OPERATION.length - 1);
  return RANDOM_OPERATION[curRandomOperationIndex];
};

const getSolution = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
};

const getRandomTaskString = (firstNum, operator, secondNum) => `${firstNum} ${operator} ${secondNum}`;

const init = () => {
  // console.log(`Hello, ${userName}!`);
  // console.log(GAME_RULES_MESSAGE);
  gameGreeting(userName, GAME_RULES_MESSAGE);
  const curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const curRandomOperation = getRandomOperation();
  const curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const curTaskString = getRandomTaskString(curRandomFirst, curRandomOperation, curRandomSecond);
  const curSolution = getSolution(curRandomFirst, curRandomOperation, curRandomSecond);
  gameEngine(curTaskString, curSolution);
};

init();
