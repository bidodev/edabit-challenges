const replaceVowel = (word: string): string => {
  const vowels = ["a", "e", "i", "o", "u"];
  const replace = ["1", "2", "3", "4", "5"];

  return word
    .split("")
    .map((letter) =>
      vowels.includes(letter) ? replace[vowels.indexOf(letter)] : letter
    )
    .join("");
};

console.log(replaceVowel("karachi"));
