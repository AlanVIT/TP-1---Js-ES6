/* Ejercicio 8 */
const descripcionUsuario = usuario => `${usuario.nombre} tiene ${usuario.edad} años`

const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
}

console.log(descripcionUsuario(usuario))

/* Ejercicio 9 */
const activarUsuario = usuario => usuario.activo = true
activarUsuario(usuario)
console.log(usuario)

/* Ejercicio 10 */
function totalProductos(productos) {
    let total = 0

    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio
    }

    return total
}

const productos = [
    {nombre: "Mouse", precio: 10},
    {nombre: "Teclado", precio: 25},
    {nombre: "Monitor", precio: 200}
]

console.log(totalProductos(productos))