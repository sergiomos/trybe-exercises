window.onload = () => {
  setStatesOptions();
  
};

document.querySelector('form').addEventListener('submit', handleSubmit);


const states = [   
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

function setStatesOptions () {
  const select = document.querySelector('#estados');
  
  states.forEach((element) => {
    const state = document.createElement('option');
    state.innerHTML = element;
    state.value = element;
    select.appendChild(state);
  })
}

// function getDate() {
//   const InputDate = document.querySelector('#initial-date');
//   const convetedDate = InputDate.value.split('-').map(element => Number(element));

//   return date = {
//     'day': convetedDate[2],
//     'mouth': convetedDate[1],
//     'year': convetedDate[0],
//   }
// }

// function dateValidation() {
//   const date = getDate();
//   const isValid = () => {
//     if(date.day < 31 && date.mouth < 12 && date.year > 0) {
//       return true
//     }

//     return false
//   }

//   return isValid();
// }

function cpfValidation() {
  const cpfInput = document.querySelector('#cpf');
  const cpfNumbers = cpfInput.value.split('')
  const isValid = cpfNumbers.map((num) => {return parseInt(num)})
  

  console.log(isValid)
}


function handleSubmit(Event) {
  Event.preventDefault();
  // const isDateValid = dateValidation();
  const isCPFValid = cpfValidation();

  // if (!isDateValid) {
  //   alert('Erro: Data de inicio invalida!')
  // }
}
