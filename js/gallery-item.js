$(document).ready(function(){

	function fancyGal(){
		var i = 0;
		$('.b-4 .item').each(function(){
			i++;
			$(this).find('.fancybox').attr('data-fancybox','item-'+i);
		});
	}
	fancyGal();

	$(document).on('click','.example-list li',function(){
		location.href = $(this).attr('data-href');
	});

});