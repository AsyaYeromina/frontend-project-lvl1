import gameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const LIMIT_RANDOM_NUMBER = 100;

const isEven = (number) => !(number % 2);

const convertAnswer = (number) => (isEven(number) ? 'yes' : 'no');

function generateGameData() {
  const curTask = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const curSolution = convertAnswer(curTask);
  return [curTask, curSolution];
}

export default () => gameEngine(GAME_RULES_MESSAGE, generateGameData);
