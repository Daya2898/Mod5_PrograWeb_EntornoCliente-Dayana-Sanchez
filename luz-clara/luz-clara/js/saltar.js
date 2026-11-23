//saltar.js - continue salta una vuelta; break termina el ciclo
const servicios = ["Retrato", "Familia", "Eventos", "Prefil"];
for (const s of servicios) {
  if (s === "Familiar") continue; //salta ala sigueinte vuelta
  if (s === "Perfil") break; //termina el ciclo
  console.log(s);
}
console.log("Fuera del ciclo");
