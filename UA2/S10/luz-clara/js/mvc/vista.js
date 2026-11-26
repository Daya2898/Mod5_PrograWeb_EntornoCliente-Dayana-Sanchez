//vista.js - VISTA: Muestra los datos (por ahora en consola)
class VsitaReservas {
  //la clase de la vista. No tiene contructor porque no necesita guardar datos propios. JS le pone uno vacío.
  mostrar(lista) {
    lista.forEach((r, i) => {
      //i es la posición (r, i) dos parametros del callback
      //forEach entrega el elemento (r) y su posición (i) que empieza en cero
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente . r.servicio son propiedades de cada reserva. La vista solo lee datos, no los cambia.
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ¢${monto.toLocaleString("es-CR")}`);
  }
  error(texto) {
    console.error(texto); //mensaje ne rojo
  }
}