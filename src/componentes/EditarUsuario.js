import React from 'react';
import api from '../servicios/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videojuego: {
                id: "",
                "name": "",
                "firstname": "",
                "rol": "",
                "user": "",
                "password": "",

            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    async componentDidMount() {
        // Obtener ID de URL
        const idVideojuego = 26;
        console.log(idVideojuego)
        // Llamar a la API para obtener los detalles
        const respuesta = await fetch(`${api.RUTA_API}/obtener_videojuego.php?id=${idVideojuego}`);
        const videojuego = await respuesta.json();
        // "refrescar" el formulario
        this.setState({
            videojuego: videojuego,
        });
    }
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Editando usuario</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="name" onChange={this.manejarCambio} value={this.state.videojuego.name} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="firstname">Apellido:</label>
                        <input required placeholder="Apellido" type="text" id="firstname" onChange={this.manejarCambio} value={this.state.videojuego.firstname} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="rol">Rol:</label>
                        <input required placeholder="rol" type="number" id="rol" onChange={this.manejarCambio} value={this.state.videojuego.rol} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="user">Usuario:</label>
                        <input required placeholder="user" type="text" id="user" onChange={this.manejarCambio} value={this.state.videojuego.user} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="password">Password:</label>
                        <input required placeholder="rol" type="text" id="password" onChange={this.manejarCambio} value={this.state.videojuego.password} className="input" />
                    </div>
                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <a href="/usuarios" className="button is-primary mt-2">Volver</a>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.videojuego);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${api.RUTA_API}/actualizar_videojuego.php`, {
            method: "PUT",
            body: cargaUtil,
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Usuario Guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
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
            const usuarioActualizado = state.videojuego;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            if (clave !== "nombre") {
                valor = parseFloat(valor);
            }
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            usuarioActualizado[clave] = valor;
            return {
                videojuego: usuarioActualizado,
            }
        });
    }
}

export default Editar;