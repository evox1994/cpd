$(document).ready(function(){

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox').fancybox({loop: true});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.policy-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.policy-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

	function Placeholders(){
		var i = 0;

		$('.b-input').each(function(){
			i++;
			if ( $(this).find('input').length ){
				$(this).find('input').attr('id','inp-'+i);
			} else {
				$(this).find('textarea').attr('id','inp-'+i);
			}
			$(this).find('label').attr('for','inp-'+i);
		});
	}
	Placeholders();

	$('.b-input input').on('change',function(){
		if ( $(this).val().length ){
			$(this).parents('.b-input').find('label').addClass('active');
			if ($(this).attr('type') == 'tel'){$(this).addClass('active');}
		} else {
			$(this).parents('.b-input').find('label').removeClass('active');
			if ($(this).attr('type') == 'tel'){$(this).removeClass('active');}
		}
	});
	$('.b-input textarea').on('change',function(){
		if ( $(this).val().length ){
			$(this).parents('.b-input').find('label').addClass('active');
		} else {
			$(this).parents('.b-input').find('label').removeClass('active');
		}
	});

	function footerYear(){
		var d = new Date();
		var year = d.getFullYear();
		$('#year-text').text(year);
	}
	footerYear();

	function checkId(){
		var i = 0;
		$('.checkboxs input[type="checkbox"]').each(function(){
			i++;
			$(this).attr('id','checkbox-'+i);
			$(this).parents('li').find('label').attr('for','checkbox-'+i);
		});
	}
	checkId();

	function radioId(){
		var i = 0;
		$('.checkboxs input[type="radio"]').each(function(){
			i++;
			$(this).attr('id','radio-'+i);
			$(this).parents('li').find('label').attr('for','radio-'+i);
		});
	}
	radioId();

	$(document).on('click','.mobile-menu .drop span',function(){
		$(this).parents('.drop').toggleClass('active');
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top;
		$('body,html').animate({scrollTop: des},800);
		return false;
	});

	function Selects() {
		$('.select-wrap').each(function(){
			var text = $(this).find('select option:selected').text();
			$(this).find('select option').each(function(){
				$(this).parents('.select-wrap').find('.select-drop').append('<a href=".'+$(this).attr('class')+'">'+$(this).text()+'</a>');
			});
			//$(this).find('.select-area span').text(text);
		});
	}
	Selects();

	$(document).on('click','.select-area',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.select-drop').removeClass('active');
		} else {
			$('.select-area').removeClass('active');
			$('.select-drop').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.select-drop').addClass('active');
		}
	});
	$(document).on('click','.select-drop a',function(){
		var text = $(this).text();
		var opt = $(this).attr('href');

		$(this).parents('.select-wrap').find('.select-area span').text(text);
		$(this).parents('.select-wrap').find(opt).prop('selected','true').change();
		$(this).parents('.select-wrap').find('.select-drop').removeClass('active');
		$(this).parents('.select-wrap').find('.select-area').removeClass('active');
		return false;
	});
	$(document).on('click',function(e){
		var container = $('.select-wrap');
		if (container.has(e.target).length === 0) {
			$('.select-drop').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});

});