let peca = 'peão'.toLocaleLowerCase();

switch(peca) {
  case 'rainha':
    console.log('all');
    break;
    
  case 'rei':
    console.log('all but only one case');
    break;

  case 'bispo':
    console.log('diagonals');
    break;

  case 'cavalo':
    console.log('L movement');
    break;

  case 'torre':
    console.log('straight lines');
    break;

  case 'peão':
    console.log('one case in the front');
    break;
};
