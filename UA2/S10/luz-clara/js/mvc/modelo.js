// modelo.js - MODELO: Los datos de las reservas y sus reglas
class Reserva {
  //clase con su nombre
  constructor(cliente, servicio, precio) {
    // contructor con sus métodos y parámetros
    this.cliente = cliente; // This el objeto se está creando .cliente Propiedad del objeto
    this.servicio = servicio; //= cliente el parámetro. copia del dato dentro del objeto
    this.precio = precio;
  }
}
class Reservas {
  // segunda clase del modelo. Es el conjunto de todas las reservas en plural.
  constructor() {
    this.lista = []; //todas las reservas. Propiedad vector empieza vacía y guarda objetos de Reserva
  }
  agregar(reserva) {
    //Metodo con parámetro. En una clase, se escriben sin la palabra funtion.
    if (reserva.precio <= 0) {
      // regla de negocio. reserva.precio es Propiedad de otro objeto. reserva es el objeto Reserva que llegó como argumento
      return false; //no se guarda
    }
    this.lista.push(reserva); //push sobre la propiedad. Guarda la reserva en la lista de este objeto
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      //forEach con callback. r es cada reserva; se suma su precio
      suma += r.precio;
    });
    return suma;
  }
}