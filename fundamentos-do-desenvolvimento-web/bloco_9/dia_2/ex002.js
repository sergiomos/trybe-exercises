const getNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 10; i += 1){
    numbers.push(Math.ceil(Math.random() * 50));
  }
  return numbers
}

const sum = (numbers) => numbers.reduce((acc, crr) => acc + crr);

const promise = new Promise((resolve, reject) => {
  const numbers = getNumbers();
  const sumNumbers = sum(numbers)
  if(sumNumbers < 8000) {
    return resolve(sumNumbers)
  }
  reject(numbers)
})
.then((sum) => {
  const divisores = [2, 3, 5, 10];
  console.log('Promisse Resolvida')
  console.log(divisores.map((n) => sum / n))
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
