//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/

//Formularios a mostrar
var fondo_oscuro = document.querySelector(".fondo_oscuro");
var formulario_modificar = document.querySelector(".formulario_modificar_merma"); // Nota: el selector sigue siendo el mismo (no se cambia en HTML)

//Botones nav de la ventana
var agregar_merma = document.querySelector(".modificar_merma"); // No termina en _modificar, se mantiene

//botones del formulario
var volver_modificar    = document.querySelector(".volver_modificar");
var salir_modificar     = document.querySelector(".salir_modificar");
var siguiente_modificar = document.querySelector(".siguiente_modificar");
var enviar_modificar    = document.querySelector(".enviar_modificar");

//inputs del formulario
var input1_modificar = document.querySelector(".input1_modificar");
var input2_modificar = document.querySelector(".input2_modificar");
var input3_modificar = document.querySelector(".input3_modificar");
var input4_modificar = document.querySelector(".input4_modificar");
var input5_modificar = document.querySelector(".input5_modificar");
var input6_modificar = document.querySelector(".input6_modificar");

var identificador_modificar = document.querySelector(".identificador_modificar");








/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_modificar = [input1_modificar, input2_modificar, input3_modificar, input4_modificar, input5_modificar, input6_modificar];

var contador_modificar = 0;		

var texto_modificar = ["ID merma", "Cantidad Merma", "Causa de la Merma", "Fecha de Ajuste", "ID del Producto", "ID del usuario"];

//ocultando la vista desde el inicio
ocultar_modificar_merma();








/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/

agregar_merma.addEventListener("click", () =>{
	console.log("Funciona agregar merma");
	mostrar_modificar_merma();
});






/*
=====================================================
	Condiciones de botones del formulario 
=====================================================
*/

volver_modificar.addEventListener("click", () =>{
	console.log("Funciona volver_merma");
	if (contador_modificar > 0){
		contador_modificar--;	
		console.log(contador_modificar);
		ocultar_inputs_modificar();
		input_todos_modificar[contador_modificar].style.display = "block";
		identificador_modificar.textContent = texto_modificar[contador_modificar];
		siguiente_modificar.style.display = "block";	
		enviar_modificar.style.display = "none";
	}
});




salir_modificar.addEventListener("click", () =>{
	console.log("Funciona salir");
	ocultar_modificar_merma();
});




siguiente_modificar.addEventListener("click", () =>{
	console.log("Funciona siguiente_merma");
	if (contador_modificar < 5){
		contador_modificar++;	
		console.log(contador_modificar);
		ocultar_inputs_modificar();
		input_todos_modificar[contador_modificar].style.display = "block";
		identificador_modificar.textContent = texto_modificar[contador_modificar];
		if (contador_modificar == 5){
			siguiente_modificar.style.display = "none";	
			enviar_modificar.style.display = "block";
		}
	}
});




//Funciones

function mostrar_modificar_merma(){
	console.log("mostrar_merma");
	ocultar_inputs_modificar();
	vaciar_inputs_modificar();
	formulario_modificar.style.display = "block";
	fondo_oscuro.style.display = "block";
	input1_modificar.style.display = "block";
	contador_modificar = 0;	
	identificador_modificar.textContent = texto_modificar[0];
	siguiente_modificar.style.display = "block";	
	enviar_modificar.style.display = "none";
} 

function ocultar_modificar_merma(){
	console.log("ocultar_merma");
	formulario_modificar.style.display = "none";
	fondo_oscuro.style.display = "none";
}

function ocultar_inputs_modificar(){
	console.log("ocultar_inputs");
	input1_modificar.style.display = "none";
	input2_modificar.style.display = "none";
	input3_modificar.style.display = "none";
	input4_modificar.style.display = "none";
	input5_modificar.style.display = "none";
	input6_modificar.style.display = "none";
}

function vaciar_inputs_modificar(){
	console.log("vaciar_inputs");
	input1_modificar.value = "";
	input2_modificar.value = "";
	input3_modificar.value = "";
	input4_modificar.value = "";
	input5_modificar.value = "";
	input6_modificar.value = "";
}