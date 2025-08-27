function preparar(nombre, ms, falla = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) reject(new Error(`No se pudo preparar ${nombre}`));
      else {
        console.log(`✅ ${nombre} lista en ${ms / 1000}s`);
        resolve(nombre);
      }
    }, ms);
  });
}

const TIEMPOS = {
  ensalada: 4000,
  hamburguesa: 8000,
  bebida: 2000
};

async function prepararPedido() {
  try {
    console.log("🧑‍🍳 Preparando pedido...");
    const [ensalada, hamburguesa, bebida] = await Promise.all([
      preparar("Ensalada", TIEMPOS.ensalada),
      preparar("Hamburguesa", TIEMPOS.hamburguesa),
      preparar("Bebida", TIEMPOS.bebida)
    ]);
    console.log("🎉 Pedido listo:", ensalada, hamburguesa, bebida);
  } catch (e) {
    console.error("🚨 Hubo un problema con el pedido:", e.message);
  } finally {
    console.log("🏁 Flujo de preparación finalizado.");
  }
}

prepararPedido();