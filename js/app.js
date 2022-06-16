document.addEventListener("DOMContentLoaded", function() {


	// Custom JS
//<========================================== ВИПАДАШКИ В ГОЛОВНОМУ МЕНЮ ========================================>\\

$('.header__nav_item.click > span').on('click', function () {

	$(this).parent().find('.sub-item').slideToggle();
})

$('.sub-item a').on('click', function () {

	$(this).parent('.sub-item').slideUp();
})

//<=========================================== МОБІЛЬНА МЕНЮШКА =================================================>\\

$('.header__menu-buttons_open').on('click', function () {

	$('.menu').slideDown();
	$(this).removeClass('active')
	$('.header__menu-buttons_close').addClass('active');
})

$('.header__menu-buttons_close').on('click', function () {

	$('.menu').slideUp();
	$(this).removeClass('active')
	$('.header__menu-buttons_open').addClass('active');
})

$('.menu__nav_click-mobile span').on('click', function () {

	$(this).toggleClass('active');
	$(this).next('.sub-item-mobile').toggleClass('active')
})

$('.sub-item-mobile a').on('click', function () {

	$(this).parent('.sub-item-mobile').removeClass('active');
	$(this).parents('.menu__nav_click-mobile').find('span').removeClass('active');
})

//<================================================ СКРОЛЛ ХЕДЕРА ===============================================>\\

$(document).scroll(function() {

	var scrollDistance = $('.header').height();
	var scrollTop = $(window).scrollTop();

	if (scrollTop > scrollDistance) {
		$('.header-scroll').not('.error .header-scroll').slideDown(200);
	} else {
		$('.header-scroll').not('.error .header-scroll').slideUp(200);
	}
});

//<================================================= BOOK-ONLINE ===============================================>\\

$('.book-online__close').on('click', function () {

	$('.book-online').toggleClass('active');
	$('.popup-overlay').toggleClass('opened');
	$('body').toggleClass('lock');
	$(this).toggleClass('close')

	if ($(this).hasClass('close')) {
		$(this).text('close')
	} else {
		$(this).text('book online')
	}
})

//<========================================== СЛАЙДЕРИ НА ГОЛОВНІЙ ==============================================>\\

$('.awards__slider').slick({

	prevArrow: $('.prev-arrow'),
	nextArrow: $('.next-arrow'),
	infinite: false,
	centerMode: true,
	variableWidth: true,
	initialSlide: 3,
});

$('.next-arrow').on('click', function () {

	if ($(window).width() > 900) {

		if ($('.awards__slider_slide.dt-end').parents('.slick-slide').hasClass('slick-current')) {
	
			$('.next-arrow').hide();
		}
	
		if ($('.awards__slider_slide.dt-start').parents('.slick-slide').not('.slick-current')) {
	
			$('.prev-arrow').show();
		}

	} else {

		if ($('.awards__slider_slide.mobile-end').parents('.slick-slide').hasClass('slick-current')) {
	
			$('.next-arrow').hide();
		}
	
		if ($('.awards__slider_slide.mobile-start').parents('.slick-slide').not('.slick-current')) {
	
			$('.prev-arrow').show();
		}
	}
})

$('.prev-arrow').on('click', function () {

	if ($(window).width() > 900) {

		if ($('.awards__slider_slide.dt-end').parents('.slick-slide').not('.slick-current')) {
	
			$('.next-arrow').show();
		}
	
		if ($('.awards__slider_slide.dt-start').parents('.slick-slide').hasClass('slick-current')) {
	
			$('.prev-arrow').hide();
		}
		
	} else {

		if ($('.awards__slider_slide.mobile-end').parents('.slick-slide').not('.slick-current')) {
	
			$('.next-arrow').show();
		}
	
		if ($('.awards__slider_slide.mobile-start').parents('.slick-slide').hasClass('slick-current')) {
	
			$('.prev-arrow').hide();
		}
	}
})

$('.instagram__slider').slick({

	prevArrow: $('.prev-button'),
	nextArrow: $('.next-button'),
	infinite: false,
	centerMode: true,
	variableWidth: true,
	initialSlide: 3,
});

$('.next-button').on('click', function () {

	if ($(window).width() > 900) {

		if ($('.instagram__slider_slide.dt-end').parents('.slick-slide').hasClass('slick-current')) {

			$('.next-button').hide();
		}

		if ($('.instagram__slider_slide.dt-start').parents('.slick-slide').not('.slick-current')) {

			$('.prev-button').show();
		}

	} else {

		if ($('.instagram__slider_slide.mobile-end').parents('.slick-slide').hasClass('slick-current')) {

			$('.next-button').hide();
		}

		if ($('.instagram__slider_slide.mobile-start').parents('.slick-slide').not('.slick-current')) {

			$('.prev-button').show();
		}
	}
})

$('.prev-button').on('click', function () {

	if ($(window).width() > 900) {

		if ($('.instagram__slider_slide.dt-end').parents('.slick-slide').not('.slick-current')) {

			$('.next-button').show();
		}

		if ($('.instagram__slider_slide.dt-start').parents('.slick-slide').hasClass('slick-current')) {

			$('.prev-button').hide();
		}

	} else {

		if ($('.instagram__slider_slide.mobile-end').parents('.slick-slide').not('.slick-current')) {

			$('.next-button').show();
		}

		if ($('.instagram__slider_slide.mobile-start').parents('.slick-slide').hasClass('slick-current')) {

			$('.prev-button').hide();
		}
	}
})

});
//<================================================ ФІЛЬТР ТОВАРУ ===============================================>\\

