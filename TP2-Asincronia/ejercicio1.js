
let preparativos = [
  { nombre: "documentos al día", ok: true },
  { nombre: "alojamiento reservado", ok: true },
  { nombre: "transporte confirmado", ok: true },
  { nombre: "seguro de viaje", ok: true },
  { nombre: "pasajes comprados", ok: true }
];

function listoParaViajar(preps) {
  const faltantes = preps.filter(p => !p.ok).map(p => p.nombre);
  if (faltantes.length === 0) return "✅ ¡Todo listo para viajar!";
  return "⚠️ Faltan completar: " + faltantes.join(", ");
}

console.log("Estado inicial:", listoParaViajar(preparativos));

preparativos.push({ nombre: "vacunas necesarias", ok: true });

const idxSeguro = preparativos.findIndex(p => p.nombre.toLowerCase() === "seguro de viaje");
if (idxSeguro !== -1) preparativos.splice(idxSeguro, 1);

const transporte = preparativos.find(p => p.nombre.toLowerCase() === "transporte confirmado");
if (transporte) transporte.ok = false;

console.log("Estado final:", listoParaViajar(preparativos));