/*Escribir una función llamada sumarArreglo que reciba tres argumentos:
un arreglo de números, la posición inicial y la posición final.
La función debe retornar la suma de todos los números dentro del rango
 (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final,
 y que están dentro de los límites del arreglo.*/

function sumarArreglo(arreglo, posicionInicial, posicionFinal) {
    if (!Array.isArray(arreglo)) {
        throw new Error("El argumento no es un arreglo.");
    }

    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El arreglo debe contener solo números enteros.");
    }

    if (
        posicionInicial < 0 ||
        posicionFinal >= arreglo.length ||
        posicionInicial > posicionFinal
    ) {
        throw new Error("Las posiciones están fuera de los límites del arreglo.");
    }

    let sumaTotal = 0;
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        sumaTotal += arreglo[i];
    }

    return sumaTotal;
}



// código de prueba
console.log(sumarArreglo([1, 2, 3], 1,2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 7 