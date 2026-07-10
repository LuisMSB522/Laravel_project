//Codigo Javascript para hacer cambios visuales en el formulario del inventario 

console.log("Vista_modificar_productos conectado");

/*
=====================================================
	Seleccionando todas las variables del HTML 
=====================================================
*/

//Inputs del formulario
var input1_modificar = document.querySelector(".inpu1_modificar");
var input2_modificar = document.querySelector(".inpu2_modificar");
var input3_modificar = document.querySelector(".inpu3_modificar");
var input4_modificar = document.querySelector(".inpu4_modificar");
var input5_modificar = document.querySelector(".inpu5_modificar");
var input6_modificar = document.querySelector(".inpu6_modificar");
var input7_modificar = document.querySelector(".inpu7_modificar");
var input8_modificar = document.querySelector(".inpu8_modificar");
var input9_modificar = document.querySelector(".inpu9_modificar");
var input10_modificar = document.querySelector(".inpu10_modificar");
var input11_modificar = document.querySelector(".inpu11_modificar");
var input12_modificar = document.querySelector(".inpu12_modificar");
var identificador_modificar = document.querySelector(".identificador_modificar");



//Formularios a mostrar
var formulario_modificar = document.querySelector(".formulario_modificar");
var fondo_oscuro = document.querySelector(".fondo_oscuro");



//Botones nav de la ventana
var modificar_producto = document.querySelector(".modificar_producto");



//botones del formulario
var volver_formulario_modificar    = document.querySelector(".volver_formulario_modificar");
var salir_formulario_modificar     = document.querySelector(".salir_formulario_modificar");
var siguiente_formulario_modificar = document.querySelector(".siguiente_formulario_modificar");
var enviar_formulario_modificar    = document.querySelector(".enviar_formulario_modificar");




/*
=====================================================
	Variables a utilizar durante la logica 
=====================================================
*/

var input_todos_modificar = [input1_modificar, input2_modificar, input3_modificar, 
	input4_modificar, input5_modificar, input6_modificar, 
	input7_modificar, input8_modificar, input9_modificar, 
	input10_modificar, input11_modificar, input12_modificar];

var contador_modificar = 0; //para el formulario de modificar producto

var identificadores_modificar = ["ID Producto", "Codigo del Producto","Nombre del Producto", 
	"Categoria del Producto","Marca del Producto", "Medida Producto",
	"Stock actual", "Stock minimo Producto","Costo del Producto", 
	"Precio venta del Producto","Estado actual del Producto", "Motivo de la modificacion"];





/*
=====================================================
	Condiciones de botones del nav ventana 
=====================================================
*/

modificar_producto.addEventListener("click", () => {
    console.log("Funciona producto");
    mostrar_modificar();
});






/*
=====================================================
	Condiciones de botones del formulario agregar 
=====================================================
*/


// Boton Volver 
volver_formulario_modificar.addEventListener("click", () => {
    console.log("Funciona volver_formulario");

    if (contador_modificar > 0) {
        contador_modificar--;
        console.log(contador_modificar);

        ocultar_inputs_modificar();
        input_todos_modificar[contador_modificar].style.display = "block";
        identificador_modificar.textContent = identificadores_modificar[contador_modificar];

        if (contador_modificar == 10) {
            siguiente_formulario_modificar.style.display = "block";
            enviar_formulario_modificar.style.display = "none";
        }
    }
});









//Boton Salir
salir_formulario_modificar.addEventListener("click", () => {
    console.log("Funciona salir_formulario");
    ocultar_modificar();
});









//Boton Siguiente
siguiente_formulario_modificar.addEventListener("click", () => {
    console.log("Funciona siguiente_formulario");

    if (contador_modificar < 11) {
        contador_modificar++;
        console.log(contador_modificar);

        ocultar_inputs_modificar();
        input_todos_modificar[contador_modificar].style.display = "block";
        identificador_modificar.textContent = identificadores_modificar[contador_modificar];
        console.log(identificador_modificar.textContent);
        console.log(input_todos_modificar[contador_modificar]);

        if (contador_modificar == 11) {
            siguiente_formulario_modificar.style.display = "none";
            enviar_formulario_modificar.style.display = "block";
        }
    }
});





/*
=====================================================
	Funciones que seran llamadas despues 
=====================================================
*/

function mostrar_modificar() {
    console.log("mostrar_productos");

    ocultar_inputs_modificar();
    vaciar_texto_inputs_modificar();

    formulario_modificar.style.display = "block";
    fondo_oscuro.style.display = "block";
    input1_modificar.style.display = "block";
    siguiente_formulario_modificar.style.display = "block";
    enviar_formulario_modificar.style.display = "none";

    contador_modificar = 0;
    identificador_modificar.textContent = identificadores_modificar[0];
}




function ocultar_modificar() {
    console.log("ocultar_productos");
    formulario_modificar.style.display = "none";
    fondo_oscuro.style.display = "none";
}




function ocultar_inputs_modificar() {
    console.log("ocultar_inputs");

    input1_modificar.style.display = "none";
    input2_modificar.style.display = "none";
    input3_modificar.style.display = "none";
    input4_modificar.style.display = "none";
    input5_modificar.style.display = "none";
    input6_modificar.style.display = "none";
    input7_modificar.style.display = "none";
    input8_modificar.style.display = "none";
    input9_modificar.style.display = "none";
    input10_modificar.style.display = "none";
    input11_modificar.style.display = "none";
    input12_modificar.style.display = "none";
}



function vaciar_texto_inputs_modificar() {
    input1_modificar.value = "";
    input2_modificar.value = "";
    input3_modificar.value = "";
    input4_modificar.value = "";
    input5_modificar.value = "";
    input6_modificar.value = "";
    input7_modificar.value = "";
    input8_modificar.value = "";
    input9_modificar.value = "";
    input10_modificar.value = "";
    input11_modificar.value = "";
    input12_modificar.value = "";
}