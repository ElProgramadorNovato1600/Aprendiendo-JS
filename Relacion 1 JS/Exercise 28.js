/*Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo 
cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.*/

function palabrasANumeros(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un array";
    }
    const mapa = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    return arreglo.map(palabra => {
        const palabraLimpia = palabra.toLowerCase().trim();
        return mapa.hasOwnProperty(palabraLimpia) ? mapa[palabraLimpia] : -1;
    });
    //hasOwnProperty true si la palabra se encuentra en el mapa
}

// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]