/* 
Invierta la cadena proporcionada.

Es posible que deba convertir la cadena en una matriz antes de poder invertirla.

Tu resultado debe ser una cadena.
*/
//first solution
function firstReverseString(str: string) {
  return str.split("").reverse().join("");
}

function secondReverseString(str: string) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const firstReverseResult: string = firstReverseString("hello");
const secondReverseResult: string = secondReverseString("hello");

console.log(firstReverseResult);
console.log(secondReverseResult);
