/*Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.*/

function min(arregloNum) {
    if (!Array.isArray(arregloNum)) {
        throw new Error("El argumento no es un arreglo.");
    }

    if (!arregloNum.every(num => Number.isInteger(num))) {
        throw new Error("El arreglo debe contener solo números enteros.");
    }

    let min = Number.MAX_SAFE_INTEGER; //numero max entero
    for (let i = 0; i < arregloNum.length; i++) {
        if (min > arregloNum[i]) {
            min = arregloNum[i];
        }        
    }
    return min;
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2