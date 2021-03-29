const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara', 
  turno: 'noite',
};

const addTurn = (turnKey, turn, obj) => {
  obj[turnKey] = turn;
  return obj;
}

addTurn('turno', 'Noite', lesson2)

const showObjectKeys = (obj) => Object.keys(obj);

const showObjectLength = (obj) => Object.keys(obj).length;

const listObjectValues = (obj) => Object.values(obj);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

const studentsAmount = () => {
  const numeroEstudantes = Object.entries(allLessons).map(values => values[1].numeroEstudantes);
  return numeroEstudantes.reduce((total, value) => total + value);
};

const getValueByNumber = (key, index) => {
  return Object.values(allLessons[key])[index];
};

const verifyPair = (obj, key, value) => {
  const hasKey = Object.keys(obj).find((element) => element === key) !== undefined;
  const hasValue = obj[key] === value;
  if (hasKey && hasValue) return true;
  return false
};
