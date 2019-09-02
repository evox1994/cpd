$(document).ready(function(){

	$('.b-3-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true
				}
			}
		]
	});

	$('.b-4-slider').slick({
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

	$('.slider-desktop').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive:[
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

	function maxHeight(el){
		var maxH = 0;
		$(el).each(function(){
			if ( $(this).outerHeight() > maxH ){
				maxH = $(this).outerHeight();
			}
		});
		return maxH;
	}

	function alignItems(el){
		setTimeout(function(){
			$(el).css('height','auto');
			var maxH = maxHeight(el);
			if ( $(window).width() > 768 ){
				$(el).each(function(){
					if ( $(this).outerHeight() < maxH ){
						$(this).css('height',maxH);
					}
				});
			}
		},100);
	}
	alignItems('.b-3-slide .text');

	$(window).resize(function(){
		alignItems('.b-3-slide .text');
	});

});