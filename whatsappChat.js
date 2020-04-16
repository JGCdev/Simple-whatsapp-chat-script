
$(document).ready(function(){

	$('#buttonChat').click(function(e) {  
		var texto = $("#inputChat").val();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			window.open("https://api.whatsapp.com/send?phone=34611440258&text=" + texto);
		}else{
			window.open("https://web.whatsapp.com/send?phone=34611440258&text=" + texto);
		}
	});

	$('#abrir-popup-oculto').toggle( 
		/* 
			Primer click.
			Función que descubre un panel oculto y cambia el texto del botón.
		*/
		function(e){ 
			$('#popup-oculto').slideDown();
			$(this).html('<div style="clear:both;padding-top:15px;"></div><div class="popup-cerrado-cruz"><i class="fa fa-times"></i></div>');
			e.preventDefault();
		},
	 
		/* 
			Segundo click.
			Función que oculta el panel y vuelve a cambiar el texto del botón.
		*/
		function(e){ 
			$('#popup-oculto').slideUp();
			$(this).html('<div class="popup-cerrado"><i class="fab fa-whatsapp"></i> ¿Cómo puedo ayudarte?</div>');
			e.preventDefault();
		}
 
	);
 
	// Timeout para lanzar automáticamente el popup a los 20s
	setTimeout(
		function() {
			if($("#popup-oculto").is(":hidden")){
			document.getElementById("abrir-popup-oculto").click();
			}
	}, 20000);
	
});