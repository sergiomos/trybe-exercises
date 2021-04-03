let angule1 = 60;
let angule2 = 20;
let angule3 = 100;

let isNumber = typeof angule1 === 'number' && typeof angule2 === 'number' && typeof angule3 === 'number';

let isTriangle = angule1 + angule2 + angule3 === 180

if(isNumber) {
  if(isTriangle){
    console.log(true)
  }else {
    console.log(false)
  }
}else {
  console.log('Erro: angulos inválidos')
}
