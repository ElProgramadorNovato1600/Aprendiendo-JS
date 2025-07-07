/*Escribir una función llamada posiciones que reciba un arreglo de números 
y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.*/

function posiciones(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un arreglo"
    }

    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El arreglo debe contener solo números enteros")
    }
    let arregloNuevo = [];
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            arregloNuevo[contador] = i;
            contador++;
        }
    }
    return arregloNuevo;
}


// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []