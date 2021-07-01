import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import NombreFiltro from './NombreFiltro';
var n=10;
var i =0;
export default class Filtros extends Component{
    state = {
        filtros:[]
    }
    async componentDidMount (){
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json();
        this.setState({filtros : data.slice(i,(window.innerWidth/100>12)?12:window.innerWidth/100+1)})
    }
    render(){
        console.log(window.innerWidth)
        return (
            <div className="row">
                {
                    this.state.filtros.map(
                        filtro =>(
                            <NombreFiltro filtro={filtro} key={filtro.id}/>
                        )
                    )
                }
                
            </div>
        );
    }
}
/*
<div className="col">
<img src={process.env.PUBLIC_URL + '/logo512.png'} className="w-100"/>
Filtro 2
</div> 
<div className="col">Filtro 2</div>
<div className="col">Filtro 3</div>
<div className="col">Filtro 4</div>
<div className="col">Filtro 5</div>
<div className="col">Filtro 1</div>
<div className="col">Filtro 2</div>
<div className="col">Filtro 3</div>
<div className="col">Filtro 4</div>
<div className="col">Filtro 5</div>*/