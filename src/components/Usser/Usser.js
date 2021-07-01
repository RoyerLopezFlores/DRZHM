import React,{Component} from 'react';
import FormularioRegistro from './FormularioRegistro';
import ChangePassword from './ChangePassword';
import Notificaciones from './Notificaciones';
export default class Usser extends Component{
    state = {
        datos : true,
        contrasena : false,
        notificaciones : false
    }
    //this.setState({filtros : data.slice(i,(window.innerWidth/100>12)?12:window.innerWidth/100+1)})
    getDatos = () =>{
        this.setState({
            datos : true,
            contrasena : false,
            notificaciones : false
        })
    }
    cambiarPass = () =>{
        this.setState({
            contrasena:true,
            datos : false,
            notificaciones : false
        })
    }
    notificar = () =>{
        this.setState({
            notificaciones : true,
            datos : false,
            contrasena : false
        })
    }
    render(){
        return (
            <div className ="container row">
                <div className = "col-4">
                    <div className="row">
                        <button onClick={this.getDatos}>Datos</button>
                    </div>
                    <div className ="row">
                        <button onClick = {this.cambiarPass}>Cambiar Contraseña</button>
                    </div>
                    <div className ="row">
                        <button onClick = {this.notificar}>Notificaciones</button>
                    </div>
                </div>
                {
                    this.state.datos? <FormularioRegistro registro={false}/>:null
                }
                {
                    this.state.contrasena? <ChangePassword/> : null
                }
                {
                    this.state.notificaciones?<Notificaciones/>:null
                }
                    
            </div>
        );
    }
}