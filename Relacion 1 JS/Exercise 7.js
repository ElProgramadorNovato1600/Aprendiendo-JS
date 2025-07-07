/*Escribir una función llamada contarRango que reciba dos números y retorne cuántos números
 que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.*/

function contarRango(numero1, numero2) {
    return Math.abs(numero1 - numero2) - 1;
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0