$('document').ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });
    /* 정지버튼 클릭 시 ( .visual .btn_wrap button.btn_stop )
        1. 팝업 정지
        2. 정지버튼 숨기고 재생버튼 나타남

        재생버튼 클릭 시 .visual .btn_wrap button.btn_play
        1. 팝업 다시 시작
        2. 재생버튼 숨기고 정지버튼 나타남 */

    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide() //숨김
        $('.visual .btn_wrap button.btn_play').show() //보임
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide() //숨김
        $('.visual .btn_wrap button.btn_stop').show() //보임
    })

    /* -- pc ver. --
        .biz .list ul li에게 마우스오버 시,
        마우스를 올린 li:class=on 추가
        마우스 아웃되어있는 나머지 li:class=off 추가 */
        $('.biz .list ul li').on('mouseenter', function(){
            // if($(window).widht() > 1024){
            //     $('.biz .list ul li').removeClass('on')
            //     $('.biz .list ul li').addClass('off')
            //     $(this).removeClass('off')
            //     $(this).addClass('on')
            // 
            // }
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').addClass('off')
            $(this).removeClass('off')
            $(this).addClass('on')
        })
        $('.biz .list').on('mouseleave', function(){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').removeClass('off')
        })
        const news_swiper = new Swiper('.news .swiper', { 
	slidesPerView: 'auto', 
        spaceBetween: 16, 
        breakpoints: {
            768: {    
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.news .btn_wrap .next',
            prevEl: '.news .btn_wrap .prev',
        },
        scrollbar: {
            el: ".news .swiper-scrollbar",
            hide: false,
            draggable: true,
          }
    });
})//document.ready