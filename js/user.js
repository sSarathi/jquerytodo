$(function(){
	$('#submit_btn').on('click',function(e){
				var text= $('#submit_txt').val();
				$('#todolist1').append('<li><input type="checkbox"/ class="done">'+text+'<button id="delete">delete</button></li>');
			 	$("#submit_txt").val('');
			     

	});

	$(document).on('click','#delete',function(){
		$(this).parent().remove();
	});

	$(document).on('click','.done',function(){
		if($(this).parent().css('textDecoration')=='line-through'){
			$(this).parent().css('textDecoration','none');

		}
		else{
			$(this).parent().css('textDecoration','line-through');	
		}


	});

});





