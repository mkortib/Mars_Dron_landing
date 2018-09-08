$(function() {

	$('.hamburger').click(function() {
		// $(this).toggleClass('is-active');
		$(this).fadeOut();
		$('.hidden_menu').fadeIn();
		// $('.hidden_menu').fadeIn();
	});

	$('.close').click(function() {
		$('.hidden_menu').fadeOut();
		$('.hamburger').fadeIn();
	})

	AOS.init({
		duration: 1500
	});

});

