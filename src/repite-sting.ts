// Repite una cadena dada str(primer argumento) por numtiempos (segundo argumento). Devuelve una cadena vacía si numno es un número positivo. A los efectos de este desafío, no utilice el .repeat()método integrado .

function repeatStringNumTimes(str: string, num: number): string {
  let newStr: string = "";

  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

const resultStr: string = repeatStringNumTimes("abc", 3);

console.log(resultStr);
