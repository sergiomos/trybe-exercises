let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function splitNames(names){
  let splitedNames = []

  for(let i in names){
    splitedNames.push(names[i].split(''));
  }

  return splitedNames;
}

function getBigerName(names){
  for(let nameIndex in names){
    let numberOfHits = 0;

    for(let comparationIndex in names){
      if(names[nameIndex].length >= names[comparationIndex].length){
        numberOfHits += 1;

        if(numberOfHits === names.length){
          return names[nameIndex].join('')
        }
      }
    }
  }
}

console.log(getBigerName(splitNames(array)))