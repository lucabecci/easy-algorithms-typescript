/* 
Devuelve el factorial del entero proporcionado.

Si el número entero se representa con la letra n, un factorial es el producto de todos los números enteros positivos menores o iguales an.

Los factoriales a menudo se representan con la notación abreviada n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Solo se proporcionarán a la función números enteros mayores o iguales a cero.
*/

function factorialize(num: number) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

const result: number = factorialize(5);
console.log(result);
