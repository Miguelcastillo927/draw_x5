/* En este desafío, se te pide que crees una función llamada "next_pal()" que
reciba como parámetro un número entero positivo, tu objetivo es que la
función retorné el siguiente número palíndromo a partir del recibido por
parámetro. */

// lo primero que haremos sera revisar como  invertir el numero dado
//analizaremos las formas que hay para hacerlo

/* function reverseNum(n) {
  n = n + "";
  let reversed = "";

  for (let i = n.length - 1; i >= 0; i--) {
    reversed += n[i];
  }

  return +reversed;
}

// Uso de la función
let number = 756546778;
let reversedNumber = reverseNum(number);
console.log("El número invertido es:", reversedNumber);

//....................segunda forma

let n = 756546778;
let reversedNumberb = reverseNumberb(n);
console.log("El número invertido es:", reversedNumberb);

function reverseNumberb(n) {
  n = n.toString();

  let array = n.split("");
  let reverse = array.reverse();
  let result = reverse.join("");

  return parseInt(result);
}

//...........................Tercera forma

let num = 756546778;
let reversedNumberc = reverseNumberc(num);
console.log("El número invertido es:", reversedNumberc);

 function reverseNumberc(num) {

  return parseInt(num.toString().split("").reverse().join(""))

 } */

// luego debemos determinar si el numero ingresado y el numero oobtenido como resultado,son iguales
// para el caso trabajaremos la tercera forma tratando de simplificar

/* let num = 193391;
let reversedNumberc = reverseNumberc(num);
console.log("el numero dado es", num );
console.log("El número invertido es:", reversedNumberc);

 function reverseNumberc(num) {

  return parseInt(num.toString().split("").reverse().join(""));

 }

 if ( num === reverseNumberc){

  console.log("Los números son exactamente iguales por tanto es pelindromo.");

} else {

  console.log("Los números no son exactamente iguales por tanto no es palindromo.");
  
}

 */
//luego deberiamos buscar el siguiente numero palindromo

let num = 6548;
let numeroinverso = reverseNumberc(num);
console.log("El número dado es:", num);
console.log("El número invertido es:", numeroinverso);
console.log("El siguiente número palíndromo es:", next_pal(num));

/*  para el caso utilizaremos la funcion while :La sentencia (hacer mientras)
 esta crea un bucle que ejecuta una sentencia especificada, hasta que la condición
 de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar
 la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
 */

function next_pal(num) {
  let proximo = num++; // Comenzamos buscando el siguiente número después de num

  while (true) {
    if (espalindromo(proximo.toString())) {
      return proximo;
    }
    proximo++;
  }
}

function reverseNumberc(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

function espalindromo(str) {
  const inverso = str.split("").reverse().join("");
  return str === inverso;
}
