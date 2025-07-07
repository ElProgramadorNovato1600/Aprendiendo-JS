/*Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo 
solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).*/

function distancia(word1, word2) {

    //Validación
    if (typeof word1 !== "string" || typeof word2 !== "string") {
        return "Ambos parámetros deben ser strings";
    }

    //Si la palabras son iguales no hay diferencias
    if (word1 === word2) {
        return 0;
    }

    let diferencias = 0;
    let longuitudMinima = Math.min(word1.length, word2.length); //Obtengo la longuitud de la palabra mas pequeña   

    for (let i = 0; i < longuitudMinima; i++) {
        if (word1[i] !== word2[i]) {
            diferencias++;
        }
    }
    diferencias += Math.abs(word1.length - word2.length); //Sumo la diferencia de tamaño
    return diferencias;
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
console.log(distancia("antonio", "juan")) // 7