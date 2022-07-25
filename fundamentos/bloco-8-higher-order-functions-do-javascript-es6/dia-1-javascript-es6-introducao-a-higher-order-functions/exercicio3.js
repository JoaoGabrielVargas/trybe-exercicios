const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
    return 1;
  }
  if (RIGHT_ANSWERS === 'N.A'){
    return 0;
  } 
  if (RIGHT_ANSWERS !== STUDENT_ANSWERS){
    return -0.5;
  }
 
}

const checkPoints = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  let count = 0;
  for (let i of RIGHT_ANSWERS){
    const pointsReturn = callback(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    count += pointsReturn;
  }
  return `total de pontos: ${count} pontos`;

}

console.log(checkPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));