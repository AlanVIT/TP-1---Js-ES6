/* Ejercicio 5 */
function sumarArray(numeros) {
    let suma = 0

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }

    return suma
}
console.log(sumarArray([3, 5, 10]))

/* Ejercicio 6 */
function mayorNumero(numeros) {
    let mayor = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }

    return mayor;
}
console.log(mayorNumero([4, 7, 1, 20, 3]))

/* Ejercicio 7 */
function obtenerPares(numeros) {
    let pares = []

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }

    return pares
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6]))