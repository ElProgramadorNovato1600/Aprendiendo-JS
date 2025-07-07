/*Escribir una función llamada password que reciba un string y retorne un nuevo string 
realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.*/

function password(texto) {
    if (texto === undefined || texto === null || texto === "") {
        return ""
    }

    // Convertir a minúsculas y quitar espacios
    texto = texto.toLowerCase().replace(/\s/g, "");

    // Reemplazar letras
    texto = texto.replace(/a/g, "4");
    texto = texto.replace(/e/g, "3");
    texto = texto.replace(/i/g, "1");
    texto = texto.replace(/o/g, "0");

    return texto;
}


// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""