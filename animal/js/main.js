$(document).ready(function(){

    /* browser 너비가 1024이하면 모바일, 이상이면 pc. */
    let pc_mobile // 현재 상태가 pc인지 mobile인지를 저장
    let window_w // browser 너비 저장

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ /* 1024보다 크면 - pc면 */
            pc_mobile = 'pc'
        }else{ /* mobile이면 */
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    // 처음 로딩 됐을 때 실행
    resize_chk()
    // 브라우저가 리사이즈 될 때 마다 실행
    $(window).resize(function(){
        resize_chk()
    })



    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });//visual_swiper
    /*
        일시정지 버튼 클릭시,
        팝업은 일시정지, 일시정지 버튼 숨김처리
        재생 버튼 나타남

        재생 버튼 클릭시,
        팝업 재생됨
        재생 버튼 숨김처리
        일시정지 버튼 나타남
    */
   $('.visual .btn_wrap button.btn_pause').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
   })//btn_pause
   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_pause').show()
   })//btn_play

   /*  page가 scroll되면 header에 class=fixed를 추가
        다시 맨 위로 올라가면 header에 class=fixed를 삭제  */
    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }//function

    //문서가 처음 로딩되었을 때 1번 실행
    scroll_chk()

    $(window).scroll(function(){
        //browser을 scroll할 때 마다 실행
        scroll_chk()
    })//window.scroll

    /* 메뉴(header .gnb .gnb_wrap ul.depth1>li)에 마우스를 올리면,
    header에 class:menu_over 추가.
    마우스 오버된 li에만 class:on 추가.
    
    -> 다른 li(메뉴)에 마우스 오버하면, 이전에 오버했던 메뉴의 class:on 삭제.
    -> header에서 마우스아웃 되면 class:menu_over 삭제. (이전에 오버했던 메뉴를 알기 어려움)
        -> 모든 메뉴의 class:on을 삭제했다가 오버한 내 것만 class:on 추가
        모든 메뉴에서 class:on 삭제 */

    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc ver. 일 때만 실행하겠다
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
            $(this).addClass('on') /* 마우스 오버한 li 당사자. 나 자신 */
        }// if
            
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){ //pc ver. 일 때만 실행하겠다
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        } // if
    })

    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile ver. 일 때만 실행하겠다
            $('header').addClass('mobile_open')
        }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile ver. 일 때만 실행하겠다
            $('header').removeClass('mobile_open')
        }
    })

})//document .ready