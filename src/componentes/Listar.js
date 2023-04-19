import React from 'react';
import api from '../servicios/api';
import FilaDeTablaDeEmpleados from './FilaDeTablaDeEmpleados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'


class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empleados: [],  
        };
    }
    async componentDidMount() {
        const respuesta = await fetch(`${api.RUTA_API}/obtener_empleados.php`);
        const empleados = await respuesta.json();
        this.setState({
            empleados: empleados,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3"> <FontAwesomeIcon icon={faUsers} /> EMPLEADOS</h1>
                    
                </div>
                <div className="table-container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.empleados.map(videojuego => {
                                return <FilaDeTablaDeEmpleados key={videojuego.id} videojuego={videojuego}></FilaDeTablaDeEmpleados>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Listar;