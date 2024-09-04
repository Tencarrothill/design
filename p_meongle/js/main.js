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
		
	});//reservation_swiper

	$('.guide .tab_menu button').on('click', function(){
		$('.guide .tab_menu button').removeClass('on')
		$(this).addClass('on')
	})
	$('.guide .tab_menu button.facile01').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile01').addClass('on')
	})
	$('.guide .tab_menu button.facile02').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile02').addClass('on')
	})
	$('.guide .tab_menu button.facile03').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile03').addClass('on')
	})
	$('.guide .tab_menu button.facile04').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile04').addClass('on')
	})
	$('.guide .tab_menu button.facile05').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile05').addClass('on')
	})
	$('.guide .tab_menu button.facile06').on('click', function(){
		$('.guide .tab_detail ul li').removeClass('on')
		$('.guide .tab_detail ul li.facile06').addClass('on')
	})//guide_button

	let happydog_top
	let window_h
	let scrolling

	function scroll_chk(){
		window_h = $(window).height()
		scrolling = $(window).scrollTop()
		happydog_top = $('.happydog').offset().top
		if(scrolling > (happydog_top - window_h + (window_h/3))){
			$('.happydog').addClass('active')
		}else{
			$('.happydog').removeClass('active')
		}
	}
	scroll_chk() //browser loading 완료 후 1번
    $(window).scroll(function(){ //browser가 스크롤 될 때 마다
        scroll_chk()
    })
    $(window).resize(function(){ //browser가 리사이즈 될 때 마다
        scroll_chk()
    })
	
	

	let object_item = $('.video_wrap ul li'); /* 좌우로 배치되는 요소 */
	let object_wrap = $('.happydog'); /* 좌우로 배치되는 요소를 감싸는 요소 */
	gsap.registerPlugin(ScrollTrigger);
	gsap.fromTo(
	object_item,
	{
		x: () => window.innerWidth + 100, 
	},
	{
		x: function(index){
			return index * (object_item.width() / 1.8) /* 오른쪽에서 나타난 이후의 위치 (현재 li넓이의 절반이 겹치게 되어 있음) */
		},
		stagger: 0.5,
		scrollTrigger: {
		pin: object_wrap,
		markers: false,
		scrub: true,
		start: "center center ",   /* 좌우로 스크롤 되는 동안 object_wrap의 위치 */
		end: "+=1000",      /* 다음 요소가 나타나는데 걸리는 시간 (애니메이션 시간) */
		invalidateOnRefresh: true
		}
	}
	);//scrollTrigger

	const review_swiper = new Swiper('.review .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			1024: {  /* 1024px 이상이 되면 적용 */
				spaceBetween: 24,
			},
		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		
		
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		
		
	});


})//document