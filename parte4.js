const usuarios = [

    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}

]

//Ej 11

const nombres = []

usuarios.forEach(e=>{

    nombres.push(e.nombre)
    console.log(e.nombre);

})

//Ej 12

const nombres18 = []

usuarios.forEach(e=>{

    if (e.edad >= 18 ) {
        nombres18.push(e.nombre)
        console.log(e.nombre);
    }

})

//Ej 13

const edades = []

usuarios.forEach(e=>{

    edades.push(e.edad)

})

const total = edades.reduce((acum, num) => acum + num,0);

console.log(total);

