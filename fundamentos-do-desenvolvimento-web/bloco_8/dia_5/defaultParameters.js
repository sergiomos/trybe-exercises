// Exemplo 1:
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

//Execicio
const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));