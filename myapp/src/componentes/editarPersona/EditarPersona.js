import React from "react";
import { useParams } from "react-router-dom";

const EditarPersona = ()=>{

    const {idPersona} = useParams('idPersona')

    return <h4>Editar Persona {idPersona}</h4>
}

export default EditarPersona