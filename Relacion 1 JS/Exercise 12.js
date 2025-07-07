/*Escribir una función llamada multiplicarArreglo que
 reciba un arreglo de números y retorne la multiplicación de todos los elementos.*/

function multiplicarArreglo(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new Error("El argumento no es un array.");
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El array debe contener solo números enteros.");
    }
    if (arreglo.length === 0) {
        return 1; // por definición, el producto de un conjunto vacío es 1
    }

    let productoTotal = 1;
    for (let i = 0; i < arreglo.length; i++) {
        productoTotal *= arreglo[i];
    }

    return productoTotal;
}


// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1