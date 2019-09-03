$(document).ready(function(){

	$(document).on('click','.b-4-list .swap',function(){
		var price = $(this).attr('data-price');
		var left = $(this).position().left;
		$(this).parents('.swaps').find('.swap').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.swaps').find('.fon').css('left',left);
		$(this).parents('li').find('.price span').text(price);
	});

	$(document).on('click','.colors-list li',function(){
		var btn = $(this).attr('data-href');
		var popup = $(btn).attr('href');
		var name = $(this).find('span').text();
		var text = $(this).attr('data-desc');
		var color = $(this).attr('data-color');
		$(popup).find('.name').text(name);
		$(popup).find('p').text(text);
		$(popup).find('.image').css('background-color',color);
		$(btn).click();
	});

	$(document).on('click','.btn-color',function(){
		var btn = $(this).attr('href');
		var popup = $(btn).attr('href');
		$.fancybox.close();
		$(btn).click();
		return false;
	});

});