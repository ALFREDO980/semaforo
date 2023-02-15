import logo from './logo.svg';
import './App.css';
import Lista from "./componentes/Listar.js";
import Crear from "./componentes/Crear.js";
import Editar from "./componentes/Editar";

import { Route, BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom"



function App() {
  return (
    
    <Router>
    
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/">Sistema <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/crear">Crear empleado</a>
              <a className="nav-item nav-link" href="/editar">Editar empleado</a>
          </div>
      </nav>
      
      <div className="container">
        <br></br>
        <Route exact path='/' component={Lista} ></Route>
        <Route path='/crear' component={Crear} ></Route>
        <Route path='/editar' component={Editar} ></Route>
        
      </div>
      
    </Router>
    
  );
}

export default App;
