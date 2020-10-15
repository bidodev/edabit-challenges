// Longest Sequence of Consecutive Zeroes
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.
var longestZero = function (value) {
    var splited = value.split('1');
    var length = splited.map(function (el) { return el.length; });
    return (splited[length.indexOf(Math.max.apply(Math, length))]);
};
//Examples
console.log(longestZero("01100001011000")); //➞ "0000"
console.log(longestZero("100100100")); //➞ "00"
console.log(longestZero("11111")); //➞ ""
// Notes
// If no zeroes exist in the input, return an empty string.
