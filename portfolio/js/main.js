$('document').ready(function(){
	const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */
		loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		mousewheel: true,
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 0,
		on: {
			slideChange: function(){
				$('header ul li').removeClass('on')
				$('header ul li').eq(this.realIndex).addClass('on')
			}
		}
	});

	
	$('header ul li').on('click', function(){
		//console.log($(this).index())
		swiper.slideTo($(this).index())
		$('header ul li').removeClass('on')
		$(this).addClass('on')
	})


	$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		$('.cursor').css('left', e.pageX + 'px');
		$('.cursor').css('top', e.pageY + 'px');
	});
	$('.pj02 .pj02_wrap .photo a').hover(function(){ /* a에 마우스를 올렸을때만 on 클래스 주기 */
		$('.cursor').toggleClass('on');
	});
	$('.pj01 .pj01_wrap .photo a').hover(function(){ /* a에 마우스를 올렸을때만 on 클래스 주기 */
		$('.cursor').toggleClass('on');	
	});
	

})//ducoment.ready