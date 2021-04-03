let n = 5

function factoralNumber(number){
  let factorial = 0;

  for(let soma = 1; soma <= number; soma += 1){
    factorial += soma
  }

  return factorial
}

console.log(factoralNumber(n))