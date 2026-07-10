
/*
======================================
= Obteniendo las variables a utilizar
======================================
*/

const padre = document.querySelector('.contenedor_variables');  // 🔥 Cambio aquí
const hijos = padre ? Array.from(padre.children) : [];
const paginacion_atras = document.querySelector(".paginacion_atras");
const paginacion_siguiente = document.querySelector(".paginacion_siguiente");

const limite_elementos = 16;
let paginaActual = 0;
let totalPaginas = 0;



/*
======================================
= Llamada de botones
======================================
*/

paginacion_siguiente.addEventListener('click', function() {
    if (paginaActual < totalPaginas - 1) {
        paginaActual++;
        mostrarPagina(paginaActual);
    }
});

paginacion_atras.addEventListener('click', function() {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(paginaActual);
    }
});



inicializarPaginacion();



/*
======================================
= Funciones a utilizar
======================================
*/

function calcularTotalPaginas() {
    const total = hijos.length;
    totalPaginas = Math.ceil(total / limite_elementos);
    if (totalPaginas === 0) totalPaginas = 1; // Evitar división por cero
}


function mostrarPagina(numeroPagina) {
    // Ocultar todas las filas
    hijos.forEach(hijo => hijo.style.display = 'none');

    // Calcular índices de inicio y fin
    const inicio = numeroPagina * limite_elementos;
    const fin = Math.min(inicio + limite_elementos, hijos.length);

    // Mostrar solo las filas de esta página
    for (let i = inicio; i < fin; i++) {
        hijos[i].style.display = 'table-row';
    }

}

function inicializarPaginacion() {
    calcularTotalPaginas();
    paginaActual = 0;
    mostrarPagina(paginaActual);
}

