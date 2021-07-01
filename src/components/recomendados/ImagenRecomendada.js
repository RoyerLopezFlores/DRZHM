import React,{Component} from "react";
import { Link } from 'react-router-dom';
export default class ImagenRecomendada extends Component{
    render(){
        return (
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/logo192.png'} alt="Card image cap" />

                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                
                <a href="#" className="card-link">Like</a>
                <a href="#" className="card-link">No me gusta</a>
                <Link className="card-link active" to="/reportar" tabIndex={-1} aria-current="true">Reportar</Link>
                </div>
            </div>
        )
    }
}