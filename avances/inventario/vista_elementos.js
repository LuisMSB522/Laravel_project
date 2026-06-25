//Codigo Javascript para hacer cambios visuales en el formulario del inventario 






/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/


//Inputs del formulario
const input1 = document.querySelector("#input_id");
const input2 = document.querySelector("#input_codigo");
const input3 = document.querySelector("#input_nombre");
const input4 = document.querySelector("#input_categoria");
const input5 = document.querySelector("#input_marca");
const input6 = document.querySelector("#input_medida");
const input7 = document.querySelector("#input_stock");
const input8 = document.querySelector("#input_minimo");
const input9 = document.querySelector("#input_costo");
const input10 = document.querySelector("#input_precio");
const input11 = document.querySelector("#input_estado");
const identificador = document.querySelector(".identificador_formulario");



//Formularios a mostrar
const formulario_producto = document.querySelector(".formulario_producto");
const fondo_oscuro = document.querySelector(".fondo_oscuro");
const formulario_merma = document.querySelector(".formulario_merma");




//Botones nav de la ventana
const agregar_producto = document.querySelector(".agregar_producto");
const exportar_inventario = document.querySelector(".exportar_inventario");
const agregar_merma = document.querySelector(".agregar_merma");




//botones del formulario
const volver_formulario = document.querySelector(".volver_formulario");
const salir_formulario = document.querySelector(".salir_formulario");
const siguiente_formulario = document.querySelector(".siguiente_formulario");
const enviar_formulario = document.querySelector(".enviar_formulario");


//botones del mermar
const volver_merma = document.querySelector(".volver_merma");
const salir_merma = document.querySelector(".salir_merma");
const siguiente_merma = document.querySelector(".siguiente_merma");
const enviar_merma = document.querySelector(".enviar_merma");



//inputs del merma
const input_merma1 = document.querySelector("#id_merma");
const input_merma2 = document.querySelector("#cantidad_merma");
const input_merma3 = document.querySelector("#causa_merma");
const input_merma4 = document.querySelector("#fecha_merma");




/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/


var input_todos = [input1, input2, input3, input4, input5, input6, input7, input8 ,input9, input10, input11];
var input_todos_merma = [input_merma1, input_merma2, input_merma3, input_merma4];



var contador_producto = 1;	//para el formulario de agregar producto
var contador_merma = 1;		//Para el formulario de agregar merma

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



agregar_merma.addEventListener("click", () =>{
	console.log("Funciona merma");

	mostrar_merma();
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
	Condiciones de botones del formulario agregar merma 
=====================================================
*/



//condiciones para el llamado de las funciones
volver_merma.addEventListener("click", () =>{

	console.log("Funciona volver_merma");

});





salir_merma.addEventListener("click", () =>{
	console.log("Funciona volver merma");

	ocultar_merma();
});





siguiente_merma.addEventListener("click", () =>{
	
	console.log("Funciona siguiente_merma");
	
	
});












/*
=====================================================
	Funciones que seran llamadas despues 
=====================================================
*/



function mostrar_productos(){

	console.log("mostrar_productos");
	
	ocultar_inputs();
	vaciar_texto_inputs();

	formulario_producto.style.display = "block";
	fondo_oscuro.style.display = "block";
	input1.style.display = "block";


	//declarando el contador del formulario agregar 1
	contador_producto = 1;	
	identificador.textContent = identificadores[0];
} 




function ocultar_productos(){

	console.log("ocultar_productos");
	
	formulario_producto.style.display = "none";
	fondo_oscuro.style.display = "none";

}



function mostrar_merma(){

	console.log("mostrar_merma");
	
	ocultar_inputs_merma();
	vaciar_texto_inputs_merma();

	formulario_merma.style.display = "block";
	fondo_oscuro.style.display = "block";

} 




function ocultar_merma(){

	console.log("ocultar_merma");
	
	formulario_merma.style.display = "none";
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
