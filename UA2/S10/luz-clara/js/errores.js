//errores.js -try, catch y finally
 try { // intenta ejecutar
 console.log("Inicio");
 const nombre = ana; // como si se cancelara
 console.log(nombre.toUpperCase()); // falla: null no tiene métodos
 console.log("Esta línea no se muestra");
 } catch (error) { // si algo falló, viene aquí
 console.log("Se atrapó:", error.message);
 } finally { // siempre se ejecuta
 console.log("Fin del intento");
 }
 console.log("El programa sigue"); // no se detuvo