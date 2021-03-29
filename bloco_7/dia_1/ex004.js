const longestWord = (str) => {
  const words = str.split(' ');
  const higherLength = words.map((word) => word.length).sort((a, b) => b - a)[0];
  return words.find((word) => word.length === higherLength);
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
