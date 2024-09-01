$('document').ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {
		autoplay: {
			delay: 4000,
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
	})//visual_swiper

	const reservation_swiper = new Swiper('.reservation .swiper', {
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			881: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 34, 
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		scrollbar: {
            el: ".reservation .swiper-scrollbar",
            hide: false,
            draggable: true,
          }
		
	});

})//document