$('.content__filter').on('click', function () {

	$('.filter').addClass('active');
	$('.popup-overlay').addClass('opened');
	$('body').addClass('lock');
})

$('.filter__basket_close').on('click', function () {

	$('.filter').removeClass('active');
	$('.popup-overlay').removeClass('opened');
	$('body').removeClass('lock');
})
//<======================================== ПЕРЕМИКАННЯ СТОРІНОК ТОВАРІВ ========================================>\\

$('.next-btn').on('click', function () {

	$('.content__page.active').removeClass('active').next('.content__page').addClass('active');
	$('.item-page.active').removeClass('active').next('.item-page').addClass('active');
	$('html').animate({scrollTop: $('body').offset().top }, 500);

	if ($('.item-page.last').hasClass('active')) {
		$('.next-btn').addClass('lock');
	}

	if ($('.prew-btn').hasClass('lock')) {
		$('.prew-btn').removeClass('lock');
	}
})

$('.prew-btn').on('click', function () {

	$('.content__page.active').removeClass('active').prev('.content__page').addClass('active');
	$('.item-page.active').removeClass('active').prev('.item-page').addClass('active');
	$('html').animate({scrollTop: $('body').offset().top }, 500);

	if ($('.item-page.first').hasClass('active')) {
		$('.prew-btn').addClass('lock');
	}

	if ($('.next-btn').hasClass('lock')) {
		$('.next-btn').removeClass('lock');
	}
})

for(let i = 1; i <= $('.content__page').length; i++) {

	$('.item-page.page_'+i).on('click', function () {
	
		$('.item-page').removeClass('active');
		$(this).addClass('active');

		$('.content__page').removeClass('active');
		$('.content__page.page_'+i).addClass('active');
		$('html').animate({scrollTop: $('body').offset().top }, 500);
	})
}

$('.item-page').on('click', function () {

	if ($(this).hasClass('last')) {

		$('.next-btn').addClass('lock');
		$('.prew-btn').removeClass('lock');

	} else {

		$('.next-btn').removeClass('lock');
	}

	if ($(this).hasClass('first')) {

		$('.prew-btn').addClass('lock');
		$('.next-btn').removeClass('lock');

	} else {

		$('.prew-btn').removeClass('lock');
	}
})