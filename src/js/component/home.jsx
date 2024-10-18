import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { isElementOfType } from "react-dom/test-utils";

//create your first component
const Home = () => {

	let [listaDeTareas, setListaDeTareas] = useState(["bañarse", "limpiar","cocinar","aprender react"])
	
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
			
			<h1 className="text-center mt-5">Todos</h1>

			<div className="mx-auto col-6">
		
				<input id = "tareaNueva" type="email" className="form-control" placeholder=" ¿Que necesitas hacer?" onKeyDown={(e) => {
      				if (e.key === "Enter") {
            			agregarTarea(document.getElementById("tareaNueva").value);
            			document.getElementById("tareaNueva").value = ""; }}}/ 
				>

				{/* <button onClick={()=> agregarTarea(document.getElementById("tareaNueva").value)}></button> */}
				
				<ul className="">
										
						{listaDeTareas.map((item, index) => {
							
							return (

								<li key = {index}>	
									{item}	<i className="fa-solid fa-trash hideIcon" onClick={()=> eliminarTarea(index)}></i>
								</li>
							)

							})} 
					
				</ul>
		
			</div>
	
		</div>
		
			
			
		
	);
};

export default Home;
