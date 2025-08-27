// Ejercicio 4 – Template Literals

// a) Usando template literals, crea una cadena que incluya variables para tu nombre, edad y profesión.
const nombre = "Ana";
const edad = 26;
const profesion = "Desarrolladora";

const presentacion = `Hola, soy ${nombre}, tengo ${edad} años y trabajo como ${profesion}.`;
console.log(presentacion);

// -------------------------------------------------------------

// b) Crea una función que reciba un precio y una cantidad, y devuelva una frase usando cálculos.
//    La frase es: “El total es: [total]“
const totalCompra = (precio, cantidad) => {
  const total = precio * cantidad;
  return `El total es: ${total}`;
};

console.log(totalCompra(1500, 3)); // "El total es: 4500"

// -------------------------------------------------------------

// c) Utiliza template literals para crear un mensaje de error que incluya el nombre del error y su descripción.

const nombreError = "TypeError";
const descripcion = "Se intentó llamar a algo que no es una función";

const mensajeError = `Error: ${nombreError} - Descripción: ${descripcion}`;
console.log(mensajeError);
