$('document').ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {
		autoplay: {
			delay: 40000,
			disableOnInteraction: true,
		},
		loop: true,
		pagination: {
			el: '.visual .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
	});
	$('.visual .btn_wrap .pause').on('click', function(){
		visual_swiper.autoplay.stop();  /* 일시정지 기능 */
		$(this).hide()
		$('.visual .btn_wrap .play').show()
	})
	$('.visual .btn_wrap .play').on('click', function(){
		visual_swiper.autoplay.start();  /* 일시정지 기능 */
		$(this).hide()
		$('.visual .btn_wrap .pause').show()
	})

})//document