let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 20];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

// 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let soma = null;

for(let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1){
  soma += numbers[indexSoma]
}

console.log('A soma dos termos é igual a: ' + soma)

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = soma / numbers.length;

console.log('A média aritmética é igual a: ' + mediaAritmetica)

// 4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(numbers[numbers.length - 1] > 20){
  console.log('Elemento final do array possui um valor maior que 20')
}else{
  console.log('Elemento final do array possui um valor menor ou igual a 20')
}

/* 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumeroPontos = 0

for(let indexLeitura = 0; indexLeitura < numbers.length; indexLeitura += 1) {

  for(let indexComparacao = 0; indexComparacao < numbers.length; indexComparacao += 1) {
    if(numbers[indexComparacao]  < numbers[indexLeitura]) {
      maiorNumeroPontos += 1
    }

    if(maiorNumeroPontos === numbers.length){
      console.log('O maior numero encontrado é o: ' + numbers[indexLeitura])
    }

    console.log('O numero:' + numbers[indexLeitura] + 'fez' + maiorNumeroPontos + 'pontos')
  }

  maiorNumeroPontos = 0
}
*/

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let quantosImpares = 0;

for(let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1) {
  if(numbers[indexMenor] % 2 !== 0) {
    quantosImpares += 1;
  }
} 

console.log('Temos ' + quantosImpares + ' numeros impares')

// 8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado
let newArray = []
for(let numberOfElements = 1; numberOfElements <= 25; numberOfElements += 1 ) {
  newArray.push(numberOfElements)
}

console.log(newArray)

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let indexDividendo = 0; indexDividendo < newArray.length; indexDividendo += 1){
  console.log(newArray[indexDividendo] / 2)
}
