// const generateRandomNumber = (number) => Math.floor(Math.random() * number);
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default generateRandomNumber;
