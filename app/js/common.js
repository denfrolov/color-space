(function ($) {
    //Запуск параллакса
    $('.parallax-window').parallax({imageSrc: 'img/parallax1.jpg'});

    //Запуск карусели
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop: true,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
      });
  });

    //Фиксация верхнего меню при скролле
    $(document).ready(function() {
        var $menu = $(".navbar");
        var fn = 40;

        $(window).scroll(function() {
            if ($(this).scrollTop() > fn && $menu.hasClass("default")) {
                $menu.removeClass("default").addClass("fixed");
            } else if ($(this).scrollTop() <= fn && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        }); //scroll
    });

            // Magnific Popup - эффект увеличения картинок при клике
        $('a[href$="jpg"], a[href$="png"], a[href$="jpeg"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
})(jQuery);