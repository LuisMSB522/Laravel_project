//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

console.log("Vista_agregar_categoria conectado");

/*
=====================================================
    Seleccionando todas las variables del HTML 
=====================================================
*/

//Inputs del formulario
var input1_agregar  = document.querySelector(".inpu1_categoria");
var input2_agregar  = document.querySelector(".inpu2_categoria");
var identificador_categoria = document.querySelector(".identificador_formulario");





//Formularios a mostrar
var formulario_categoria = document.querySelector(".formulario_categoria_agregar");
var fondo_oscuro = document.querySelector(".fondo_oscuro");





//Botones nav de la ventana
var agregar_categoria = document.querySelector(".agregar_categoria"); // ✅ Cambiado





//botones del formulario
var volver_formulario_categoria    = document.querySelector(".volver_formulario_categoria");
var salir_formulario_categoria     = document.querySelector(".salir_formulario_categoria");
var siguiente_formulario_categoria = document.querySelector(".siguiente_formulario_categoria");
var enviar_formulario_categoria    = document.querySelector(".enviar_formulario_categoria");






/*
=====================================================
    Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_categoria = [
    input1_agregar, input2_agregar
];

var contador_categoria = 0; //para el formulario de agregar categoria

var identificadores_categoria = [
    "Nombre Categoria", "Descripcion categoria"
];







/*
=====================================================
    Condiciones de botones del nav ventana 
=====================================================
*/

agregar_categoria.addEventListener("click", () => { // ✅ Cambiado
    console.log("Funciona categoria");
    mostrar_categoria();
});





/*
=====================================================
    Condiciones de botones del formulario agregar 
=====================================================
*/




volver_formulario_categoria.addEventListener("click", () => {
    console.log("Funciona volver_formulario");

    if (contador_categoria > 0) {
        contador_categoria--;
        console.log(contador_categoria);

        ocultar_inputs_categoria();
        input_todos_categoria[contador_categoria].style.display = "block";
        identificador_categoria.textContent = identificadores_categoria[contador_categoria];

        siguiente_formulario_categoria.style.display = "block";
        enviar_formulario_categoria.style.display = "none";
        
    }
});





salir_formulario_categoria.addEventListener("click", () => {
    console.log("Funciona salir_formulario");
    ocultar_categoria();
});





siguiente_formulario_categoria.addEventListener("click", () => {
    console.log("Funciona siguiente_formulario");

    if (contador_categoria < 1) {
        contador_categoria++;
        console.log(contador_categoria);

        ocultar_inputs_categoria();
        input_todos_categoria[contador_categoria].style.display = "block";
        identificador_categoria.textContent = identificadores_categoria[contador_categoria];

        if (contador_categoria == 1) {
            siguiente_formulario_categoria.style.display = "none";
            enviar_formulario_categoria.style.display = "block";
        }
    }
});











/*
=====================================================
    Funciones que seran llamadas despues 
=====================================================
*/

function mostrar_categoria() {
    console.log("mostrar_categoria");

    ocultar_inputs_categoria();
    vaciar_texto_inputs_categoria();

    formulario_categoria.style.display = "block";
    fondo_oscuro.style.display = "block";
    input1_agregar.style.display = "block";
    siguiente_formulario_categoria.style.display = "block";
    enviar_formulario_categoria.style.display = "none";

    contador_categoria = 0;
    identificador_categoria.textContent = identificadores_categoria[0];
}




function ocultar_categoria() {
    console.log("ocultar_categoria");
    formulario_categoria.style.display = "none";
    fondo_oscuro.style.display = "none";
}




function ocultar_inputs_categoria() {
    console.log("ocultar_inputs");

    input1_agregar.style.display = "none";
    input2_agregar.style.display = "none";
    
}




function vaciar_texto_inputs_categoria() {
    input1_agregar.value = "";
    input2_agregar.value = "";
}
