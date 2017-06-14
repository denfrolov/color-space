;
(function ( $, window, document, undefined ) {
	$('.onas .parallax-window').parallax({imageSrc: 'img/parallax1.jpg'});
	$('.uslugi .parallax-window').parallax({imageSrc: 'img/parallax2.jpg'});
	$('.kontakty .parallax-window').parallax({imageSrc: 'img/parallax3.jpg'});

	$(document).ready(function(){
	$(".navbar-nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-15}, 500);
	});
});

}(jQuery, window, document));