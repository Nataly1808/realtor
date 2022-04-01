$(document).ready(function () {
	$('.aboutme__column').on('click', function () {
		$('.aboutme__column').removeClass('active')
		$(this).addClass('active');
	})
	$('.sale__column').on('click', function () {
		$('.sale__column').removeClass('active-sale')
		$(this).addClass('active-sale');
	})
	$('.video__play').on('click', function () {
		$(this).hide();
		$('.ytvideo').attr('src', 'https://www.youtube.com/embed/0mTGE4fHEKc?autoplay=1')
	})

	$('.slider__video').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__image'
	 });
	 $('.slider__image').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider__video',
		dots: false,
		arrows: true,
		focusOnSelect: true
	 });

	$('.slider__img').on('click', function () {
		$('.slider__img').removeClass('active-img')
		$(this).addClass('active-img');
	});

	});

	
	 $('.open-popup').click(function(e) {
		e.preventDefault();
		$('.popup').fadeIn(600);
		$('html').addClass('no-scroll');
  });
  
  $('.popup__close').click(function() {
		$('.popup').fadeOut(600);
		$('html').removeClass('no-scroll');
  });
	 
  $('.open-popup-two').click(function(e) {
	e.preventDefault();
	$('.popup').fadeOut(600);
	$('.popup-two').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.popup__close').click(function() {
	$('.popup-two').fadeOut(600);
	$('html').removeClass('no-scroll');
});

$(document).ready(function() {
	$('.header__menu-burger').click(function() {
		 $('.header__menu-burger').toggleClass('open-menu');
		 $('.header__menu').toggleClass('open-menu');
	});
});

$(document).ready(function() {
	$('.footer__menu-burger').click(function() {
		 $('.footer__menu-burger').toggleClass('open-menu');
		 $('.footer__menu').toggleClass('open-menu');
	});
});



