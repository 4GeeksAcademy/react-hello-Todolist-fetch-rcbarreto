import React, {useState, useEffect} from "react";


const Home = () => {

	let [listaDeTareas, setListaDeTareas] = useState([])

	
	const cargarTareas = async () => {
		const url = "https://playground.4geeks.com/todo/users/rcbarreto";
		const resp = await fetch(url);
		const data = await resp.json();
		setListaDeTareas(data.todos);
};

	const existeUsuario = async () =>{

		const url = "https://playground.4geeks.com/todo/users/rcbarreto";

		try{

		
			const response = await fetch(url);
			
			if (response.ok) {
				const data = await response.json();
				return true;  
			} else {
				const resp = await fetch (url, {
				method:"POST",
				
			})
			}
		}catch (error) {
			return false;
				
		}
	}

	async function agregarTareas(e) {

		if (e.key === "Enter") {
			
			const url = "https://playground.4geeks.com/todo/todos/rcbarreto"
			const resp = await fetch (url, {
				method:"POST",
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify({
					label: document.getElementById("tareaNueva").value,
					is_done: false
				})
			})
			
			if(resp.ok){
				document.getElementById("tareaNueva").value = ""
				cargarTareas()
			}
		
	}}

	async function eliminarTarea (idTarea) {
	
		const url = `https://playground.4geeks.com/todo/todos/${idTarea}`; 
	   	const resp = await fetch(url, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			});
	
			if (resp.ok) {
				
				cargarTareas()
		
		}
	}	

	const eliminarTodasLasTareas = async () => {
    const url = "https://playground.4geeks.com/todo/todos/rcbarreto";
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      setListaDeTareas([]); // Vacía la lista local de tareas
      console.log("Todas las tareas han sido eliminadas");
    }
  };

	useEffect(() => {
		  const iniciar = async () => {
		  const usuarioExiste = await existeUsuario();
		  if (usuarioExiste) {
			await cargarTareas();
		  }
		};
		iniciar();
	  }, []);

	return (
		
		<div className="container mt-5">
			
			<h1 className="text-center display-1 mb-5">Todos</h1>

			<div className="mx-auto col-6">
		
				<input id = "tareaNueva" type="text" className="form-control mb-3" placeholder=" ¿Que necesitas hacer?" onKeyDown={(e) => {
					agregarTareas(e)
      				}}/
				>

						
				<ul className="list-group list-group-flush">
										
						{listaDeTareas.map((item) => {
							
							return (

								<li className= "list-group-item list-group-item-light" key = {item.id}>	
									<div className="col-6">{item.label}	<i className="fa-solid fa-trash hideIcon" 
									onClick={()=> eliminarTarea(item.id)}></i></div>
								</li>
								
							)

							})} 
							<li className=
				
				{`mt-2 form-control p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 ${listaDeTareas.length === 0 ? "bg-success" : "bg-danger"}`}
				
				>
					
					{listaDeTareas.length === 0?"No hay tareas, añadir tareas":`Quedan ${listaDeTareas.length} tareas por completar`}</li>
					
				</ul>
				<div className="text-center mb-3">
  					<button type="button" className="btn btn-primary" onClick={() => {
      					listaDeTareas.forEach((tarea) => eliminarTarea(tarea.id));
    				}}
  					>
    					Eliminar todas las tareas
  					</button>
				</div>
							
				
		
		</div>		
			
		</div>
	);
};

export default Home;
