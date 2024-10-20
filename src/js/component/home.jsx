import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { isElementOfType } from "react-dom/test-utils";

//create your first component
const Home = () => {

	let [listaDeTareas, setListaDeTareas] = useState(["Bañarse", "Limpiar","Cocinar","Aprender react"])
	
	const eliminarTarea = (index) => {
        const nuevaLista = listaDeTareas.filter((_, i) => i !== index);
        setListaDeTareas(nuevaLista); 
    };
	
	const agregarTarea = (tarea) =>{
		const nuevaLista = listaDeTareas.concat(tarea);
		setListaDeTareas(nuevaLista); 
	}


	return (
		
		<div className="container mt-5">
			
			<h1 className="text-center display-1 mb-5">Todos</h1>

			<div className="mx-auto col-6">
		
				<input id = "tareaNueva" type="email" className="form-control mb-3" placeholder=" ¿Que necesitas hacer?" onKeyDown={(e) => {
      				if (e.key === "Enter") {
            			agregarTarea(document.getElementById("tareaNueva").value);
            			document.getElementById("tareaNueva").value = ""; }}}/ 
				>

				{/* <button onClick={()=> agregarTarea(document.getElementById("tareaNueva").value)}></button> */}
				
				<ul className="list-group list-group-flush">
										
						{listaDeTareas.map((item, index) => {
							
							return (<>

								<li className= "list-group-item list-group-item-light" key = {index}>	
									<div className="col-6">{item}	<i className="fa-solid fa-trash hideIcon" onClick={()=> eliminarTarea(index)}></i></div>
									
								</li>
								
								</>
							)

							})} 
							<li className=
				
				{`mt-2 form-control p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 ${listaDeTareas.length === 0 ? "bg-success" : "bg-danger"}`}
				
				>
					
					{listaDeTareas.length === 0?"No hay tareas, añadir tareas":`Quedan ${listaDeTareas.length} tareas por completar`}</li>
					
				</ul>
				
							
				
		
		</div>		
			
		</div>
	);
};

export default Home;
