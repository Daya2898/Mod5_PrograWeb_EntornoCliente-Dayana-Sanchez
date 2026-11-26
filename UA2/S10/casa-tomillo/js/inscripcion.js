//inscripcion j.s-  Inscripcion a un taller
const nombre = "Panadería: masa madre"; //asigna nombre taller
const precio = 95000; //Precio taller
const matricula = 10000;//matricula x persona 
const numPersonas = 2;
let cupos = 8; //valor cambia
//Asignacion de operadores
const precioPersona = precio + matricula;//Precio * persona es = a precio + matricula
const total = precioPersona * numPersonas;//es total = preciopersona*persona

cupos -= numPersonas;//Restamos las personas inscritas a los cupos
const hayCupos = cupos > 0; //si queda cupos tru mayor que 0

//mostrar en consola resultado final 
console.log("Taller:",nombre);
console.log("Precio por persona:¢", precioPersona);
console.log("Total para",numPersonas,"personas:¢", total);
console.log("Cupos libres:", cupos);
console.log("¿Hay cupos?", hayCupos);

//True solo si ambas son verdaderas y si hay cupos
console.log("¿Menos de ¢250000 y con cupos?", total < 250000 && hayCupos < cupos,
);
