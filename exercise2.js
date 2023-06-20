/* Escribe una función que acepte un array con 10 números enteros positivos
(entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
número de teléfono. */

 /* ejemplo:createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-
7890" */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

array.splice(0, 0, "(");
array.splice(4, 0, ")");
array.splice(8, 0, "-");
array.splice(5, 0, " ");
const result = array.join('');
console.log(result); */

// queriendo seguir con una forma similar para resolverlo opte por la interpolacion 
// no es el mas simplificada pero quise hacerlo asi creando una funcion 
//que pudiera llevarlo a cabo

let numeros = [6, 5, 4, 3, 2, 1, 0, 9, 8, 7];
let numeroTelefono = formatearNumeroTelefono(numeros);
console.log(numeroTelefono);

function formatearNumeroTelefono(numeros) {
 
  // Utilizamos la interpolación de cadenas para combinar los elementos del array
  
  // Cada número se concatena junto con los caracteres especiales () - en las posiciones correspondientes.
  let numeroTelefono = `(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`;

  // Devolvemos el número de teléfono formateado.
  return numeroTelefono;
}





