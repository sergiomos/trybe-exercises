let word = 'joaofernando';
let end = 'fern';

let splitedWord = splitString(word);
let splitedEnd = splitString(end);


function splitString(str) {
  return str.split('')
}

function verifyEndWord(splitedWord, splitedEnd) {
  let endWord = [];

  for(let wordIndex = splitedWord.length - splitedEnd.length ; wordIndex < splitedWord.length; wordIndex += 1 ){
    endWord.push(splitedWord[wordIndex])
  }

  if(endWord.join('') === splitedEnd.join('')) {
    return true;
  }else{
    return false
  }

}

console.log(verifyEndWord(splitedWord, splitedEnd))




