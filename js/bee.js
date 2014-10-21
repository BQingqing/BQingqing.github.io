$(document).ready(function(){
	var setHeight = function(){
		 	var win_height = $(window).height();
			$('#home-second').css('height', win_height);
	}

	setHeight();
	$(window).resize(function(){
		setHeight();
	});
});
