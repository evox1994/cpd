$(document).ready(function(){

	$('.back-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.slider-desktop').slick({
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.slider-mobile').smoothDivScroll({
		hotSpotScrolling: false,
		touchScrolling: true
	});

});