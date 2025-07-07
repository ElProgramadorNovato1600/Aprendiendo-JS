/*Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y
 retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U*/
function transcribir(texto) {
    //mapa de complementos
    const mapa = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    };

    return texto.split("").map(letra => mapa[letra] || "").join("");

    //.split() convierte una cadena de caracteres en un array
    //map() recorre el array y transforma cada elemento.
    //mapa[letra] busca el complemento correspondiente en el objeto mapa.
    //Convierte ese array de letras de nuevo en un string:
}


// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"