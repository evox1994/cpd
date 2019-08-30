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
					slidesToShow: 3
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

	function textureSize(){
		var w = $('.texture').parents('.image').find('img').width()*(196/213);
		var h = $('.texture').parents('.image').find('img').height()*(265/440);
		$('.texture').height(h);
		$('.texture').width(w);
	}
	textureSize();

	$(window).resize(function(){
		textureSize();
	});

});