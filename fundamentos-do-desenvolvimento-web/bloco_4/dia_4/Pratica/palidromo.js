function verificarPalindrome(string) {
  let newString = string.split('');
  let invertedString = []

  for(let i = newString.length -1; i >= 0 ; i -= 1){
    invertedString.push(newString[i])
  }

  if(string === invertedString.join('')){
    return true
  }else {
    return false
  }
}

console.log(verificarPalindrome('j'))
