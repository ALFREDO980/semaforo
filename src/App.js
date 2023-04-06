
import './App.css';
import Listar from "./componentes/Listar.js";
import UsuariosFuncion from './componentes/Usuarios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Editar from './componentes/EditarUsuario';
import { faHome, faMapLocation, faClipboard } from '@fortawesome/free-solid-svg-icons'

import { Route, BrowserRouter as Router} from "react-router-dom";







function App() {
  return (
    
    <Router>
    
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/"><FontAwesomeIcon icon={faHome} /> INICIO <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/crear"><FontAwesomeIcon icon={faMapLocation} /> MAPA DELEGACION</a>
              <a className="nav-item nav-link" href="/usuarios"><FontAwesomeIcon icon={faClipboard} /> USUARIOS</a>
              
          </div>
      </nav>
      
      
        <br></br>
        <Route exact path='/' component={Listar} ></Route>
        <Route path='/usuarios' component={UsuariosFuncion} ></Route>
        <Route path='/editarUsuario' component={Editar}></Route> 
    
        
    </Router>

    
    
  );
}

export default App;
