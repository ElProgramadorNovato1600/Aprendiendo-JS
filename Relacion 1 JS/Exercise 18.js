/*Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.*/
function max(arregloNum) {
    if (!Array.isArray(arregloNum)) {
        throw new Error("El argumento no es un arreglo.");
    }

    if (!arregloNum.every(num => Number.isInteger(num))) {
        throw new Error("El arreglo debe contener solo números enteros.");
    }

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arregloNum.length; i++) {
        if (max < arregloNum[i]) {
            max = arregloNum[i];
        }        
    }
    return max;
}


// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9