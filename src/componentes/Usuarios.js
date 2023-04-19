import React from 'react';
import api from '../servicios/api';
import FilaDeTablaDeVideojuego from './FilaDeTablaDeUsuarios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers , faUserPlus } from '@fortawesome/free-solid-svg-icons'

class UsuariosFuncion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
        };
    }
    async componentDidMount() {
        const respuesta = await fetch(`${api.RUTA_API}/obtener_videojuegos.php`);
        const usuarios = await respuesta.json();
        this.setState({
            usuarios: usuarios,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h3 className="is-size-4"> <FontAwesomeIcon icon={faUsers} /> USUARIOS   <a href='/agregarUsuario' className="btn btn-primary"> <FontAwesomeIcon icon={faUserPlus}/> AGREGAR</a></h3>
                </div>
                <div className="table-container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Password</th>
                                <th>Rol</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map(videojuego => {
                                return <FilaDeTablaDeVideojuego key={videojuego.id} videojuego={videojuego}></FilaDeTablaDeVideojuego>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default UsuariosFuncion;