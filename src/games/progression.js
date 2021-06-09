import gameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'What number is missing in the progression?';
const LIMIT_RANDOM_NUMBER = 100;
const progressionLength = 10;
const maxProgressionDifference = 20;

function generateGameData() {
  const firstRandomNumber = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  const progressionDifference = generateRandomNumber(maxProgressionDifference);
  const randomArrayElementIndex = generateRandomNumber(progressionLength);
  const generatedArr = [firstRandomNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = (generatedArr[generatedArr.length - 1]) + progressionDifference;
    generatedArr.push(nextNumber);
  }
  const correctSolution = generatedArr[randomArrayElementIndex];
  generatedArr[randomArrayElementIndex] = '..';
  return [generatedArr.join(' '), correctSolution.toString()];
}

export default () => gameEngine(GAME_RULES_MESSAGE, generateGameData);
