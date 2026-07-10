//Codigo Javascript para hacer cambios visuales en el formulario del inventario 






/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/



//Formularios a mostrar
var fondo_oscuro = document.querySelector(".fondo_oscuro");
var formulario_merma = document.querySelector(".formulario_merma");




//Botones nav de la ventana
var agregar_merma = document.querySelector(".agregar_merma");


//botones del mermar
var volver_merma    = document.querySelector(".volver_formulario_merma");
var salir_merma     = document.querySelector(".salir_formulario_merma");
var siguiente_merma = document.querySelector(".siguiente_formulario_merma");
var enviar_merma    = document.querySelector(".enviar_formulario_merma");



//inputs del merma
var input_merma1 = document.querySelector(".inpu1_merma");
var input_merma2 = document.querySelector(".inpu2_merma");
var input_merma3 = document.querySelector(".inpu3_merma");
var input_merma4 = document.querySelector(".inpu4_merma");


var identificador_merma = document.querySelector(".identificador_merma");


/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/


var input_todos_merma = [input_merma1, input_merma2, input_merma3, input_merma4];



var contador_merma = 0;		//Para el formulario de agregar merma


var texto_merma = ["ID del Producto", "Cantidad del producto","Causa de la merma", "Fecha de la merma"];







/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/



agregar_merma.addEventListener("click", () =>{
	console.log("Funciona merma");

	mostrar_merma();
});








/*
=====================================================
	Condiciones de botones del formulario agregar merma 
=====================================================
*/



//condiciones para el llamado de las funciones
volver_merma.addEventListener("click", () =>{

	console.log("Funciona volver_merma");



	//logica para hacer aparecer cada uno de los inputs
	if (contador_merma > 0){

		contador_merma--;	
		console.log(contador_merma);

		ocultar_inputs_merma();
		input_todos_merma[contador_merma].style.display = "block";
		
		identificador_merma.textContent = texto_merma[contador_merma];

		siguiente_merma.style.display = "block";	
		enviar_merma.style.display = "none";

	
	}
	


});





salir_merma.addEventListener("click", () =>{
	console.log("Funciona volver merma");

	ocultar_merma();
});





siguiente_merma.addEventListener("click", () =>{
	
	console.log("Funciona siguiente_merma");

	//logica para hacer aparecer cada uno de los inputs
	if (contador_merma < 3){

		contador_merma++;	
		console.log(contador_merma);


		ocultar_inputs_merma();
		input_todos_merma[contador_merma].style.display = "block";
		
		identificador_merma.textContent = texto_merma[contador_merma];


		//condicional para hacer aparecer el boton de enviar
		if (contador_merma == 3){
			siguiente_merma.style.display = "none";	
			enviar_merma.style.display = "block";
		}
		
	}
	
	
});














//Merma

function mostrar_merma(){

	console.log("mostrar_merma");
	
	ocultar_inputs_merma();
	vaciar_texto_inputs_merma();

	formulario_merma.style.display = "block";
	fondo_oscuro.style.display = "block";
	input_merma1.style.display = "block";

	contador_merma = 0;	
	identificador_merma.textContent = texto_merma[0];


	siguiente_merma.style.display = "block";	
	enviar_merma.style.display = "none";

} 




function ocultar_merma(){

	console.log("ocultar_merma");
	
	formulario_merma.style.display = "none";
	fondo_oscuro.style.display = "none";

	
}


function ocultar_inputs_merma(){

	console.log("ocultar_inputs");

	input_merma1.style.display = "none";
	input_merma2.style.display = "none";
	input_merma3.style.display = "none";
	input_merma4.style.display = "none";

}


function vaciar_texto_inputs_merma(){

	input_merma1.value = "";
	input_merma2.value = "";
	input_merma3.value = "";
	input_merma4.value = "";
}