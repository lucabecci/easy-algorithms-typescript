// Truncar una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con un ...final.

function truncateString(str: string, num: number): string {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const finalStr: string = truncateString(
  "A-tisket a-tasket A green and yellow basket",
  2
);

console.log(finalStr);
