let valorProduto = 10;
let valorVenda = 20;
let unidadesVendidas = 1000;

const imposto = 20/100;
const custoTotal = (valorProduto * imposto) + valorProduto;
const lucro = valorVenda - custoTotal;

console.log(lucro * unidadesVendidas)
