$(document).ready(function(){
    /*
        header .gnb .gnb_wrap ul.depth1>li 에 마우스 오버 시,
        1. header 에 class:menu_over 부여
        2. 오버한 gnb의 li에 class:on 부여

        -- 메뉴에서 오버는 디테일 아웃은 헤더
    */
   $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        $(this).addClass('on')
   })
   $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
   })
   /* depth1 li 중 마지막 li의 depth2 li 중 마지막 li */
   $('header .gnb .gnb_wrap ul.depth1>li:last-child ul.depth2>li:last-child').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
    })
})