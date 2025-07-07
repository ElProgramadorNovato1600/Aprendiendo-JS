/*Escribir una función llamada numeroDeAes que reciba un string
 y retorne el número de veces que aparece la letra "a":*/

function numeroDeAes(texto) {
    let contadorLetraA = 0;
    for (let letra of texto) {
        if (letra === "a" || letra === "A") {
            contadorLetraA++;
        }
    }
    return contadorLetraA;
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0