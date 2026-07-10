
/*
======================================
= Obteniendo las variables a utilizar
======================================
*/

// Obtener el contenedor de filas (tbody) y sus hijos (tr)
const padre = document.querySelector('.contenedor_datos');
const hijos = padre ? Array.from(padre.children) : []; // Convertir a array para mejor manejo

// Botones
const anterior = document.querySelector(".paginacion_atras");
const siguiente = document.querySelector(".paginacion_siguiente");

// Configuración
const limite_elementos = 16;
let paginaActual = 0; 
let totalPaginas = 0;




/*
======================================
= Llamada de botones
======================================
*/


siguiente.addEventListener('click', function() {
    if (paginaActual < totalPaginas - 1) {
        paginaActual++;
        mostrarPagina(paginaActual);
    }
});

anterior.addEventListener('click', function() {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(paginaActual);
    }
});

inicializarPaginacion();	//llamando la funcion 







/*
======================================
= Funciones a utilizar
======================================
*/

function calcularTotalPaginas() {
    totalPaginas = Math.ceil(hijos.length / limite_elementos);
    if (totalPaginas === 0) totalPaginas = 1; // si no hay elementos, al menos 1 página vacía
}

function mostrarPagina(pagina) {


    hijos.forEach(hijo => hijo.style.display = 'none');

    const inicio = pagina * limite_elementos;
    const fin = Math.min(inicio + limite_elementos, hijos.length);

    for (let i = inicio; i < fin; i++) {
        hijos[i].style.display = 'table-row';
    }

}

function inicializarPaginacion() {
    calcularTotalPaginas();
    paginaActual = 0;
    mostrarPagina(paginaActual);
}