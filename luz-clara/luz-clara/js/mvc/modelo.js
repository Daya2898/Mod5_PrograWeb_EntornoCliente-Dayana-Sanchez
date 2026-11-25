//modelo.js - MODELO: Los datos de las reservas y su reglas y posiciones }
class Reserva {
  constructor(cliente, servicio, precio){ //constructor con sus metodos
    this.cliente = cliente; //this. el objeto se esta creando .cliente es la propiedad del objeto 
    this.servicio = servicio;// =cliente el parametro. copia del dato dentro del objeto
    this.precio = precio;
  }
}
class Reservas{ //segunda clase del modo. Es el conjunto de todas las reservas en plural
  constructoir(){
    this.lista = []; // todas las reservas. Propiedad vector empieza vacia y guarda objetos de Reserva 
  }
  agregar(reserva){  //Metodo con parametroo. En una clase, se escriben sin palabra funtion.
    if(reserva.precio <= 0) {//reglas de negocio. reserva.precio es propiedad de otro objeto. reserva es el objeto Reserva que llego como argumento 
      return false; //no se guarda
    }
    this.lista.push(reserva);// push sobre la propiedad. para guardar la reserva en la lista de este objeto
    return true;
  }
  ingresos(){
    let suma = 0;
    this.lista.forEach((r) => { //forEach con callback. r es CD reserva; se sume a su precio
      suma += r.precio;});
    return suma; 
  }
}