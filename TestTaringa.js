$(function(){
	
	var pasoWidth = $('.post').first().width() + 9;
	
	var postSeleccionadoIndex = 1;
	
	var imgSelected = 'BlueDot.png';
	var imgNotSelected = 'GrayDot.png';
	
	
	$("#post-container").draggable({
		axis: "x",
		
		drag: function(event) {
			// el explorer me obligo a calcular acá
			var postSeleccionadoIndex_new = - Math.round(($(this).offset().left - 10) / $(this).width() * $('.post').length);
			postSeleccionadoIndex_new += 1;
			
			postSeleccionadoIndex = postSeleccionadoIndex_new;
			//
		},
		stop: function(event) {
			// en chrome y mozilla funcionaría perfectamente poniendo todo en el evento stop
			selPost(postSeleccionadoIndex);
			$('#main-container').scrollLeft(0);
		}
	});
	
	
	$('#btn-prev').on('click', function(){
		
		postSeleccionadoIndex--;
		selPost(postSeleccionadoIndex);
	});
	
	$('#btn-next').on('click', function(){
		
		postSeleccionadoIndex++;
		selPost(postSeleccionadoIndex);
	});
	
	$("#nav-pager li").on('click', function(){
		
		selPost($(this).index());
	});
	
	
	
	
	var selPost = function(index){
	
		if(index < 0) index=0;
		if(index > $('.post').length - 1) index = $('.post').length - 1;
		
		// si sobra no jode ;)
		postSeleccionadoIndex = index;
		//
		
		
		
		
		$("#nav-pager img").attr("src", imgNotSelected);
		$("#nav-pager img:eq("+postSeleccionadoIndex+")").attr("src", imgSelected);
		
		
		var leftTarget = - pasoWidth * (index - 1);
		leftTarget += 18;
		
		
		$('#post-container').animate({
			left: leftTarget
		}, 200);
	};
	
	
	// inicializa ahi
	selPost(postSeleccionadoIndex);
	
	
})