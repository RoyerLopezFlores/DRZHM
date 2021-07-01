import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import PagInicio from './components/inicio/PagInicio';
import Principal from './components/principal/Principal';
import Usser from './components/Usser/Usser';
import NavBar from './components/NavBar';
import Galeria from './components/galeria/Galeria';
import Recomendados from './components/recomendados/Recomendados';
import FormularioRegistro from './components/Usser/FormularioRegistro';
function App() {
  return (
    //<NavBar/>
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/" exact>
            <PagInicio/>
          </Route>
          <Route path="/inicio" exact>
            <Usser/>
          </Route>
          <Route path="/filtro" exact>
            <Principal/>
          </Route>
          <Route path="/galery" exact>
            <Galeria/>
          </Route>
          <Route path="/recomendado" exact>
            <Recomendados/>
          </Route>
          <Route path ="/registro" exact>
            <FormularioRegistro registro={true}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
