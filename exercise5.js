/* Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La
X debe tener un tamaño variable según el número ingresado.
Debes implementar una función llamada drawX(tamano), donde el parámetro
tamano es un número entero y dibuje la X correspondiente. */

/* La función drawX es una función que acepta un parámetro
 tamano, que indica el tamaño deseado para dibujar la 
letra "X". */
// en este caso 21



drawX (21)

function drawX(tamano) {
    for (let i = 0; i < tamano; i++) {
      let linea = "";
      for (let k = 0; k < tamano; k++) {
        if (k === i || k === tamano - 1 - i) {
          linea += "*";
        } else {
          linea += " ";
        }
      }
      console.log(linea);
    }
  }
  
