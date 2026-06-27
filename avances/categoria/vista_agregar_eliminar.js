//Codigo Javascript para hacer cambios visuales en el formulario del inventario 






/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/



//Formularios a mostrar
var fondo_oscuro = document.querySelector(".fondo_oscuro");
var formulario_eliminar = document.querySelector(".formulario_eliminar");


//Botones nav de la ventana
var eliminar_categoria = document.querySelector(".eliminar_categoria");


//botones del eliminar
var volver_eliminar = document.querySelector(".volver_eliminar");


//inputs de eliminar
var input_eliminar1 = document.querySelector("#id_categoria");








/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/



eliminar_categoria.addEventListener("click", () =>{
	console.log("Funciona eliminar");

	mostrar_eliminar();
});








/*
=====================================================
	Condiciones de botones del formulario agregar merma 
=====================================================
*/



volver_eliminar.addEventListener("click", () =>{
	console.log("Funciona volver merma");

	ocultar_eliminar();
});














//Merma

function mostrar_eliminar(){

	console.log("mostrar_merma");
	
	
	formulario_eliminar.style.display = "block";
	fondo_oscuro.style.display = "block";
	

	
} 




function ocultar_eliminar(){

	console.log("ocultar_merma");
	
	formulario_eliminar.style.display = "none";
	fondo_oscuro.style.display = "none";

	
}
