// Ejercicio 8 – Destructuring

// a) Extraer nombre y edad de un objeto
const persona = {
  nombre: "Luis",
  edad: 30,
  profesion: "Profesor"
};

const { nombre, edad } = persona; // destructuring
console.log("Nombre:", nombre); // Luis
console.log("Edad:", edad);     // 30

// -------------------------------------------------------------

// b) Usar destructuring en una función
function mostrarInfo({ nombre, edad, profesion }) {
  return `Soy ${nombre}, tengo ${edad} años y trabajo como ${profesion}.`;
}

console.log(mostrarInfo(persona));
// "Soy Luis, tengo 30 años y trabajo como Profesor."

// -------------------------------------------------------------

// c) Destructuring con arrays
const ciudad = ["Buenos Aires", "Argentina", 3000000];

const [nombreCiudad, pais, poblacion] = ciudad;

console.log("Ciudad:", nombreCiudad);  // Buenos Aires
console.log("País:", pais);            // Argentina
console.log("Población:", poblacion);  // 3000000
