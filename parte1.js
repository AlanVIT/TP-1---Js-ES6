/* Ejercicio 1 */
const formatearNombre = nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
console.log(formatearNombre("uRiEl"))

/* Ejercicio 2 */
function contarLetras(texto) {
    let contador = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contador++
        }
    }

    return contador
}
console.log(contarLetras("Hola me llamo Suti"))

/* Ejercicio 3 */
function maximo(a, b, c) {
    let mayor = a

    if (b > mayor) {
        mayor = b
    }

    if (c > mayor) {
        mayor = c
    }

    return mayor
}
console.log(maximo(1, 2, 3))

/* Ejercicio 4 */
function validarPassword(password) {
    if (password.length >= 8) {
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                return true
            }
        }
    }
    return false
}
console.log(validarPassword("HolaHola1"))