// Ejercicio 2.a – Arrays básicos

// Creamos un array de frutas
let frutas = ["manzana", "pera", "naranja", "uva", "banana"];
console.log("Array inicial:", frutas);

// Agregar al inicio con unshift()
frutas.unshift("mango");
console.log("Después de unshift:", frutas);

// Agregar al final con push()
frutas.push("kiwi");
console.log("Después de push:", frutas);

//------------------------------------------------------

// Ejercicio 2.b – Duplicar valores con for

const numeros = [1, 2, 3, 4, 5];
const dobles = [];

for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array con dobles:", dobles);

//------------------------------------------------------

// Ejercicio 2.c – Combinar arrays con concat

const colores1 = ["rojo", "verde", "azul"];
const colores2 = ["amarillo", "violeta"];

const todosLosColores = colores1.concat(colores2);

console.log("Colores 1:", colores1);
console.log("Colores 2:", colores2);
console.log("Todos los colores:", todosLosColores);

//------------------------------------------------------

// Ejercicio 2.d – Eliminar primero y último

const array6 = [10, 20, 30, 40, 50, 60];

// Opción 1: modificando el array
array6.shift(); // elimina primero
array6.pop();   // elimina último
console.log("Array modificado con shift/pop:", array6);

// Opción 2: sin modificar el original, usando slice
const array6b = [10, 20, 30, 40, 50, 60];
const nuevoArray = array6b.slice(1, -1); // desde el índice 1 hasta el penúltimo
console.log("Array original intacto:", array6b);
console.log("Nuevo array con slice:", nuevoArray);