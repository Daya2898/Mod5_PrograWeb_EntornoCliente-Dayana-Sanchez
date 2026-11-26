// contenido.js - Cambiar el contenido de index.html (final del body)

const titular = document.querySelector(".portada-titulo");
console.log(`Título antes: ${titular.textContent}`);
titular.textContent = "La luz cuenta su historia";
console.log(`Título después: ${titular.textContent}`);

const montos = document.querySelectorAll(".tarjeta-precio");
const desde = [45000, 30000, 120000];
montos.forEach((p, i) => {
  const m = desde[i].toLocaleString("es-CR");
  p.innerHTML = `Desde <strong>₡${m}</strong>`;
});
console.log(`Primer precio corregido: ${montos[0].textContent}`);
