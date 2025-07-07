/*Escribir una función llamada imprimirMatriz que reciba una matriz
 (un arreglo de arreglos) e imprima todos los elementos del arreglo.*/

function imprimirMatriz(matriz) {

    if (!Array.isArray(matriz) || !matriz.every(fila => Array.isArray(fila))) {
        throw new Error("El parámetro debe ser una matriz");
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}

// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9