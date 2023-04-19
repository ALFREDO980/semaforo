import React from 'react';
import api from "../servicios/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faRotateLeft} from '@fortawesome/free-solid-svg-icons'


class AgregarDelito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videojuego: {
                "name   ": "",
                "firstname": "",
                "user": "",
                "password": "",
                "rol": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (
            
            
            <div className="card">
                    <div className="card-header">
                        <h2>Delitos</h2> 
                    </div>
                    <div className="card-body">
                    <div className="column is-one-third">
                <h1 className="is-size-3">Agregar Usuario</h1>  
                <ToastContainer></ToastContainer>
                <form className="file" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="name" onChange={this.manejarCambio} value={this.state.videojuego.name} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="firstname">Apellido:</label>
                        <input required placeholder="Apellido" type="text" id="firstname" onChange={this.manejarCambio} value={this.state.videojuego.firstname} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="user">Nombre usuario:</label>
                        <input required placeholder="usuario" type="text" id="user" onChange={this.manejarCambio} value={this.state.videojuego.user} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="password">Contraseña:</label>
                        <input required placeholder="password" type="text" id="password" onChange={this.manejarCambio} value={this.state.videojuego.password} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="rol">Rol usuario:</label>
                        <input required placeholder="rol" type="text" id="rol" onChange={this.manejarCambio} value={this.state.videojuego.rol} className="input" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success"> <FontAwesomeIcon icon={faFloppyDisk} /> Guardar</button>
                        &nbsp;
                        <a href='/usuarios' className="btn btn-danger"> <FontAwesomeIcon icon={faRotateLeft} /> Volver</a>
                    </div>
                </form>
            </div> 
                    </div>
            </div>
            
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.videojuego);
        console.log(cargaUtil)
        // ¡Y enviarlo!
        const respuesta = await fetch(`${api.RUTA_API}/guardar_videojuego.php`, {
            method: "POST",
            body: cargaUtil,
        });
        console.log(respuesta)
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Videojuego guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                usuario: {
                    name: "",
                    firsname: "",
                    user: "",
                    password:"",
                    rol:"",
                }
            });
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }
    manejarCambio(evento) {
        // Extraer la clave del estado que se va a actualizar, así como el valor
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const videojuegoActualizado = state.videojuego;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;
            
            return {
                videojuego: videojuegoActualizado,
            }
        });
    }
}

export default AgregarDelito;