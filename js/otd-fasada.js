$(document).ready(function(){

	$('.back-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.b-6-slider').slick({
		slidesToShow: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 550,
				settings: {
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});

	function maxH(el){
		var maxH = 0;
		$(el).each(function(){
			if ( $(this).height() > maxH ){
				maxH = $(this).height();
			}
		});
		return maxH;
	}

	function alignItems(){
		setTimeout(function(){
			var height = maxH('.b-4-list .text');
			if ( $(window).width() > 768 ){
				$('.b-4-list .text').each(function(){
					if ( $(this).height() < height ){
						$(this).parents('.wrap-bot').find('.b-btn').css('margin-top',25 + (height - $(this).height()));
					}
				});
			}
		},100);
	}
	alignItems();

	$(window).resize(function(){
		alignItems();
	});

});