import logo from './logo.svg';
import './App.css';
import Lista from "./componentes/Listar.js";
import Crear from "./componentes/Crear.js";
import Editar from "./componentes/Editar.js";
import CrearUsuario from './componentes/CrearUsuario';


import { Route, BrowserRouter as Router} from "react-router-dom";




function App() {
  return (
    
    <Router>
    
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/">INICIO <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/crear">MAPA DELEGACION</a>
              <a className="nav-item nav-link" href="/editar">REGISTROS</a>
              
          </div>
      </nav>
      
      <div className="container">
        <br></br>
        <Route exact path='/' component={Lista} ></Route>
        <Route path='/crear' component={Crear} ></Route>
        <Route path='/editar' component={Editar} ></Route>
        <Route path='/crearUsuario' component={CrearUsuario} ></Route>
        
        
      </div>
      
    </Router>
    
  );
}

export default App;
