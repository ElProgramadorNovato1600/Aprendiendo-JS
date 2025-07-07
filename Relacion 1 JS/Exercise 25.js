/*Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un 
nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).*/

function terminanConS(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un array";
    }
    if (!arreglo.every(word => typeof word === "string")) {
        throw new Error("El array solo debe contener caracteres o palabras");
    }
    return arreglo.filter(word => word.toLowerCase().endsWith("s"));
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []