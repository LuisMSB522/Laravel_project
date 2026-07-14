//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

/*
=====================================================
    Seleccionando todas las variables del HTML 
=====================================================
*/

//Formularios a mostrar
var fondo_oscuro = document.querySelector(".fondo_oscuro");
var formulario_eliminar = document.querySelector(".formulario_eliminar_merma"); // Nota: el selector sigue siendo el mismo (no se cambia en HTML)


//Botones nav de la ventana
var eliminar_merma = document.querySelector(".eliminar_merma"); // No termina en _agregar, se mantiene



//botones del formulario
var volver_eliminar    = document.querySelector(".volver_eliminar");
var salir_eliminar     = document.querySelector(".salir_eliminar");
var siguiente_eliminar = document.querySelector(".siguiente_eliminar");
var enviar_eliminar    = document.querySelector(".enviar_eliminar");


//inputs del formulario
var input1_eliminar = document.querySelector(".input1_eliminar");
var input2_eliminar = document.querySelector(".input2_eliminar");
var input3_eliminar = document.querySelector(".input3_eliminar");
var input4_eliminar = document.querySelector(".input4_eliminar");
var input5_eliminar = document.querySelector(".input5_eliminar");
var input6_eliminar = document.querySelector(".input6_eliminar");

var identificador_eliminar = document.querySelector(".identificador_eliminar");








/*
=====================================================
    Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_eliminar = [input1_eliminar, input2_eliminar, input3_eliminar, input4_eliminar, input5_eliminar, input6_eliminar];

var contador_eliminar = 0;      

var texto_eliminar = ["ID merma", "Cantidad Merma", "Causa de la Merma", "Fecha de Ajuste", "ID del Producto", "ID del usuario"];

//ocultando la vista desde el inicio
ocultar_eliminar_merma();






/*
=====================================================
    Condiciones de botones del nav ventana 
=====================================================
*/

eliminar_merma.addEventListener("click", () =>{
    console.log("Funciona agregar merma");
    mostrar_eliminar_merma();
});

/*
=====================================================
    Condiciones de botones del formulario 
=====================================================
*/

volver_eliminar.addEventListener("click", () =>{
    console.log("Funciona volver_merma");
    if (contador_eliminar > 0){
        contador_eliminar--;    
        console.log(contador_eliminar);
        ocultar_inputs_eliminar();
        input_todos_eliminar[contador_eliminar].style.display = "block";
        identificador_eliminar.textContent = texto_eliminar[contador_eliminar];
        siguiente_eliminar.style.display = "block"; 
        enviar_eliminar.style.display = "none";
    }
});

salir_eliminar.addEventListener("click", () =>{
    console.log("Funciona salir");
    ocultar_eliminar_merma();
});

siguiente_eliminar.addEventListener("click", () =>{
    console.log("Funciona siguiente_merma");
    if (contador_eliminar < 5){
        contador_eliminar++;    
        console.log(contador_eliminar);
        ocultar_inputs_eliminar();
        input_todos_eliminar[contador_eliminar].style.display = "block";
        identificador_eliminar.textContent = texto_eliminar[contador_eliminar];
        if (contador_eliminar == 5){
            siguiente_eliminar.style.display = "none";  
            enviar_eliminar.style.display = "block";
        }
    }
});

//Funciones

function mostrar_eliminar_merma(){

    console.log("mostrar_merma");
    ocultar_inputs_eliminar();
    vaciar_inputs_eliminar();
    formulario_eliminar.style.display = "block";
    fondo_oscuro.style.display = "block";
    input1_eliminar.style.display = "block";
    contador_eliminar = 0;  
    identificador_eliminar.textContent = texto_eliminar[0];
    siguiente_eliminar.style.display = "block"; 
    enviar_eliminar.style.display = "none";
} 




function ocultar_eliminar_merma(){
    
    console.log("ocultar_merma");
    formulario_eliminar.style.display = "none";
    fondo_oscuro.style.display = "none";
}




function ocultar_inputs_eliminar(){
    
    console.log("ocultar_inputs");
    input1_eliminar.style.display = "none";
    input2_eliminar.style.display = "none";
    input3_eliminar.style.display = "none";
    input4_eliminar.style.display = "none";
    input5_eliminar.style.display = "none";
    input6_eliminar.style.display = "none";
}




function vaciar_inputs_eliminar(){
    console.log("vaciar_inputs");
    input1_eliminar.value = "";
    input2_eliminar.value = "";
    input3_eliminar.value = "";
    input4_eliminar.value = "";
    input5_eliminar.value = "";
    input6_eliminar.value = "";
}