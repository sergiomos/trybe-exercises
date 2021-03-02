// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
let n = 5;
let square = [];

for(let index = 0; index < n; index += 1) {
  square.push('*');
}

console.log('Primeiro Desafio')

for(let indexSquare = 0; indexSquare < n; indexSquare += 1) {
  console.log(square.join(''));
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

console.log('Segundo Desafio')

let triangle = []

for(let indexTriangle = 0; indexTriangle < n; indexTriangle += 1) {
  triangle.push('*');
  console.log(triangle.join(''));
}

// Agora inverta o lado do triângulo.

console.log('Terceiro Desafio')

triangle = []
console.log(triangle.join(''));

for(let indexTriangleInverted = 0; indexTriangleInverted < n; indexTriangleInverted += 1) {
  triangle.push('*');
  for(let i = 0; i < n; i++){
    triangle[n - i] = '';
    console.log(triangle.join(''));
  }
}


