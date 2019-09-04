$(document).ready(function(){

	function fixScroll(){
		if ( $(window).width() > 768 ) {
			var vg = $('.b-1 .wrap').offset().top - 30;
			var ng = vg + $('.b-1 .wrap').outerHeight() - $('.fix-window').outerHeight();
			var st = $(window).scrollTop();

			if ( st > vg ) {
				if ( st > ng ) {
					$('.fix-window').removeClass('scroll');
					$('.fix-window').addClass('bottom');
				} else {
					$('.fix-window').addClass('scroll');
					$('.fix-window').removeClass('bottom');
				}
			} else {
				$('.fix-window').removeClass('scroll');
				$('.fix-window').removeClass('bottom');
			}
		} else {
			$('.fix-window').removeClass('scroll');
			$('.fix-window').removeClass('bottom');
		}
	}
	fixScroll();

	$(window).scroll(function(){
		fixScroll();
	});

});