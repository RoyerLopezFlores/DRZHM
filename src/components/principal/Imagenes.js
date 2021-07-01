import React,{Component,useState} from 'react';

export default class Imagenes extends Component{
    state = {
        original : true
    }
    handleChange = () =>{
        this.setState({
          original : !this.state.original
        });
        console.log(window.innerWidth,window.innerHeight)
    }
    render(){
        return (
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" 
                    type="checkbox" id="flexSwitchCheckChecked" 
                    checked = {this.state.original}
                    onChange = {this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Original</label>
                </div>
                {this.state.original ? 
                <img src={'https://scontent.flim1-1.fna.fbcdn.net/v/t1.6435-9/208732926_552496459114521_3330905454912861229_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=b9115d&_nc_ohc=bivDhuGpd7wAX_6Fi8C&_nc_ht=scontent.flim1-1.fna&oh=1bb179a3581d2c904e2d6f8989700611&oe=60DD9A24'} className="w-50"/>:null}
                <img src={process.env.PUBLIC_URL + '/logo192.png'} className="w-50 align-self-center"/>
            </div> 
        );
    }
}
//JSON placeholder