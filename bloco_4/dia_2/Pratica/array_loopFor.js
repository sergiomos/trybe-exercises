let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

let soma = null;

for(let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1){
  soma += numbers[indexSoma]
}

console.log('A soma dos termos é igual a: ' + soma)

let mediaAritmetica = soma / numbers.length;

console.log('A média aritmética é igual a: ' + mediaAritmetica)
