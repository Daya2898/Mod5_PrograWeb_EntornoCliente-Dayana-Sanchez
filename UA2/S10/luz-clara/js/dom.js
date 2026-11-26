// dom.js - Recorre el árbol de nodos de index.html (al final del body)

//texto que está dentro de la etiqueta <title>
console.log(`Título de la página: ${document.title}`);
//Es el nodo <html>: la raiz de todos los elementos
const raiz = document.documentElement; //
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

//accede al nodo <body>
const cuerpo = document.body;
//recorre los hijos directos de body o saltando los nodos llamados script
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    //muestra la etiqueta del hijo y su id(ejemplo: MAIN. id contenido)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}
//children[1]= segundo hijo de <body> (posicion 1: <main>)
const principal = cuerpo.children[1];
//parentElement SUBE un nivel: el padre de <main> es <body>
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
//firstElementChild BAJA un nivel: al primer hijo de <main> es <portada>
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
//children.length: cuantas secciones hay dentro de <main>
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
