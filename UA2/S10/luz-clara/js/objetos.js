// objetos.js - Primer contacto: un vector de objetos
const tarifas = [
  // cada { } es un objeto
  { servicio: "Individual", precio: 45000 },
  { servicio: "Familiar", precio: 75000 },
];
for (const t of tarifas) {
  // recorre los objetos
  console.log(`${t.servicio}: ${t.precio}`); // punto: su dato
}
