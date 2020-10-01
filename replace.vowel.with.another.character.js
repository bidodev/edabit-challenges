var replaceVowel = function (word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var replace = ["1", "2", "3", "4", "5"];
    return word
        .split("")
        .map(function (letter) {
        return vowels.includes(letter) ? replace[vowels.indexOf(letter)] : letter;
    })
        .join("");
};
console.log(replaceVowel("karachi"));
