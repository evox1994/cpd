$(document).ready(function(){

	function imgSize(){
		var w = $('.b-1 .image').outerWidth();
		$('.b-1 .image').css('height',w);
	}
	imgSize();

	$(window).resize(function(){
		imgSize();
	});

});