const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  const checkedAnswer = studentAnswers;
  rightAnswers.forEach((rightAnswers) => {
    checkedAnswer.map((answer) => answer === rightAnswers)
  });

  return checkedAnswer;
};

const rightAnswersPoint = (rightAnswers, studentAnswers, check) => check(rightAnswers, studentAnswers);

console.log(rightAnswersPoint(rightAnswers, studentAnswers, checkAnswers));