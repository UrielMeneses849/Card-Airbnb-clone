import React from "react";

// Se crea un componente reutilizable gracias a los props
export default function Card(props){
// Podemos poner condicionales para que aparezca cierto contenido en las cards en funcion del contenido de nuestro mapa de datos
// declaramos una variable que almacene un mensaje y pasamos el parametro a considerar pasando por props y hacemos condicionales
// El contenido debe de ir a un lugar especifico ya modelado en css
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }else if(props.location === "Norway"){
        badgeText = "NORWAY"
    }

    return(
        <div className="Card">
        {/* Al poner solo la variable declarada es como si pusieramos un if exist, es decir si existe tal variable */}
        {/* Y si existe la colocamos dentro de un contenedor y pasamos la variable con llaves {} */}
        {badgeText && <div className="card--badge">{badgeText}</div>}
        {/* Modo para que las imagenes se puedan exportar */}
           <img src={`../images/${props.coverImg}`} alt="Imagen" className="foto" />

{/* Colocamos los props con el nombre de las propiedades que vienen en nuestro mapa de datos */}
        <div className="estrellas">
            <img 
            src="../images/Star.png"
            className="Star"
            alt="star"
            />
        <span>{props.stats.rating}</span>
        <span> ({props.stats.reviewCount}) · </span>
        <span>{props.location}</span>
        </div>
        <div className="nombre"><p>{props.title}</p></div>
        <div className="precio"><b>From $ {props.price}</b> / person</div>
        </div>
    )
}

