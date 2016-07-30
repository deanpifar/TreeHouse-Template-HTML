var windowHeight;

windowHeight = $(window).outerHeight();

$(document).on('scroll', function() {

	if($(window).scrollTop() > $('.main__services').offset().top - windowHeight) {
		$('.main__services > p, .main__services h3').addClass('animate__fromtop');
		$('.main__services').children('div').eq(0).addClass('animate__fromleft');
		$('.main__services').children('div').eq(1).addClass('animate__frombottom');
		$('.main__services').children('div').eq(2).addClass('animate__fromright');
	}
	
	if($(window).scrollTop() > $('.main__relax').offset().top - windowHeight) {
		$('.main__relax__gear').addClass('animate__sizeleft');
	}
	
	if($(window).scrollTop() > $('.main__project').offset().top - windowHeight) {
		$('.main__project > p, .main__project h3').addClass('animate__fromtop');
		$('.main__project > div').addClass('animate__fromleft');
	}
	
	if($(window).scrollTop() > $('.main__values').offset().top - windowHeight) {
		$('.main__values > p, .main__values h3').addClass('animate__fromtop');
		$('.main__values > div').addClass('animate__frombottom');
	}
	
	if($(window).scrollTop() > $('.main__reviews').offset().top - windowHeight) {
		$('.main__reviews > p, .main__reviews h3').addClass('animate__fromtop');
		$('.main__values > div').addClass('animate__frombottom');
	}
	
	if($(window).scrollTop() > $('.main__reviews ul').children('li').eq(0).offset().top - windowHeight) {
		$('.main__reviews ul').children('li').eq(0).addClass('animate__fromleft');
	}
	
	if($(window).scrollTop() > $('.main__reviews ul').children('li').eq(1).offset().top - windowHeight) {
		$('.main__reviews ul').children('li').eq(1).addClass('animate__fromright');
	}
	
	if($(window).scrollTop() > $('.main__contact').offset().top - windowHeight) {
		$('.main__contact > *').addClass('animate__fromtop');
	}
	
});