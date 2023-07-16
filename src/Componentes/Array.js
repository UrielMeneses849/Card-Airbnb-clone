import React from "react";


export default function Array(){
    // Creamos un array que contenga elementos HTML y los returnamos en nuestra funcion, y los mandamos a llamar
    const titulo = [<h1>Hola, declarando JSX</h1>, <h3>Prueba 2 de los arrays con JSX</h3>,<h3>Haciendo pruebas de arrays</h3> ]
    return(
        <div>
            {titulo}
        </div>
    )
}

