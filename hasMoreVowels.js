/* Write a function called hasMoreVowels that takes in one argument, word.
When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false.
The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true: */

const vowels = ["a", "e", "i", "o", "u"];

const hasMoreVowels = word => {
    let vowelCounter = 0;
    let consonantCounter = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCounter++;
      } else {
        consonantCounter++;
      }
    }
    return vowelCounter > consonantCounter;
};

console.log(hasMoreVowels("Ukulele"));
console.log(hasMoreVowels("Graph"));