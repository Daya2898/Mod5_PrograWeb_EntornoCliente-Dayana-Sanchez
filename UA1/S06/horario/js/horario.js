// horario.js - Consulta si Casa Tomillo abre según el día ingresado
try {
  const entrada = prompt("¿Qué día desea consultar? (ej. Sábado, lunes)"); // Pide el día al usuario
  if (!entrada || !entrada.trim()) {
    throw new Error("Sin día"); // Pasa al catch si cancela o deja vacío
  }
  const dia = entrada.trim().toLowerCase(); // Quita espacios y pasa a minúsculas

  switch (dia) {
    case "domingo": // Domingo cerrado (cae al siguiente caso)
    case "lunes": // Lunes cerrado (comparte el mismo mensaje)
      console.log(`El ${dia} está cerrado`); // Muestra que el local está cerrado
      break; // Termina el switch
    default:
      console.log(`El ${dia} abre de 10:00 a. m. a 7:00 p. m.`); // Horario habitual
  }
} catch (error) {
  console.warn("No se indicó un día."); // Aviso si cancela o no escribe nada
} finally {
  console.log("Casa Tomillo · Barrio Amón"); // Msj final que siempre se ejecuta
}