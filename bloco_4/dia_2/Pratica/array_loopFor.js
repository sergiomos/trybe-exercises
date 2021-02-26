let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 20];

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

if(numbers[numbers.length - 1] > 20){
  console.log('Elemento final do array possui um valor maior que 20')
}else{
  console.log('Elemento final do array possui um valor menor ou igual a 20')
}