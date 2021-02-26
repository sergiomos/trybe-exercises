let salarioBruto = 3500;

let INSS = 0;

if (salarioBruto <= 1556.94){
  INSS = 8/100;
}else if (salarioBruto <= 2594.92){
  INSS = 9/100;
}else if (salarioBruto <= 5189.82){
  INSS = 11/100;
}else if(salarioBruto > 5189.82) {
  INSS = 570.88;
}

const salarioBase = salarioBruto - (salarioBruto * INSS);

let IR = 0;
let parcelaIR = 0

if (salarioBase <= 1903.98){
  IR = 0
}else if (salarioBase <= 2826.65){
  IR = 7.5/100;  
  parcelaIR = 142.80;
}else if (salarioBase <= 3751.05){
  IR = 15/100;
  parcelaIR = 354.80;
}else if(salarioBase <= 4664.68) {
  IR = 22.5/100;
  parcelaIR = 636.13;
}else if(salarioBase <= 4664.68){
  IR = 27.5/100;
  parcelaIR = 869.36;
}

const salarioLiquido = salarioBase - (salarioBase * IR - parcelaIR)

console.log(salarioLiquido);
