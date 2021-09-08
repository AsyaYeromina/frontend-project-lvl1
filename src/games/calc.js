import startGameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'What is the result of the expression?';
const LIMIT_RANDOM_NUMBER = 10;
const MINIMAL_RANDOM_NUMBER = 0;
const RANDOM_OPERATION = ['+', '-', '*'];

const generateOperation = () => {
  const curRandomOperationIndex = generateRandomNumber(0, RANDOM_OPERATION.length - 1);
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
      return false;
  }
};

const generateGameData = () => {
  const curRandomFirst = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const curRandomOperation = generateOperation();
  const curRandomSecond = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const curTask = `${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`;
  const curSolution = getSolution(curRandomFirst, curRandomOperation, curRandomSecond).toString();
  return [curTask, curSolution];
};

export default () => startGameEngine(GAME_RULES_MESSAGE, generateGameData);
