let array = [2, 3, 6, 7, 10, 1];

function encontrarMaiorValor() {
  for(let valor in array){
    let pontos = 0

    for(let comparacao in array) {
      if(array[valor] >= array[comparacao]){
        pontos += 1;

        if(pontos === array.length){
          return array[valor]
        }
      }
    }
  }
}

function indexMaiorValor(){
  let maiorValor = encontrarMaiorValor();
  return array.indexOf(maiorValor)
}

console.log(indexMaiorValor());