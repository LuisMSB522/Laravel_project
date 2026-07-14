/*

================================
=== Obteniendo las variables
================================

*/

var nav1 = document.querySelector(".nav_inicio");
var nav2 = document.querySelector(".nav_personal");
var nav3 = document.querySelector(".nav_gestion");
var nav4 = document.querySelector(".nav_inventario");
var nav5 = document.querySelector(".nav_ventas");


var link1 = document.querySelector(".link_inicio");
var link2 = document.querySelector(".link_personal");
var link3 = document.querySelector(".link_gestion");
var link4 = document.querySelector(".link_inventario");
var link5 = document.querySelector(".link_ventas");


var link_caja = [link1, link2, link3, link4, link5];
verificador = 6;



//hacer desaparecer todos los elementos
desaparecer_link();





/*

================================
=== Funciones botones
================================

*/


nav1.addEventListener('click', () =>{
	aparecer_link(0);
});


nav2.addEventListener('click', () =>{
	aparecer_link(1);
});


nav3.addEventListener('click', () =>{
	aparecer_link(2);
});


nav4.addEventListener('click', () =>{
	aparecer_link(3);
});

nav5.addEventListener('click', () =>{
	aparecer_link(4);
});




/*

================================
=== Funciones a utilizar
================================

*/




function desaparecer_link(){

	link1.style.display = "none";
	link2.style.display = "none";
	link3.style.display = "none";
	link4.style.display = "none";
	link5.style.display = "none";

}


function aparecer_link(x){

	//verificar que el boton haya sido presionado 
	//mas de una vez en el mismo elemento

	if (verificador != x){

		desaparecer_link();
		link_caja[x].style.display = "block";		
		verificador = x;
	}

	else{
		desaparecer_link();
		verificador = 6;
	}


}