// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
let n = 5;
let square = [];

for(let index = 0; index < n; index += 1) {
  square.push('*');
}

console.log('Primeiro Desafio')

for(let index = 0; index < n; index += 1) {
  console.log(square.join(''));
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

console.log('Segundo Desafio')

let triangle = []

for(let index = 0; index < n; index += 1) {
  triangle.push('*');
  console.log(triangle.join(''));
}

