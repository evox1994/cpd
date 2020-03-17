$(document).ready(function(){

	$('.b-4-slider').slick();

	function linesSize(){
		setTimeout(function(){
			var i = 0;
			if ( $(window).width() > 768 ){
				$('.b-5-steps li').each(function(){
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
		linesSize();
	});

});