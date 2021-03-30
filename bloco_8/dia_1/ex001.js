const emailName = (nome) => nome.toLowerCase().replace(' ', '_');

const employer = (nomeCompleto) => ({
  nomeCompleto,
  email: `${emailName(nomeCompleto)}@trybe.com`
});

const newEmployees = (employer) => {
  const employees = {
    id1: employer('Pedro Guerra'),
    id2: employer('Luiza Drumond'),
    id3: employer('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employer));

/* Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .*/