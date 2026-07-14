//Codigo Javascript para hacer cambios visuales en el formulario del inventario 






/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/



//Formularios a mostrar
var fondo_oscuro = document.querySelector(".fondo_oscuro");
var formulario_agregar = document.querySelector(".formulario_agregar_merma");




//Botones nav de la ventana
var agregar_merma = document.querySelector(".agregar_merma");


//botones del mermar
var volver_agregar    = document.querySelector(".volver_agregar");
var salir_agregar     = document.querySelector(".salir_agregar");
var siguiente_agregar = document.querySelector(".siguiente_agregar");
var enviar_agregar    = document.querySelector(".enviar_agregar");



//inputs del merma
var input1_agregar = document.querySelector(".inpu1_agregar");
var input2_agregar = document.querySelector(".inpu2_agregar");
var input3_agregar = document.querySelector(".inpu3_agregar");
var input4_agregar = document.querySelector(".inpu4_agregar");
var input5_agregar = document.querySelector(".inpu5_agregar");


var identificador_agregar = document.querySelector(".identificador_agregar");


/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/


var input_todos_agregar = [input1_agregar, input2_agregar, input3_agregar, input4_agregar, input5_agregar];

var contador_agregar = 0;		

var texto_agregar = ["Cantidad Merma", "Causa de la Merma", "Fecha de Ajuste", "ID del Producto", "ID del usuario"];



//ocultando la vista desde el inicio
ocultar_agregar_merma();






/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/



agregar_merma.addEventListener("click", () =>{
	console.log("Funciona agregar merma");

	mostrar_agregar_merma();
});








/*
=====================================================
	Condiciones de botones del formulario agregar merma 
=====================================================
*/



//condiciones para el llamado de las funciones
volver_agregar.addEventListener("click", () =>{

	console.log("Funciona volver_merma");



	//logica para hacer aparecer cada uno de los inputs
	if (contador_agregar > 0){

		contador_agregar--;	
		console.log(contador_agregar);

		ocultar_inputs_agregar();
		input_todos_agregar[contador_agregar].style.display = "block";
		
		identificador_agregar.textContent = texto_agregar[contador_agregar];

		siguiente_agregar.style.display = "block";	
		enviar_agregar.style.display = "none";

	
	}
	


});





salir_agregar.addEventListener("click", () =>{
	console.log("Funciona volver merma");

	ocultar_agregar_merma();
});





siguiente_agregar.addEventListener("click", () =>{
	
	console.log("Funciona siguiente_merma");

	//logica para hacer aparecer cada uno de los inputs
	if (contador_agregar < 4){

		contador_agregar++;	
		console.log(contador_agregar);


		ocultar_inputs_agregar();
		input_todos_agregar[contador_agregar].style.display = "block";
		
		identificador_agregar.textContent = texto_agregar[contador_agregar];


		//condicional para hacer aparecer el boton de enviar
		if (contador_agregar == 4){
			siguiente_agregar.style.display = "none";	
			enviar_agregar.style.display = "block";
		}
		
	}
	
	
});














//Merma

function mostrar_agregar_merma(){

	console.log("mostrar_merma");
	
	ocultar_inputs_agregar();
	vaciar_inputs_agregar();

	formulario_agregar.style.display = "block";
	fondo_oscuro.style.display = "block";
	input1_agregar.style.display = "block";

	contador_agregar = 0;	
	identificador_agregar.textContent = texto_agregar[0];


	siguiente_agregar.style.display = "block";	
	enviar_agregar.style.display = "none";

} 




function ocultar_agregar_merma(){

	console.log("ocultar_merma");
	
	formulario_agregar.style.display = "none";
	fondo_oscuro.style.display = "none";

	
}


function ocultar_inputs_agregar(){

	console.log("ocultar_inputs");

	input1_agregar.style.display = "none";
	input2_agregar.style.display = "none";
	input3_agregar.style.display = "none";
	input4_agregar.style.display = "none";
	input5_agregar.style.display = "none";

}


function vaciar_inputs_agregar(){

	console.log("vaciar_inputs");

	input1_agregar.value = "";
	input2_agregar.value = "";
	input3_agregar.value = "";
	input4_agregar.value = "";
	input5_agregar.value = "";
}
