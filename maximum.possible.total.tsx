/**
 * @params: array
 * @return: number
 *
 * Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
 */
const maxTotal = (nums: number[]): number => {
  //1. Sort the numbers in the decresc order..
  const fiveBiggerNumbers = nums.sort((a, b) => b - a);

  //2. Function so sum the five first numbers of the array
  const reducer = (accumulator: number, currentValue: number, index: number) => index < 5 ? accumulator + currentValue : accumulator;
  
  //3. Reduce the array
  return fiveBiggerNumbers.reduce(reducer);
};

//test
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // ➞ 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // ➞ 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // ➞ 40
