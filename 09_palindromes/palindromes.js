const palindromes = function (input) {
    let word = input.split("").map((c) => c.toLowerCase()).filter(
        (c) => (c >= 'a' && c <= 'z') || c === "0" || (c >= "1" && c <= "9")).join("");
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
};


// Do not edit below this line
module.exports = palindromes;
