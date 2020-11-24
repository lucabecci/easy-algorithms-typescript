// Devuelve una matriz que consta del mayor número de cada submatriz proporcionada. Para simplificar, la matriz proporcionada contendrá exactamente 4 submatrices.

// Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro con la sintaxis de la matriz arr[i].

function largestOfFour(arr: Array<number | any>) {
  let results: number | any = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let e = 0; e < arr[i].length; e++) {
      if (arr[i][e] > largest) {
        largest = arr[i][e];
      }
    }
    results[i] = largest;
  }

  return results;
}

const arr = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
const resultArr = largestOfFour(arr);
console.log(resultArr);
