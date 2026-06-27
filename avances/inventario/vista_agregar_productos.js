//Codigo Javascript para hacer cambios visuales en el formulario del inventario 




console.log("Vista_agregar_productos conectado");


/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/


//Inputs del formulario
var input1 = document.querySelector("#input_id");
var input2 = document.querySelector("#input_codigo");
var input3 = document.querySelector("#input_nombre");
var input4 = document.querySelector("#input_categoria");
var input5 = document.querySelector("#input_marca");
var input6 = document.querySelector("#input_medida");
var input7 = document.querySelector("#input_stock");
var input8 = document.querySelector("#input_minimo");
var input9 = document.querySelector("#input_costo");
var input10 = document.querySelector("#input_precio");
var input11 = document.querySelector("#input_estado");
var identificador = document.querySelector(".identificador_formulario");



//Formularios a mostrar
var formulario_producto = document.querySelector(".formulario_producto");
var fondo_oscuro = document.querySelector(".fondo_oscuro");




//Botones nav de la ventana
var agregar_producto = document.querySelector(".agregar_producto");
var exportar_inventario = document.querySelector(".exportar_inventario");
var agregar_merma = document.querySelector(".agregar_merma");




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


var input_todos = [input1, input2, input3, input4, input5, input6, input7, input8 ,input9, input10, input11];



var contador_producto = 1;	//para el formulario de agregar producto

var identificadores = ["ID Producto", "Codigo del Producto","Nombre del Producto", "Categoria del Producto","Marca del Producto", "Medida Producto","Stock actual", "Stock minimo Producto","Costo del Producto", "Precio venta del Producto","Estado actual del Producto"];







/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/

//condiciones para el llamado de las funciones
agregar_producto.addEventListener("click", () =>{

	console.log("Funciona producto");

	//llamar funcion para aparecer la ventana
	mostrar_productos();

});



exportar_inventario.addEventListener("click", () =>{
	console.log("Funciona exportar");
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
	if (contador_producto > 0){

		contador_producto--;	
		console.log(contador_producto);

		ocultar_inputs();
		input_todos[contador_producto].style.display = "block";
		identificador.textContent = identificadores[contador_producto];


		//condicional para hacer desaparecer el boton de enviar
		if (contador_producto == 9){
			siguiente_formulario.style.display = "block";	
			enviar_formulario.style.display = "none";
		}

	}




});





salir_formulario.addEventListener("click", () =>{
	
	console.log("Funciona salir_formulario");

	//desaparecer la ventana
	ocultar_productos();

});







siguiente_formulario.addEventListener("click", () =>{
	
	console.log("Funciona siguiente_formulario");

	//logica para hacer aparecer cada uno de los inputs
	if (contador_producto < 10){

		contador_producto++;	
		console.log(contador_producto);

		ocultar_inputs();
		input_todos[contador_producto].style.display = "block";
		identificador.textContent = identificadores[contador_producto];


		//condicional para hacer aparecer el boton de enviar
		if (contador_producto == 10){
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

function mostrar_productos(){

	console.log("mostrar_productos");
	
	ocultar_inputs();
	vaciar_texto_inputs();

	formulario_producto.style.display = "block";
	fondo_oscuro.style.display = "block";
	input1.style.display = "block";
	siguiente_formulario.style.display = "block";
	enviar_formulario.style.display = "none";


	//declarando el contador del formulario agregar 1
	contador_producto = 1;	
	identificador.textContent = identificadores[0];
} 




function ocultar_productos(){

	console.log("ocultar_productos");
	
	formulario_producto.style.display = "none";
	fondo_oscuro.style.display = "none";

}



function ocultar_inputs(){

	console.log("ocultar_inputs");

	input1.style.display = "none";
	input2.style.display = "none";
	input3.style.display = "none";
	input4.style.display = "none";
	input5.style.display = "none";
	input6.style.display = "none";
	input7.style.display = "none";
	input8.style.display = "none";
	input9.style.display = "none";
	input10.style.display = "none";
	input11.style.display = "none";

}


function vaciar_texto_inputs(){

	input1.value = "";
	input2.value = "";
	input3.value = "";
	input4.value = "";
	input5.value = "";
	input6.value = "";
	input7.value = "";
	input8.value = "";
	input9.value = "";
	input10.value = "";
	input11.value = "";
}
