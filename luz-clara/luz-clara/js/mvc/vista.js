//vistas.js - VISTA: Muestra los datos (por ahora en consola)
class VsitaReservas { //la clase de la bista. No tiene constructor por que no necesita guardar datos propios .  JS le pone uno vacio
  mostrar(lista){
    lista.forEach((r, i) => { // i : posicion (r, i)dos parametros del callback
      //forEach entregra el elemento (r) y su posicion (i)que empieza en cero
      console.log(`${i + 1}, ${r.cliente}. ${r.servicio} `);//r. cliente . r.servicio son propiedades de cada reserva. la vista solo lee datos, no los cambia.
    })
  }
  mostrarIngresos(monto){
    console.log( `Ingreso ₡$ {monto.toLocaleString("es-CR)} `);

  }
  error(texto){
    console.error(texto);
  }
}