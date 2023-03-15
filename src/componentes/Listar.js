import React from 'react';



class Listar extends React.Component {
    
    
    state = { 
        datosCargados:false,
        empleados:[]
    }
    borrarRegistros= (id) =>{
        console.log(id);

        fetch("http://localhost/empleados/?borrar="+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
                
                console.log(datosRespuesta);
                this.cargarDatos();
                        
            })
        .catch(console.log)
    }

    cargarDatos(){

        fetch("http://localhost/empleados/")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
                
                console.log(datosRespuesta);
                this.setState({datosCargados:true, empleados:datosRespuesta})
            
            })
        .catch(console.log)
    }

    componentDidMount(){
        this.cargarDatos();

    }

    render() { 
        const{datosCargados, empleados}=this.state

        if(!datosCargados){return(<div>Cargando...</div>);}
        else{

        return ( 
                <div className="card">
                    <div className="card-header">
                    <a className="btn btn-success" href='/crearUsuario'>Agregar</a>

                    </div>
                    <div className="card-body">
                        <h4> Empleados</h4>
                    <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(
                    (empleado)=>(
                        <tr key={empleado.id}>
                            <td >{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.correo}</td>
                            <td>
                        <div className="btn-group" role="group" aria-label="">
                            <a type="button" className="btn btn-warning" href={'/editarUsuario/'+empleado.id}

                            >Editar</a>
                            <button type="button" className="btn btn-danger"
                                onClick={()=>this.borrarRegistros(empleado.id)}
                            >Borrar</button>
                        </div>
                    </td>
                </tr>
                    )
                )}
                
            </tbody>
        </table>
                    </div>
                    <div className="card-footer text-muted">
                        
                    </div>
                </div>  
            
            );
        }
    }
}



export default Listar;