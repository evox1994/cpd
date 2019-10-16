$(document).ready(function(){
	
	$(document).on('click','.b-5-list li',function(){
		location.href = $(this).attr('data-href');
	});

});