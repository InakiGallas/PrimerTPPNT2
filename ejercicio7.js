// Ejercicio 7 – Spread Operator

// a) Función que recibe un número indefinido de argumentos y devuelve la suma
function sumar(...numeros) {   // REST en parámetros
  return numeros.reduce((acum, valor) => acum + valor, 0);
}

console.log("Suma de 1,2,3,4:", sumar(1, 2, 3, 4)); // 10

// -------------------------------------------------------------

// b) Usar spread operator para encontrar el número máximo
const lista = [5, 12, 3, 27, 8];
const maximo = Math.max(...lista); // SPREAD abre el array en valores sueltos

console.log("Máximo en la lista:", maximo); // 27

// -------------------------------------------------------------

// c) Combinar dos objetos en uno solo con spread
const obj1 = { nombre: "Ana", edad: 25 };
const obj2 = { profesion: "Ingeniera", pais: "Argentina" };

const combinado = { ...obj1, ...obj2 };
console.log("Objeto combinado:", combinado);
// { nombre: 'Ana', edad: 25, profesion: 'Ingeniera', pais: 'Argentina' }

// -------------------------------------------------------------

// d) Aplanar un array con subarrays
const anidado = [1, [2, 3], [4]];

// Usamos flat() para aplanar (spread solo no alcanza)
const plano = anidado.flat();
console.log("Array plano con flat():", plano); // [1, 2, 3, 4]

// Otra forma (spread + concat)
const plano2 = [].concat(...anidado);
console.log("Array plano con concat + spread:", plano2); // [1, 2, 3, 4]
