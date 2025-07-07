/*Escribir una función llamada capitalizar que reciba un string y capitalice
 la primera letra de cada palabra:*/
function capitalizar(texto) {
    let arregloTexto = texto.split(" ");
    for (let i = 0; i < arregloTexto.length; i++) {
        arregloTexto[i] = arregloTexto[i].charAt(0).toUpperCase() + arregloTexto[i].slice(1);        
    }
    return arregloTexto.join(" ");
}


 // código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""