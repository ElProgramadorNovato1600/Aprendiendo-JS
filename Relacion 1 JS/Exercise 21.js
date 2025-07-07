/*Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo
 con los números pares únicamente.*/

function pares(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un arreglo"
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El arreglo debe contener solo números enteros.");
    }

    let arregloNuevo = [];
    let contador = 0;//Variable que determina la posicion del nuevo array
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            arregloNuevo[contador] = arreglo[i];
            contador++;
        }
    }
    return arregloNuevo;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []