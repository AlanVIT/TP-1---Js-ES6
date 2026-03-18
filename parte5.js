const producto = {
    
    nombre:"Notebook",
    precio:1000
    
}

//Ej 14

let {nombre} = producto
let {precio} = producto

console.log(nombre);
console.log(precio);

//Ej 15

const productoNuevo = {

    ...producto,
    stock:5

}