function findWord(str: string) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

const word = "The quick brown fox jumped over the lazy dog";
const resultWord = findWord(word);

console.log(word.split(" "));
console.log(resultWord);
