import React from 'react';
import Api from "../servicios/api";




class CrearUsuario2 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        name:"",
        firstname:"",
        user:"",
        password:"",
        rol:"",
        errores:[]
    }
    cambioValor=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state, errores:[]});     
    }
    //programacion para verificar los errrores 
    verificarEror(elemento){

        return this.state.errores.indexOf(elemento) !==-1;

    }

    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado...");
        
        const{name,firstname,user,password,rol}=this.state;
        console.log(name);
        console.log(firstname);
        console.log(user);
        console.log(password);
        console.log(rol);

        //genera las validaciones 
        var errores=[];
        if(!name)errores.push("error_nombre");
        if(!firstname)errores.push("error_apellido");
        if(!user)errores.push("error_usuario");
        if(!password)errores.push("error_password");
        if(!rol)errores.push("error_rol");

        //Actualizar errores
        this.setState({errores:errores});
        if(errores.length>0)return false;

        var datosEnviar={name:name, firstname:firstname, user:user, password:password, rol:rol}
        fetch(Api+"?inserta=1",{
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

        const{name,firstname,user,password,rol}=this.state;
        return (   
            <div className="card">
                <div className="card-header">
                    Agregar empleado
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                            <label htmlFor="">Nombre:</label>
                            <input type="text" name="name" onChange={this.cambioValor} value={name} id="name"
                                className={((this.verificarEror("error_nombre"))?"is-invalid":"" )+" form-control"} placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escriba nombre del empleado:</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Apellido:</label>
                            <input type="text" name="firstname" onChange={this.cambioValor} value={firstname} id="firstname" 
                                className={((this.verificarEror("error_apellido"))?"is-invalid":"" )+" form-control"} placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribir apellido:</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Usuario:</label>
                            <input type="text" name="user" onChange={this.cambioValor} value={user} id="user" 
                                className={((this.verificarEror("error_usuario"))?"is-invalid":"" )+" form-control"} placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribir nombre de usuario:</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password:</label>
                            <input type="text" name="password" onChange={this.cambioValor} value={password} id="password" 
                                className={((this.verificarEror("error_password"))?"is-invalid":"" )+" form-control"} placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribir contraseña:</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Rol:</label>
                            <input type="text" name="rol" onChange={this.cambioValor} value={rol} id="rol" 
                                className={((this.verificarEror("error_rol"))?"is-invalid":"" )+" form-control"} placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribir el rol:</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Agregar empleado</button>
                                <a className="btn btn-danger" href='/editar'>Cancelar</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CrearUsuario2;