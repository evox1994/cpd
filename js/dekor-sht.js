$(document).ready(function(){

	$('.back-slider').slick({
		arrows: false,
		autoplay: true,
		speed: 1000
	});

	$('.slider-desktop').slick({
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
		setTimeout(function(){
			var w = $('.texture').parents('.image').find('img').width()*(164/176);
			var h = $('.texture').parents('.image').find('img').height()*(220/364);
			$('.texture').height(h);
			$('.texture').width(w);
		},100);
	}
	textureSize();

	$(window).resize(function(){
		textureSize();
	});

});