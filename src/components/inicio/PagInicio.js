import React,{Component} from 'react';
import './Prueba.css'
import FormularioInicio from './FormularioInicio';
export default class PagInicio extends Component{
    render(){
        return (
            <div className="container row aling-items-center">
                <FormularioInicio/>
                <div className="col-6">
                    quienes somos
                    <p className="text-justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>

                </div>
                
                    
            </div>
        );
    }
}
/*<select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>*/
/*

<div className="container bg-info"  >
                <div className="row align-items-start" >
                    <div className="col-2 " 
                    style={{backgroundColor:"red"}}>
                        Colum
                    </div>
                </div>
                <div class="row align-items-center h-80">
                    <div className="col" 
                    style={{backgroundColor:"red"}}>
                        Colum
                    </div> 
                </div>
                <div class="row align-items-end">
                    <div className="col" 
                    style={{backgroundColor:"red"}}>
                        Colum
                    </div> 
                </div>
            </div>

*/ 