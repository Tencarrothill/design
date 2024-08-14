$('document').ready(function(){
    /*
        현재 pc ver. or m ver. 인지를 알아야 함...
        1024 이하는 m ver. 초과는 pc ver.

        header .header_sub .gnb .gnb_wrap ul.depth1>li
        pc ver. 에서 메뉴 마우스 오버 시,
        1. header class="menu_over" 추가
        2. depth1 li class="over" 추가

        브라우저에서 스크롤 다운 시, header class="fixed" 추가
        그리고 브라우저의 맨 위에 닿을 시, 클래스 삭제
    */
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
    })

    scroll_chk() //로딩완료 시 1번 실행
    $(window).scroll(function(){ //스크롤할 때 마다 1번 실행
        scroll_chk()
    })

    $('header .header_sub .gnb .gnb_wrap ul.depth1>li').on('mouseenter focusin', function(){
        if(pc_m == 'pc'){
            $('header').addClass('menu_over')
            $('header .header_sub .gnb .gnb_wrap ul.depth1>li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1>li').removeClass('on')
    })
    $('header .header_sub .gnb .gnb_wrap ul.depth1>li:last-child ul.depth2>li:last-child').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1>li').removeClass('on')
    })

    /* 
        모바일 메뉴
        header .header_sub .gnb .gnb_wrap ul.depth1>li>a 을 클릭했을 때
        1차 메뉴 a의 href값을 무력화 (즉, 클릭해도 해당 페이지 이동을 막음)
        li:class="open" 추가하고, 열린 메뉴 클릭 시 닫히고, 닫힌 메뉴 클릭시 열리게 해야함. (동시에 여러 개의 메뉴가 열릴 수 있음)
    */ 
    $('header .header_sub .gnb .gnb_wrap ul.depth1>li>a').on('click', function(e){
        if(pc_m == 'm'){ //모바일에서만 적용
            e.preventDefault();
            $(this).parent().toggleClass('open')
        }
    })

    $('header .header_sub .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    //하단콘텐츠 스크롤 금지

    $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    //해제
    $('header .header_sub .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    $('.quick .open').on('click', function(){
        $('.quick').addClass('open')
    })
    $('.quick .close').on('click', function(){
        $('.quick').removeClass('open')
    })

    $('.quick .top').on('click', function(){
        $("html, body").animate({
            scrollTop : 0
          }, 500);
    })
    
})//document.ready