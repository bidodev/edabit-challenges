const mean = (num) => {
  const arrayNumbers = [...num.toString()];
  return (
    arrayNumbers
      .map((number) => parseInt(number, 10))
      .reduce((acc, cur) => acc + cur, 0) / arrayNumbers.length
  );
};

console.log(mean(12345));
