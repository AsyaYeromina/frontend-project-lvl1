import readlineSync from 'readline-sync';
import userName from './cli.js';

// const ATTEMPT_COUNTER = 3;
// let counter = 0;

const gameEngine = (taskString, correctAnswer) => {
  console.log(`${taskString}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== Number(correctAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;( \nCorrect answer was '${Number(correctAnswer)}'. \nLet's try again, ${userName}!`);
  } else console.log('Correct!');
};

export default gameEngine;
