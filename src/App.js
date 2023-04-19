
import './App.css';
import Listar from "./componentes/Listar.js";
import UsuariosFuncion from './componentes/Usuarios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Editar from './componentes/EditarUsuario';
import { faHome, faMapLocation, faClipboard } from '@fortawesome/free-solid-svg-icons'

import { Route, BrowserRouter as Router} from "react-router-dom";
import AgregarUsuario from './componentes/agregarUsuario';
import Crear from './componentes/Crear';
import AgregarDelito from './componentes/Delitos';







function App() {
  return (
    
    <Router>
    
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/"><h2><FontAwesomeIcon icon={faHome} /> INICIO <span className="sr-only">(current)</span></h2></a>
              <a className="nav-item nav-link" href="/crear"><h2><FontAwesomeIcon icon={faMapLocation} /> MAPA DELEGACION</h2></a>
              <a className="nav-item nav-link" href="/usuarios"><h2><FontAwesomeIcon icon={faClipboard} /> USUARIOS</h2></a>
              
          </div>
      </nav>
      
      
        <br></br>
        <Route exact path='/' component={Listar} ></Route>
        <Route path='/usuarios' component={UsuariosFuncion} ></Route>
        <Route path='/editarUsuario' component={Editar}></Route>
        <Route path='/agregarUsuario' component={AgregarUsuario}></Route>
        <Route path='/crear' component={Crear}></Route>
        <Route path='/crearDelito' component={AgregarDelito}></Route>
    
        
    </Router>

    
    
  );
}

export default App;
