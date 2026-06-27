//Codigo Javascript para hacer cambios visuales en el formulario del inventario 




console.log("Vista_agregar_productos conectado");


/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/


//Inputs del formulario
var input1 = document.querySelector("#input_id");
var input2 = document.querySelector("#input_nombre");
var input3 = document.querySelector("#input_descripcion");
var identificador = document.querySelector(".identificador_formulario");



//Formularios a mostrar
var formulario_categoria = document.querySelector(".formulario_categoria");
var fondo_oscuro = document.querySelector(".fondo_oscuro");




//Botones nav de la ventana
var agregar_categoria = document.querySelector(".agregar_categoria");




//botones del formulario
var volver_formulario = document.querySelector(".volver_formulario");
var salir_formulario = document.querySelector(".salir_formulario");
var siguiente_formulario = document.querySelector(".siguiente_formulario");
var enviar_formulario = document.querySelector(".enviar_formulario");




/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/


var input_todos = [input1, input2, input3];



var contador_categoria = 0;	//para el formulario de agregar producto

var identificadores = ["ID Categoria", "Codigo de la Categoria","Descripcion de la Categoria"];






/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/

//condiciones para el llamado de las funciones
agregar_categoria.addEventListener("click", () =>{

	console.log("Funciona agregar_categoria");

	//llamar funcion para aparecer la ventana
	mostrar_categoria();

});












/*
=====================================================
	Condiciones de botones del formulario agregar 
=====================================================
*/



//condiciones para el llamado de las funciones
volver_formulario.addEventListener("click", () =>{

	console.log("Funciona volver_formulario");

	//logica para hacer desaparecer cada uno de los inputs
	if (contador_categoria > 0){

		contador_categoria--;	
		console.log(contador_categoria);

		ocultar_inputs();
		input_todos[contador_categoria].style.display = "block";
		identificador.textContent = identificadores[contador_categoria];



		//condicional para hacer desaparecer el boton de enviar
		siguiente_formulario.style.display = "block";	
		enviar_formulario.style.display = "none";

	}




});





salir_formulario.addEventListener("click", () =>{
	
	console.log("Funciona salir_formulario");

	//desaparecer la ventana
	ocultar_categoria();

});







siguiente_formulario.addEventListener("click", () =>{
	
	console.log("Funciona siguiente_formulario");

	//logica para hacer aparecer cada uno de los inputs
	if (contador_categoria < 3){

		contador_categoria++;	
		console.log(contador_categoria);

		ocultar_inputs();
		input_todos[contador_categoria].style.display = "block";
		identificador.textContent = identificadores[contador_categoria];


		//condicional para hacer aparecer el boton de enviar
		if (contador_categoria == 2){
			siguiente_formulario.style.display = "none";	
			enviar_formulario.style.display = "block";
		}
		
	}
	

});










/*
=====================================================
	Funciones que seran llamadas despues 
=====================================================
*/


//Formulario

function mostrar_categoria(){

	console.log("mostrar_categoria");
	
	ocultar_inputs();
	vaciar_texto_inputs();

	formulario_categoria.style.display = "block";
	fondo_oscuro.style.display = "block";
	input1.style.display = "block";
	siguiente_formulario.style.display = "block";
	enviar_formulario.style.display = "none";


	//declarando el contador del formulario agregar 1
	contador_categoria = 0;	
	identificador.textContent = identificadores[0];
} 




function ocultar_categoria(){

	console.log("ocultar_categoria");
	
	formulario_categoria.style.display = "none";
	fondo_oscuro.style.display = "none";

}



function ocultar_inputs(){

	console.log("ocultar_inputs");

	input1.style.display = "none";
	input2.style.display = "none";
	input3.style.display = "none";

}


function vaciar_texto_inputs(){

	input1.value = "";
	input2.value = "";
	input3.value = "";
}
