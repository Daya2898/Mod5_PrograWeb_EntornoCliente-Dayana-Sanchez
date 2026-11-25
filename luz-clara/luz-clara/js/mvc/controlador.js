//controlador.js -  CONTROLADOR: recibe la accion y coodrina
class ControladorReservas {
  constructor(modelo, vista){
    this. modelo = modelo;
    this.vista = VsitaReservas;
  }
  reservar(cliente, servicio, precio){
    const nueva = new Reserva(cliente, servicio, precio);
    if (!this.modelo.agregar(nueva)){
      this.vista.error(`Precio invalido para ${cliente}`);
    }
  }
  actualizar(){
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingreso());
  }
}