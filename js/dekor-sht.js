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

	$(document).on('click','.swap-texture',function(){
		var src = $(this).attr('href');
		$(this).parents('.wrap').find('.texture').css('background-image','url("'+src+'")');
		return false;
	});

	function textureHeight(){
		$('.texture').css('height',$('.texture').outerWidth());
	}
	textureHeight();

	$(window).resize(function(){
		textureHeight();
	});

});