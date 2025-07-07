/*Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un
 nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).*/

function empiezanConA(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un array"
    }
    if (!arreglo.every(word => typeof word === "string")) {
        throw new Error("El array solo debe contener caracteres o palabras");
    }
    //***************************************** */
    let arregloNuevo = [];
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].startsWith("a") || arreglo[i].startsWith("A")) {
            arregloNuevo[contador] = arreglo[i];
            contador++;
        }        
    }
    return arregloNuevo;
    //***************************************** */
    //OTRA OPCION MAS LEGIBLE Y RAPIDA
    // return arreglo.filter(word => word.toLowerCase().startsWith("a"));
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []