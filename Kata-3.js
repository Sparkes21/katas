const numberOfVowels = function(data) {
  let vowels = [];
  for (i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      vowels = vowels += data[i];
    }
  }
  return vowels.length
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));