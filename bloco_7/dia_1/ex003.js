const fatorail = (n) => {
  let result = n;
  for (let i = n - 1; i > 0; i += 1) {
    result *= i;
  };

  return n;
};

console.log(fatorail(5))
