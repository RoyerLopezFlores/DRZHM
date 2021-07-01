import React,{Component} from 'react';
import { Link } from 'react-router-dom';
export default class FormularioInicio extends Component{

    render(){
        return(
            <div className="col-6 align-self-center" >
                <form>
                    <label>UsserName:</label>
                    <br/>
                    <input type="text" placeholder="Nombre de usuario" />
                    <br/>
                    <label>Password: </label>
                    <br/>
                    <input type="password" placeholder="Password" />
                    <div>
                        <button>
                            <Link to = "/inicio">Ingresar</Link>
                        </button>
                        <button>
                            <Link to="/registro">Registro</Link>
                        </button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}