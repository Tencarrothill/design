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
    })
})//document