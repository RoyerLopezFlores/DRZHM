import React,{Component} from "react";
export default class FormularioRegistro extends Component{
    render(){
        const {registro} = this.props;
        return(
            <div className="col-8 align-self-center">
                <form>
                    <label>Nombre:</label>
                    <br/>
                    <input type="text" placeholder="Nombre" />
                    <br/>
                    <label>LastName:</label>
                    <br/>
                    <input type="text" placeholder="LastName" />
                    <br/>
                    <label>UsserName:</label>
                    <br/>
                    <input type="text" placeholder="Nombre de usuario" />
                    <br/>
                    <label>Password: </label>
                    <br/>
                    <input type="password" placeholder="Password" />
                    <br/>
                    <label>Correo: </label>
                    <br/>
                    <input type="email" placeholder="correo@.com" />
                    {registro?
                        <div>
                            <button>Registrar</button>
                        </div>:
                        <div>
                            <button>Guardar Cambios</button>
                        </div>
                    }
                    
                </form>

            </div>
        )
    }
}