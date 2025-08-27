// Ejercicio 1.a – let y const

// Declaramos una variable con let (se puede reasignar)
let edad = 26;
console.log("Edad inicial:", edad);

// Reasignamos valor
edad = 27;
console.log("Edad reasignada:", edad);

// Declaramos una constante con const (no se puede reasignar)
const nombre = "Juan";
console.log("Nombre inicial:", nombre);

// Intento de reasignación de una constante
// ⚠️ Esto tira error: "Assignment to constant variable"
// nombre = "Pedro";
//-----------------------------------------------------------------------

// Ejercicio 1.b – let vs const en bucles

// Caso con let ✅
let contador = 0;
for (let i = 0; i < 5; i++) {
  contador++; // podemos modificar contador sin problema
}
console.log("Contador final con let:", contador);

// Caso con const ❌
// Si intentamos hacer lo mismo con const, explota:
const contadorConst = 0;
// for (let i = 0; i < 5; i++) {
//   contadorConst++; // ❌ TypeError: Assignment to constant variable
// }
// console.log("Contador final con const:", contadorConst);

//------------------------------------------------------------------------

// Ejercicio 1.c – const con objetos

const persona = {
  nombre: "Juan",
  edad: 26,
  ciudad: "Buenos Aires"
};

console.log("Objeto inicial:", persona);

// Modificamos una propiedad existente
persona.edad = 27;

// Agregamos una propiedad nueva
persona.profesion = "Estudiante";

console.log("Objeto modificado:", persona);

// Intento de reasignación completa ❌
// persona = { nombre: "Pedro", edad: 30 }; // ❌ Error: Assignment to constant variable
//------------------------------------------------------------------------

// Ejercicio 1.d – var vs let vs const y el scope

function probarScope() {
  if (true) {
    var variableVar = "Soy var";
    let variableLet = "Soy let";
    const variableConst = "Soy const";

    console.log("Dentro del bloque:");
    console.log(variableVar);   // ✅ accesible
    console.log(variableLet);   // ✅ accesible
    console.log(variableConst); // ✅ accesible
  }

  console.log("\nFuera del bloque:");
  console.log(variableVar);   // ✅ accesible (var es function-scoped)
  // console.log(variableLet);   // ❌ ReferenceError (let es block-scoped)
  // console.log(variableConst); // ❌ ReferenceError (const es block-scoped)
}

probarScope();
