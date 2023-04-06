import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import api from '../servicios/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

class FilaDeTablaDeEmpleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Si han eliminado este juego, no necesitamos mostrarlo
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
    redireccionarParaEditar() {
        return <Redirect to={`/videojuegos/editar_empleado/${this.props.videojuego.id}`} />
    }
    async eliminar() {
        const resultado = await Swal.fire({
            title: 'Confirmación',
            text: `¿Eliminar "${this.props.videojuego.name}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });
        // Si no confirma, detenemos la función
        if (!resultado.value) {
            return;
        }
        const respuesta = await fetch(`${api.RUTA_API}/eliminar_videojuego.php?id=${this.props.videojuego.id}`, {
            method: "DELETE",
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Videojuego eliminado ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                eliminado: true,
            });
        } else {
            toast.error("Error eliminando. Intenta de nuevo");
        }
    }
    render() {
        if (this.state.eliminado) {
            return null;
        }
        return (
            <tr>
                <td>{this.props.videojuego.id}</td>
                <td>{this.props.videojuego.nombre}</td>
                <td>{this.props.videojuego.correo}</td>
                <td>
                    <a href={`/videojuegos/editar/${this.props.videojuego.id}`} className="btn btn-warning"> <FontAwesomeIcon icon={faPenToSquare}/> Editar</a>
                </td>
                <td>
                    <button onClick={this.eliminar} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/> Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default FilaDeTablaDeEmpleados;