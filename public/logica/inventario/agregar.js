//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

console.log("Vista_agregar_productos conectado");



/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/



//Inputs del formulario
var input1_producto  = document.querySelector(".inpu1_producto");
var input2_producto  = document.querySelector(".inpu2_producto");
var input3_producto  = document.querySelector(".inpu3_producto");
var input4_producto  = document.querySelector(".inpu4_producto");
var input5_producto  = document.querySelector(".inpu5_producto");
var input6_producto  = document.querySelector(".inpu6_producto");
var input7_producto  = document.querySelector(".inpu7_producto");
var input8_producto  = document.querySelector(".inpu8_producto");
var input9_producto  = document.querySelector(".inpu9_producto");
var input10_producto = document.querySelector(".inpu10_producto");
var identificador_producto = document.querySelector(".identificador_formulario");


//Formularios a mostrar
var formulario_producto = document.querySelector(".formulario_producto");
var fondo_oscuro = document.querySelector(".fondo_oscuro");


//Botones nav de la ventana
var agregar_producto = document.querySelector(".agregar_producto");


//botones del formulario
var volver_formulario_producto    = document.querySelector(".volver_formulario_producto");
var salir_formulario_producto     = document.querySelector(".salir_formulario_producto");
var siguiente_formulario_producto = document.querySelector(".siguiente_formulario_producto");
var enviar_formulario_producto    = document.querySelector(".enviar_formulario_producto");








/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_producto = [
    input1_producto, input2_producto, input3_producto, input4_producto,
    input5_producto, input6_producto, input7_producto, input8_producto,
    input9_producto, input10_producto
];


var contador_producto = 1; //para el formulario de agregar producto


var identificadores_producto = [
    "Codigo del Producto", "Nombre del Producto",
    "Categoria del Producto", "Marca del Producto", "Medida Producto",
    "Stock actual", "Stock minimo Producto", "Costo del Producto",
    "Precio venta del Producto", "Estado actual del Producto"
];








/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/

agregar_producto.addEventListener("click", () => {
    console.log("Funciona producto");
    mostrar_producto();
});









/*
=====================================================
	Condiciones de botones del formulario agregar 
=====================================================
*/

volver_formulario_producto.addEventListener("click", () => {
    console.log("Funciona volver_formulario");

    if (contador_producto > 0) {
        contador_producto--;
        console.log(contador_producto);

        ocultar_inputs_producto();
        input_todos_producto[contador_producto].style.display = "block";
        identificador_producto.textContent = identificadores_producto[contador_producto];

        if (contador_producto == 8) {
            siguiente_formulario_producto.style.display = "block";
            enviar_formulario_producto.style.display = "none";
        }
    }
});




salir_formulario_producto.addEventListener("click", () => {
    console.log("Funciona salir_formulario");
    ocultar_producto();
});





siguiente_formulario_producto.addEventListener("click", () => {
    console.log("Funciona siguiente_formulario");

    if (contador_producto < 9) {
        contador_producto++;
        console.log(contador_producto);

        ocultar_inputs_producto();
        input_todos_producto[contador_producto].style.display = "block";
        identificador_producto.textContent = identificadores_producto[contador_producto];

        if (contador_producto == 9) {
            siguiente_formulario_producto.style.display = "none";
            enviar_formulario_producto.style.display = "block";
        }
    }
});







/*
=====================================================
	Funciones que seran llamadas despues 
=====================================================
*/



function mostrar_producto() {
    console.log("mostrar_productos");

    ocultar_inputs_producto();
    vaciar_texto_inputs_producto();

    formulario_producto.style.display = "block";
    fondo_oscuro.style.display = "block";
    input1_producto.style.display = "block";
    siguiente_formulario_producto.style.display = "block";
    enviar_formulario_producto.style.display = "none";

    contador_producto = 0;
    identificador_producto.textContent = identificadores_producto[0];
}

function ocultar_producto() {
    console.log("ocultar_productos");
    formulario_producto.style.display = "none";
    fondo_oscuro.style.display = "none";
}

function ocultar_inputs_producto() {
    console.log("ocultar_inputs");

    input1_producto.style.display = "none";
    input2_producto.style.display = "none";
    input3_producto.style.display = "none";
    input4_producto.style.display = "none";
    input5_producto.style.display = "none";
    input6_producto.style.display = "none";
    input7_producto.style.display = "none";
    input8_producto.style.display = "none";
    input9_producto.style.display = "none";
    input10_producto.style.display = "none";
}

function vaciar_texto_inputs_producto() {
    input1_producto.value = "";
    input2_producto.value = "";
    input3_producto.value = "";
    input4_producto.value = "";
    input5_producto.value = "";
    input6_producto.value = "";
    input7_producto.value = "";
    input8_producto.value = "";
    input9_producto.value = "";
    input10_producto.value = "";
}
