import React from "react";

export default function Cardp(props){
    return(
    <div className="Tarjeta">
       <img src={`../images/${props.imagen}`}
       alt="imagen"
       className="imagenp" />
    <span className="titulo">{props.titulo}</span>
    <br></br>
    <h3 className="descripcion"><b>{props.descripcion} </b></h3>
    </div>
    )} 