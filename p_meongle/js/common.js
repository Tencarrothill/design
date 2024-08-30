$('documnet').ready(function(){
    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth2').on('mouseleave', function(){
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
    })// header에 마우스 오버

    let scrolling
    let scroll_top //header 고정 시작 값
    let window_w
    let mobile_size = 1024
    let pc_m

    function scroll_chk(){
        if(pc_m == 'pc'){
            scroll_top = 100
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > scroll_top){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //로딩완료 시 1번 실행
    $(window).scroll(function(){ //스크롤할 때 마다 1번 실행
        scroll_chk()
    })
    function reszie_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){
            pc_m = 'pc'
        }else{
            pc_m = 'm'
        }
        console.log(pc_m)
    }
    reszie_chk() // document 로딩완료 시 1번 실행
    $(window).resize(function(){
        reszie_chk()
    })//header fixed

    $('header .gnb .gnb_wrap ul.depth1>li>a').on('click', function(e){
        if(pc_m == 'm'){ //모바일에서만 적용
            e.preventDefault();
            $(this).parent().toggleClass('on')
        }
    })//모바일 메뉴 depth2 열고 닫기

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('m_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('m_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })// 모바일 메뉴 열기/닫기 버튼 작동
    
})//document