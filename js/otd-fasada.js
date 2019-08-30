$(document).ready(function(){

	$('.back-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.b-6-slider').slick({
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

	function linesSize(){
		setTimeout(function(){
			var i = 0;
			if ( $(window).width() > 768 ){
				$('.b-10-steps li').each(function(){
					i++;
					if (i < 3){
						var w = $(this).next().find('.icon').offset().left - $(this).find('.icon').offset().left - 120;
						$(this).find('.line').width(w);
					}
				});
			}
		},100);
	}
	linesSize();

	$(window).resize(function(){
		alignItems();
		linesSize();
	});

});