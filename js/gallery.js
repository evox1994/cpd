$(document).ready(function(){

	$(document).on('click','.example-list li',function(){
		location.href = $(this).attr('data-href');
	});

	$(document).on('click','.filter li',function(){
		var el = $(this).attr('data-filter');

		if ( !$(this).hasClass('active') ){
			$('.filter li').removeClass('active');
			$(this).addClass('active');
			if ( el == 'all' ){
				$('.example-list li').css('display','block');
				setTimeout(function(){
					$('.example-list li').addClass('active');
				},100);
			} else {
				$('.example-list li').removeClass('active');
				el = '.'+el;
				setTimeout(function(){
					$('.example-list li').css('display','none');
					$(el).css('display','block');
					setTimeout(function(){
						$(el).addClass('active');
					},100);
				},300);
			}
		}
	});

});