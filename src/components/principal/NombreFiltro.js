import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './NombreFiltro.css'
export default class NombreFiltro extends Component{
    render(){
        const {filtro} = this.props;
        return (
            <div className="col">
                <Link to="/main" className="thumbnail nombreF">
                    <img src={filtro.url} className="w-100" />
                    <div className="caption">
                        <p>{filtro.title.slice(0,10)}</p>
                    </div>
                </Link>
                
            </div> 
        );
    }
}