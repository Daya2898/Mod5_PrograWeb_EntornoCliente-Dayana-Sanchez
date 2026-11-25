//modelo.js - MODELO: Los datos de las reservas y su reglas y posiciones }
class Reserva {
  constructor(clearInterval, ServiceWorkerRegistration, precio){
    this.cliente = cliente;
    this.servicio = servicio;
    this.precio = precio;
  }
}
class Reservas{
  constructoir(){
    this.lista = []; // todas las reservas
  }
  agregar(reserva){
    if(reserva.precio <= 0) {
      //reglas de negocio
      return false; //no se guarda
    }
    this.lista.push(reserva);
    return true;
  }
  ingresos(){
    let suma = 0;
    this.lista.forEach((r) => { suma += r.precio;});
    return suma; 
  }
}