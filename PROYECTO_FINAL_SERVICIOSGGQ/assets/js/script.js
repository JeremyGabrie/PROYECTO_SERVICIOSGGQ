jQuery.noConflict();
jQuery(document).ready(function($){					
function lightboxPhoto() {
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	}
		if(jQuery().prettyPhoto) {
		lightboxPhoto(); 		
	}
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});
//CONTADOR 
//AÑADÍ CONTADORES
addEventListener('DOMContentLoaded' , () => {
	const contadores = document.querySelectorAll('.title-spe')
	const velocidad = 1000

	const animarContadores = () => {
		for(const contador of contadores){
			const actualizar_contador = () => {
				let cantidad_maxima = +contador.dataset.cantidadTotal,
					valor_actual = +contador.innerText,
					incremento = cantidad_maxima/velocidad

				if(valor_actual < cantidad_maxima){
					contador.innerText = Math.ceil(valor_actual + incremento)
					setTimeout(actualizar_contador, 5)
				}else{
					contador.innerText = cantidad_maxima
				}
			}
			actualizar_contador()
		}	
	}
	animarContadores()
});
//SCROLL
window.onscroll = function () {
	scrollFunction()
};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("movetop").style.display = "block";
	} else {
		document.getElementById("movetop").style.display = "none";
	}
}
// Cuando el usuario haga clic en el botón, desplácese hasta la parte superior del documento.
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// Cuando el usuario va al footer hacer una busqueda rápida
$(function () {
	$('.navbar-toggler').click(function () {
		$('body').toggleClass('noscroll');
	})
});
//mapa
let mapa;
const trabajo_sauce = { lat: -12.002007729298278, lng: -76.9989415010302 };
function agregarMarker() {
    mapa = new google.maps.Map(document.getElementById("map"), {
        center: trabajo,
        zoom: 15,
    });
}
//ANIMACION CUANDO NO COMPLETA EL CAMPO PARA CORREO
$(document).ready(function () {
    locationButton = document.getElementById("button")
    locationButton.addEventListener("click", () => {
        Swal.fire({
			position: 'top-end',
			icon: 'error',
			title: 'Mal Ingreso',
			showConfirmButton: false,
			timer: 1500
		});
    });
});
//LE INTENTE COLOCAR ESTO PROFESOR, LO PUEDE VER EN CARGA.HTML, PERO NO PODIA ERA UN AÑADIDO :C
window.onload = function () {
	var contenedor = document.querySelector('contenedor_carga');
	contenedor.style.opacity = 0;
	contenedor.style.visibility ='hidden';
}
