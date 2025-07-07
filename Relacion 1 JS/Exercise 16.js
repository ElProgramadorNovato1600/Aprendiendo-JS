/*Escribir una función llamada capitalizar que reciba un || texto === undefined string y capitalice la primera letra:*/
function capitalizar(texto) {
    if (texto === null || texto === undefined || texto === "") {
        return "";
    }
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// código de prueba
console.log(capitalizar("pedro"))      // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar(""))           // ""
console.log(capitalizar(null))         // ""
console.log(capitalizar(undefined))    // ""
