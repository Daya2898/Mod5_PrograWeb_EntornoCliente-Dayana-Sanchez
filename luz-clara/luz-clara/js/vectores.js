//vectores.js - Un vector (array) guarda varios valores en orden
const servicios = ["Retrato", "Familia", "Eventos"]; //corchetes
console.log(servicios[0]); //posicion 0: el primero
console.log(servicios.length); //cantidad de elementos
servicios.push("Perfil"); //agrega al final
console.log(servicios.join(", ")); //une todo en un texto
const ultimo = servicios.pop(); //quita el ultimo
console.log(ultimo, servicios.length); //el quitado y cuantos quedan
console.log(servicios.join(", "));
