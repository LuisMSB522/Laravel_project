//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

console.log("Vista_agregar_categoria conectado");

/*
=====================================================
    Seleccionando todas las variables del HTML 
=====================================================
*/

//Inputs del formulario
var inpu1_modificar  = document.querySelector(".inpu1_modificar");
var inpu2_modificar  = document.querySelector(".inpu2_modificar");
var inpu3_modificar  = document.querySelector(".inpu3_modificar");
var identificador_categoria = document.querySelector(".identificador_formulario");





//Formularios a mostrar
var formulario_categoria_modificar = document.querySelector(".formulario_categoria_modificar");
var fondo_oscuro = document.querySelector(".fondo_oscuro");





//Botones nav de la ventana
var modificar_categoria = document.querySelector(".modificar_categoria"); // ✅ Cambiado





//botones del formulario
var volver_modificar    = document.querySelector(".volver_modificar");
var salir_modificar     = document.querySelector(".salir_modificar");
var siguiente_modificar = document.querySelector(".siguiente_modificar");
var enviar_modificar    = document.querySelector(".enviar_modificar");






/*
=====================================================
    Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_modificar = [
    inpu1_modificar, inpu2_modificar, inpu3_modificar
];

var contador_modificar = 0; //para el formulario de agregar categoria

var identificadores_categoria = [
    "ID Categoria", "Nombre Categoria", "Descripcion categoria"
];







/*
=====================================================
    Condiciones de botones del nav ventana 
=====================================================
*/

modificar_categoria.addEventListener("click", () => { // ✅ Cambiado
    console.log("Funciona modificar categoria");
    mostrar_modificar();
});





/*
=====================================================
    Condiciones de botones del formulario agregar 
=====================================================
*/




volver_modificar.addEventListener("click", () => {
    console.log("Funciona volver_formulario");

    if (contador_modificar > 0) {
        contador_modificar--;
        console.log(contador_modificar);

        ocultar_inputs_modificar();
        input_todos_modificar[contador_modificar].style.display = "block";
        identificador_categoria.textContent = identificadores_categoria[contador_modificar];

        siguiente_modificar.style.display = "block";
        enviar_modificar.style.display = "none";
        
    }
});





salir_modificar.addEventListener("click", () => {
    console.log("Funciona salir_formulario");
    ocultar_modificar();
});





siguiente_modificar.addEventListener("click", () => {
    console.log("Funciona siguiente_formulario");

    if (contador_modificar < 2) {
        contador_modificar++;
        console.log(contador_modificar);

        ocultar_inputs_modificar();
        input_todos_modificar[contador_modificar].style.display = "block";
        identificador_categoria.textContent = identificadores_categoria[contador_modificar];

        if (contador_modificar == 2) {
            siguiente_modificar.style.display = "none";
            enviar_modificar.style.display = "block";
        }
    }
});











/*
=====================================================
    Funciones que seran llamadas despues 
=====================================================
*/

function mostrar_modificar() {
    console.log("mostrar_categoria");

    ocultar_inputs_modificar();
    vaciar_texto_inputs_modificar();

    formulario_categoria_modificar.style.display = "block";
    fondo_oscuro.style.display = "block";
    inpu1_modificar.style.display = "block";
    siguiente_formulario_categoria.style.display = "block";
    enviar_formulario_categoria.style.display = "none";

    contador_modificar = 0;
    identificador_categoria.textContent = identificadores_categoria[0];
}




function ocultar_modificar() {
    console.log("ocultar_categoria");
    formulario_categoria_modificar.style.display = "none";
    fondo_oscuro.style.display = "none";
}




function ocultar_inputs_modificar() {
    console.log("ocultar_inputs");

    inpu1_modificar.style.display = "none";
    inpu2_modificar.style.display = "none";
    inpu3_modificar.style.display = "none";
    
    
}




function vaciar_texto_inputs_modificar() {
    inpu1_modificar.value = "";
    inpu2_modificar.value = "";
    inpu3_modificar.value = "";
}
