let array = [2, 4, 6, 7, 10, 0, -3];

function encontrarMenorValor() {
  for(let valor in array){
    let pontos = 0

    for(let comparacao in array) {
      if(array[valor] <= array[comparacao]){
        pontos += 1;

        if(pontos === array.length){
          return array[valor]
        }
      }
    }
  }
}

function indexMenorValor(){
  let maiorValor = encontrarMenorValor();
  return array.indexOf(maiorValor)
}

console.log(indexMenorValor());