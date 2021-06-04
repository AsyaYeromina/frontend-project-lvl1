import gameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'What is the result of the expression?';
const LIMIT_RANDOM_NUMBER = 10;
const RANDOM_OPERATION = ['+', '-', '*'];

const generateOperation = () => {
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
      return false;
  }
};

const getRoundData = () => {
  const curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const curRandomOperation = generateOperation();
  const curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const curTask = `${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`;
  const curSolution = getSolution(curRandomFirst, curRandomOperation, curRandomSecond).toString();
  return [curTask, curSolution];
};

export default () => gameEngine(GAME_RULES_MESSAGE, getRoundData);
