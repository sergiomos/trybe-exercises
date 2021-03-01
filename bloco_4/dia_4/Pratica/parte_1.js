let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Seja bem-vinda,' + ' ' + info.personagem);

info['recorrente'] = 'Sim';

for(let index in info){
  console.log(index);
}

for(let index in info){
  console.log(info[index]);
}