/**
 *
 * @param {*} str
 * Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign.
 * Return false otherwise.
 */

const plusSign = (str: string): boolean => {
  const isCharacterALetter = (char: string): boolean => {
    return char.toLowerCase() != char.toUpperCase();
  };
  const res = [];

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (isCharacterALetter(element)) {
      res.push(
        str[str.indexOf(element) - 1] === "+" &&
          str[str.indexOf(element) + 1] === "+"
      );
    }
  }
  return res.every((el) => el === true);
};

console.log(plusSign("+f+d+c+#+f+")); //➞ true
console.log(plusSign("+d+=3=+s+")); //➞ true
console.log(plusSign("f++d+g+8+")); //➞ false
console.log(plusSign("+s+7+fg+r+8+")); //➞ false
