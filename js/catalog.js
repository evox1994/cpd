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

});