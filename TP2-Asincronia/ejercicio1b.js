const URL = "https://www.mockachino.com/33754ea7-2586-48/preparativos";

async function listoParaViajar() {
  const response = await fetch(URL);
  const data = await response.json();

  // La API devuelve un array de preparativos
  const faltantes = data.filter(item => !item.ok);

  if (faltantes.length === 0) {
    console.log("✅ ¡Todo listo para viajar!");
  } else {
    console.log("⚠️ Faltan completar:");
    faltantes.forEach(item => {
      console.log("-", item.nombre, "(responsable:", item.responsable, ")");
    });
  }
}

// Ejecutamos
listoParaViajar();