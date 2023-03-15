import React from 'react';




class CrearUsuario extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        nombre:"",
        correo:""
    }
    cambioValor=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});     
    }
    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado...");
        
        const{nombre,correo}=this.state;
        
        console.log(nombre);
        console.log(correo);

        var datosEnviar={ nombre:nombre, correo:correo}
        fetch("http://localhost/empleados/?actualizar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
                
        console.log(datosRespuesta);
        this.props.history.push("/");
            
        })
        
        .catch(console.log)
        
    }

    render() { 

        const{nombre,correo}=this.state;
        return (   
            <div className="card">
                <div className="card-header">
                    Agregar empleado
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                            <label htmlFor="">Nombre:</label>
                            <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escriba nombre del empleado:</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Correo:</label>
                            <input type="text" name="correo" onChange={this.cambioValor} value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escribir correo:</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Agregar empleado</button>
                                <a className="btn btn-danger" href='/'>Cancelar</a>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
        );
    }
}

export default CrearUsuario;

