import React,{Component} from 'react';
import Filtros from './Filtros';
import Imagenes from './Imagenes';
import Herramientas from './Herramientas';
export default class Principal extends Component{
    
    render(){
        return (
            <div className="row">
                <Filtros/>
                <Imagenes/>
                <Herramientas />
                <Herramientas/>
            </div>
        );
    }
}
/*
[
    {
        id:""
        nombre_nombre:""
        desciption:""
        url = ""
    },
]
{
    nombre_imagen:""  
}
{
    id_filtro |nombre_filtro:""
    nombre_imagen:""
}
{
    id_"":
    nombre_usurio:
    password:
}
{

    cate:[ ]
}*/