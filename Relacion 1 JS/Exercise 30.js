/*Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:*/

function numAsteriscos(matriz) {
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === "*") {
                contador++;
            }
        }
    }
    return contador;

    //Opcion mas rapida
    //return matriz.flat().filter(e => e === "*").length;
    //flat() convierte la matriz en un solo array
}

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]))
// 5