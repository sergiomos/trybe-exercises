const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const validateAnswer = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(validateAnswer(correctAnswer)(userAnswer));