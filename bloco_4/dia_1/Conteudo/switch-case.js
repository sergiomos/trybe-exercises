let grade = 0;
let status = '';

if(grade >= 80) {
  status = 'aprovada';
}else if(grade >= 60){
  status = 'lista';
}else if(grade < 60) {
  status = 'reprovada';
};

switch(status) {
  case 'aprovada':
    console.log('Parabéns você foi aprovada(o)!');
    break;
  
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;
  
  default:
    console.log('Não se aplica')
}


