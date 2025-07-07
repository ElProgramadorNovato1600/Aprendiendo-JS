/*Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:*/

function numAsteriscos(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido tiene que ser un array"
    }
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === "*") {
            contador++;
        }
    }
    return contador;

    // Opcion mas rapida
    //return arreglo.filter(e => e === "*").length;
}


// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0