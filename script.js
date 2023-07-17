const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  speed: 3000
});

function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('.scroll-top').removeClass('DownMove');
		$('.scroll-top').addClass('UpMove');
	}else{
		if($('.scroll-top').hasClass('UpMove')){
			$('.scroll-top').removeClass('UpMove');
			$('.scroll-top').addClass('DownMove');
		}
	}
}

$(window).scroll(function () {
	PageTopAnime();
});

$(window).on('load', function () {
	PageTopAnime();
});

$('.scroll-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-70;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
});
