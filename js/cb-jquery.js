$(function() {
	var topBtn = $('.page-top');
	var aboutBtn = $('.g02');	
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

 aboutBtn.click(function () {
		$('body,html').animate({
			scrollTop: $("#about").offset().top
		}, 500);
		return false;
    });

    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
    
   });