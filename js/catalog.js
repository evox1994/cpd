$(document).ready(function(){

	function checkId(){
		var i = 0;
		$('.filter input[type="checkbox"]').each(function(){
			i++;
			$(this).attr('id','checkbox-'+i);
			$(this).parents('li').find('label').attr('for','checkbox-'+i);
		});
	}
	checkId();

	$(document).on('click','.filter-btn',function(){
		var el = $(this).attr('href');
		$(el).addClass('active');
		$('body').addClass('no-scroll');
		return false;
	});

	$(document).on('click','.filter-close',function(){
		var el = $(this).attr('href');
		$(el).removeClass('active');
		$('body').removeClass('no-scroll');
		return false;
	});

	$(document).on('click','.filter button[type="submit"]',function(){
		$(this).parents('.filter').removeClass('active');
		$('body').removeClass('no-scroll');
		return false;
	});

});