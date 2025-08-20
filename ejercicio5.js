// Ejercicio 5 – Arrow Functions

// a) Convertir función tradicional a arrow function
// Versión original:
// function saludar(nombre) {
//   return "Hola, " + nombre + "!";
// }

const saludar = (nombre) => `Hola, ${nombre}!`;
console.log(saludar("Ana")); // Hola, Ana!

// -------------------------------------------------------------

// b) Arrow function que recibe un número y devuelve su cuadrado
const cuadrado = (num) => num * num;
console.log("Cuadrado de 4:", cuadrado(4)); // 16

// -------------------------------------------------------------

// c) Arrow function que recibe dos números y devuelve el mayor
const mayor = (a, b) => (a > b ? a : b);
console.log("Mayor entre 10 y 7:", mayor(10, 7)); // 10

// -------------------------------------------------------------

// d) Arrow function que recibe un array y devuelve otro array con los elementos al cuadrado usando map()
const cuadradosArray = (arr) => arr.map((n) => n * n);
console.log("Cuadrados de [1,2,3,4]:", cuadradosArray([1, 2, 3, 4])); // [1,4,9,16]
