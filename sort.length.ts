/**
 * Create a function that takes a string and returns a string ordered by the length of the words.
 * From shortest to longest word.
 * If there are words with the same amount of letters, order them alphabetically.
 */

const sortByLength = (str:string):string => {
  return [...str.split(" ")]
    .sort(
      (a, b) =>
        a.length - b.length ||
        a.localeCompare(b, undefined, { sensitivity: "base" })
    )
    .join(" ");
};
//1. order them by length
//2. Order them alphabetically

console.log(sortByLength("Hello my friend")); //"my Hello friend"
console.log(sortByLength("Three can keep a secret, if two of them are dead"));
console.log(sortByLength("To be or not to be, that is the question."));
console.log(sortByLength("I have a dream")); //"a I have dream"
console.log(sortByLength("This the is end")); //"is end the This")
