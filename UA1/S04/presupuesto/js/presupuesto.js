//presupuesto.js -Presupuesto con Prompt
const precioPersona = 105000;

//Pide nombre y cantidad ingresar devuelve
const nombre = prompt("¿Cómo se llama?");// se pide nombre 
const cantidad = Number(prompt("¿Cantidad de personas?"));//Se pide en cantidad y se convierte a numero usando Number

//Convierto cantidad # 
console.log("Hola," + nombre + ".");//muestra saludo y nombre
console.log("Persona:", cantidad);//convierto cantidad en numero

//Muestra calculos
 console.log("Total: ¢",precioPersona * Number(cantidad));
 console.log("¿Es grupo(3 o más)?", Number(cantidad) >= 3);
 
