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
})//document.ready