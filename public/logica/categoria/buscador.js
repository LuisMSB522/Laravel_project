/*
============================
== Variables a utilizar
============================
*/
const tbody = document.querySelector('.contenedor_variables');
const buscador = document.querySelector(".buscador");
const boton = document.querySelector(".boton_buscador");


const atras = document.querySelector(".paginacion_atras");
const siguiente = document.querySelector(".paginacion_siguiente");
var boton_refrescar = document.querySelector(".boton_refrescar");

var cantidad = tbody.children.length;



//Formula de variable a usar
//var prueba = tbody.children[0];




/*
============================
== Funciones de los elementos
============================
*/


boton.addEventListener('click', () =>{

	//desaparecer los elementos
	desaparecer_elementos();
	buscar_dato(buscador.value);

});



boton_refrescar.addEventListener('click', () => {

	desaparecer_elementos();
	refrescar();

});






/*
============================
== Funciones a utilizar
============================
*/




function desaparecer_elementos(){


	atras.style.display = "none";
	siguiente.style.display = "none";

	for (var i = 0; i < cantidad; i++){
		tbody.children[i].style.display = "none";
	}

}





function buscar_dato(x){

	//Crear un array que almacene los objetos necesarios y compararlos

	if (tbody) {

	    const filas = tbody.children;
	    const datos = [];


	    for (let i = 0; i < filas.length; i++) {

	        const celdas = filas[i].querySelectorAll('td');

	        datos.push({
	    	    id: celdas[0].textContent.trim(),
	        	nombre: celdas[1].textContent.trim(),
	        });
	    }


	
		//Por medio de la variable datos, buscar el dato necesario 
		//Por medio del nombre o el id

		for (var i = 0; i < datos.length; i++){
			

			//verificar por ID de la busqueda
			if (datos[i].id == x || datos[i].nombre == x){
				console.log("encontrado = " + datos[i].id + " " + datos[i].nombre);


				//aparecer el elemento encontrado
				tbody.children[i].style.display = "table-row";
			}

		}

	} 

}




function refrescar(){

	buscador.value = "";
	atras.style.display = "block";
	siguiente.style.display = "block";

	for (var i = 0; i < 16; i++){
		tbody.children[i].style.display = "table-row";
	}

}