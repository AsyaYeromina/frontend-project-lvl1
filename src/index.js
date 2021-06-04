import readlineSync from 'readline-sync';
import userName from './cli.js';

const ATTEMPT_COUNTER = 3;

const gameEngine = (GAME_RULES_MESSAGE, getRoundData) => {
  console.log(`${GAME_RULES_MESSAGE}`);

  for (let i = 0; i < ATTEMPT_COUNTER; i += 1) {
    const [curTask, curSolution] = getRoundData();
    console.log(`Question: ${curTask}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== curSolution) {
      console.log(`'${userAnswer}' is wrong answer ;( \nCorrect answer was '${curSolution}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
