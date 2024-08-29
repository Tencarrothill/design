$('documnet').ready(function(){
    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth2').on('mouseleave', function(){
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
    })// header에 마우스 오버

})//document