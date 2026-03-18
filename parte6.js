const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Auriculares", precio: 150 },
  { nombre: "Cafetera", precio: 90 },
  { nombre: "Zapatillas deportivas", precio: 80 },
  { nombre: "Smartphone", precio: 999 }
]

//Ej 16

const buscarProducto = (productos, nombre) =>{
    let producto = {}
    productos.forEach(e => {

        if(e.nombre === nombre){

            producto = e

        }
    });
    if(producto){
        return producto
    }
    else{
        return "No existe ese producto"
    }
}

console.log(buscarProducto(productos, "Laptop"));


//Ej 17

const buscarProductosCaros = (productos) =>{
    
    const prods = []

    productos.forEach(e => {

        if(e.precio > 50){

            prods.push(e)

        }
    });

    return prods
}

console.log(buscarProductosCaros(productos));


//Ej 18

const promedio = (numeros) =>{

    const totalArray = numeros.reduce((acum, num) => acum + num,0);
    const total = totalArray/numeros.length

    return total
    
}

console.log(promedio([1,2,3]));
