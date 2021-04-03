let number = 10;
let isNumber = typeof number === 'number'

if(isNumber) {
  if(number > 0){
    console.log('Positive')
  }else {
    console.log('Negative')
  }
}