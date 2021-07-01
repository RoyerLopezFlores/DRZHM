import React,{Component} from 'react';

import ImagenRecomendada from './ImagenRecomendada';
export default class Recomendados extends Component{
    render(){
        return (
            <div className="container row">
                <div className="col-4">
                    <select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <button>Add</button>
                    <br/>
                    <label>Estilo1</label> <label>Estilo2</label>
                </div>
                <ImagenRecomendada/>
                <ImagenRecomendada/>
                
            </div>
        );
    }
}
/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */