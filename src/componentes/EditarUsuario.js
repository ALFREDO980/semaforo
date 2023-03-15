import React from "react";


class editarUsuario extends React.Component {
    constructor(props){
        super(props);
        this.state={
            datosCargados:false, 
            empleado:[]
        }

    }
    cambioValor=(e)=>{
        const state=this.state.empleado;
        state[e.target.name]=e.target.value;
        this.setState({empleado:state});     
    }
    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Fromulario enviado..."); 
        
        const{id,nombre,correo}= this.state.empleado;
        console.log(id);
        console.log(nombre);
        console.log(correo);

        var datosEnviar={id:id,nombre:nombre, correo:correo}
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

    componentDidMount(){
        console.log(this.props.match.params.id);

        fetch("http://localhost/empleados/?consultar="+this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
                
                console.log("=>"+datosRespuesta);
                this.setState({
                    datosCargados:true, 
                    empleado:datosRespuesta[0]
                })
            
            })
        .catch(console.log)
    }
    
    render() { 

        const{datosCargados, empleado} = this.state

        if(!datosCargados){return(<div>Cargando...</div>);}

        else{
            return ( 
                
                <div className="card">
                    
                    <div className="card-header">
                        EDITAR EMPLEADO
                    </div>
                
                    <div className="card-body">

                        

                        <form onSubmit={this.enviarDatos}>
                            


                            <div className="form-group">
                                <label htmlFor="">Clave:</label>
                                <input type="text" readOnly className="form-control" value={empleado.id} onChange={this.cambiarValor} name="id" id="id" aria-describedby="helpId" placeholder=""/>
                                <small id="helpId" className="form-text text-muted">Clave</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Nombre:</label>
                                <input type="text" name="nombre" onChange={this.cambioValor} value={empleado.nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Escriba nombre del empleado:</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Correo:</label>
                                <input type="text" name="correo" onChange={this.cambioValor} value={empleado.correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Escribir correo:</small>
                            </div>
                            <div className="btn-group" role="group" aria-label="">
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
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
}
export default editarUsuario;