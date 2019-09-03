$(document).ready(function(){

	$('.b-3-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 550,
				settings: {
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});

});