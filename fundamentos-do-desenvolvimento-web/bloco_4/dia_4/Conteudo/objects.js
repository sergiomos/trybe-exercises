let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  merdal: {
    golden: 2,
    silver: 3
  }
}

console.log('A Jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade' )

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A Jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por' + ' ' + player.bestInTheWorld.length + ' ' + 'vezes')

console.log('A jogadora possui' + ' ' + player.merdal.golden + ' ' + 'medalhas de outro e' + ' ' + player.merdal.silver + ' ' + 'medalhas de prata')

