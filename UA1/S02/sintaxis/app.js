//app.js - error de sintaxis(falta de comillas) y semantica(calcula otra cosa): 
console.log("Inicio del programa");
console.log("Hola, mundo");
console.log("Fin del programa");

//error semantica(calculo otra cosa)
console.log("Promedio de 8 y 9:");
console.log(8 + 9 / 2); //primero divide y luego suma 9/2 = 4.5 + 8 =12.5
console.log((8 + 9) / 2);//Primero la suma de 8 + 9 , luego la division de 17 / 2 = 8.5