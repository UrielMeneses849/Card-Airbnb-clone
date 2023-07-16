// Dependencias
import React from "react"
import  ReactDOM from "react-dom"

// Componentes de los card de Airbnb
import Header from "./Componentes/Header"
import Card from "./Componentes/Card"
import Data from "./MapasDatos/Data"

// Componente de los card de prueba
import Cardp from "./Componentes/CardPrueba/Cardp"
import Datos from "./MapasDatos/DatosCard"

// Estilos
import "./Estilos/Header.css"
import "./Estilos/Card.css"
import "./Estilos/Tarjeta.css"


// Funcion principal con los props para reutilizar el componente card
function Airbnb(){

    // Creamos una constante dentro de la funcion donde se contiene una seccion con el metodo map que pasa los datos del mapa de datos
    const DatosCard = Data.map(dato => {
        // Returnamos los datos del mapa de datos en nuestro componente card el cual ya tiene configurado los props
            return ( 
            <Card 
            key={dato.id}
            //Con esta sintaxis se nos facilita pasar datos entre el mapa y el componente
            {...dato}    
            />
        )
    })
    
    const PractiCard = Datos.map(modelo => {
        return(
            <Cardp 
            {...modelo}
            />
        )
    })
    return(


    // Contenedor de Airbnb
        <div>
        <div className="Contenedor">
        <Header />
        <div className="Cards">
        {/* Para mandar a llamar nuestro componente reutilizable usamos el nombre de la constante con el metodo map */}
        {DatosCard}
        </div>
        </div>
    {/* Contenedor de mi prueba */}
         <div className="Contenedor">
         <Header />
        <div className="Cards">
            {PractiCard}
            </div>
        </div>

        </div>  
    )
}



// Convierte las palabras a la primera mayuscula de un array
// const nombres = ["uriel", "hannia", "osmar", "celia","matias"]

// const prueba2 = nombres.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)

// })


// Declaramos un arreglo con nombres en este caso pokemon
const pokemon = ["Bulbasor", "Charmander", "Squirtle"]

// Declaramos la constante que contendra el metodo que pasa el array por la funcion map() el cual recorre todo el arreglo poniendole
// como nombre mon, este puede variar pero representa el elemento dentro del array y con comillas invertidas y $ ingresamos JSX poniendole un 
// Parrafo, e imprimimos en consola
const elemento = pokemon.map(mon=> `<p>${mon}</p>`)
console.log(elemento)


ReactDOM.render(<Airbnb />, document.getElementById("root"));
