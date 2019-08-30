$(document).ready(function(){

	$('.b-1-slider').slick({
		dots: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$('.catalog-desktop').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.catalog-mobile').smoothDivScroll({
		hotSpotScrolling: false,
		touchScrolling: true
	});

	$(document).on('click','.example-list li',function(){
		location.href = $(this).attr('href');
	});

});