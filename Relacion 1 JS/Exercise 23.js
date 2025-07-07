/*Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo 
arreglo donde cada número esté multiplicado por dos (2).*/

function duplicar(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un arreglo";
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El array solo debe contener números enteros");
    }

    let arregloNuevo = []; // Arreglo vacio
    for (let i = 0; i < arreglo.length; i++) {
        arregloNuevo[i] = arreglo[i] * 2;
    }
    return arregloNuevo;
}

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []