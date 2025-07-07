/*Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:*/

function imprimirArreglo(...arreglo) {
    arreglo.forEach(element => {
        console.log(element);
    });
}

// código de prueba
imprimirArreglo(1, "Hola", 2, "Mundo");
// 1
// Hola
// 2
// Mundo