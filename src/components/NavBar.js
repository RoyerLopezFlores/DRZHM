import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Usser from './Usser/Usser';
export default class NavBar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">R-Tiz</Link>
              
              <ul className="nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/Mod" tabIndex={-1} aria-current="true">Mod</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/galery">Galeria</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/filtro">Crear</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/inicio" tabIndex={-1} aria-current="true">Yo</Link>
                  </li>
                </ul>
              
            </div>
          </nav>
          );
    }
}