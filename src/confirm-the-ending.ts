//Compruebe si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

function confirmEnding(str: string, target: string): boolean {
  return str.slice(-target.length) === target;
}

const confirmResult: boolean = confirmEnding(
  "He has to give me a new name",
  "name"
);

console.log(confirmResult);
