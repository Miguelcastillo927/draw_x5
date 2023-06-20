/* Dado un array de nombres, tu objetivo es crear una función que cuente cuántas veces
se repite cada nombre y los represente con asteriscos (*).
Debes implementar la función countNameRepetitions(names), que tomará como
parámetro un array de nombres y devolverá un objeto con los nombres y su
representación de asteriscos correspondiente. */

//implementando el bucle for

/* let names = ['Maria', 'Helena', 'Carolina', 'Eileen', 'Hanna', 'Carolina', 'Miguel', 'Daniel', 'Helena', 'Miguel', 'Carolina', 'Eileen'];
let result = countNameRepetitions(names);
console.log(result);

function countNameRepetitions(names) {
  let nameCounts = {};

  // Contar la cantidad de veces que se repite cada nombre
  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (nameCounts[name]) {
      nameCounts[name]++;
    } else {
      nameCounts[name] = 1;
    }
  }

  let result = {};

  // Representar los nombres con asteriscos
  Object.keys(nameCounts).forEach((name) => {
    let asterisks = '*'.repeat(nameCounts[name]);
    result[name] = asterisks;
  });

  return result;
} */

// implementando el bucle for each

let names = ['Maria', 'Helena', 'Carolina', 'Eileen', 'Hanna', 'Carolina', 'Miguel', 'Daniel', 'Helena', 'Miguel', 'Carolina', 'Eileen'];
let result = countNameRepetitions(names);
console.log(result);

function countNameRepetitions(names) {
  let nameCounts = {};

  // Contar la cantidad de veces que se repite cada nombre
  names.forEach((name) => {
    if (nameCounts[name]) {
      nameCounts[name]++;
    } else {
      nameCounts[name] = 1;
    }
  });

  let result = {};

  // Representar los nombres con asteriscos
  Object.keys(nameCounts).forEach((name) => {
    let asterisks = '*'.repeat(nameCounts[name]);
    result[name] = asterisks;
  });

  return result;
}
 