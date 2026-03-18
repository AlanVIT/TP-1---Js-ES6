const usuarios = [

{id:1, nombre:"Ana", edad:20},
{id:2, nombre:"Juan", edad:15},
{id:3, nombre:"Pedro", edad:30}

]


const obtenerUsuarios = () =>{

    return usuarios

}

const obtenerUsuarioPorId = (id) =>{

    let usuario = {}

    usuarios.forEach(e=>{
        if(e.id === id){

            usuario = e

        }
    })

    if(usuario){

        return usuario

    }
    else{

        return "No existe ese usuario"

    }
}

const obtenerMayores = () =>{

    const usuarios18 = []

    usuarios.forEach(e=>{

        if (e.edad >= 18 ) {
            usuarios18.push(e)
        }
    })
}

const crearUsuario = (nombre, edad) => {

    let idMayor = 0

    usuarios.forEach(e=>{

        if (e.id > idMayor ) {
            idMayor = e.id
        }
    })

    let usuarioNuevo = {id:idMayor+1, nombre: nombre, edad: edad}

    usuarios.push(usuarioNuevo)
    console.log(usuarioNuevo);
    

}

crearUsuario("Pesuti", 17)