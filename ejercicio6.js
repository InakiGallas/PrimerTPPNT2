// Ejercicio 6 – Métodos de array

// a) Usar filter() para obtener números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = numeros.filter(n => n % 2 === 0);

console.log("Array original:", numeros);
console.log("Números pares con filter:", pares); // [2,4,6,8]

// -------------------------------------------------------------

// b) Array de estudiantes y usar map() para obtener nombres y edades
const estudiantes = [
  { nombre: "Ana", edad: 20, calificacion: 8 },
  { nombre: "Luis", edad: 27, calificacion: 9 },
  { nombre: "Carla", edad: 22, calificacion: 7 }
];

const nombresEdades = estudiantes.map(est => ({
  nombre: est.nombre,
  edad: est.edad
}));

console.log("Estudiantes:", estudiantes);
console.log("Nombres y edades con map:", nombresEdades);
// [ { nombre: "Ana", edad: 20 }, { nombre: "Luis", edad: 27 }, { nombre: "Carla", edad: 22 } ]

// -------------------------------------------------------------

// c) Usar find() para obtener la primera persona mayor de 25 años
const mayor25 = estudiantes.find(est => est.edad > 25);

console.log("Primera persona mayor de 25 con find:", mayor25);
// { nombre: "Luis", edad: 27, calificacion: 9 }

// -------------------------------------------------------------

// d) Usar reduce() para calcular la suma de todos los números de un array
const suma = numeros.reduce((acum, valor) => acum + valor, 0);

console.log("Suma total con reduce:", suma); // 45
