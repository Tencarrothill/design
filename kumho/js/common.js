/* header, footer와 같이 공통요소에 들어가는 jquery가 포함 */
$('document').ready(function(){ 
    /* header에 마우스오버 하거나, 브라우저가 스크롤되면 header:class=fixed
        --> pc/mobile 상관없이 언제나 구현
    
        header .gnb .gnb_wrap ul.depth1>li
        메뉴에 마우스오버 하면,
        1. header:class=menu_over 추가
        2. 마우스오버한 li:class=on 추가
        --> pc에서만 구현 */
    let win_w
    let pc_mobile

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    } //function resize_chk

    /* browser가 로딩되었을 때 단 한 번 실행 */
    resize_chk()

    $(window).resize(function(){ //browser가 resize 할 때 마다 한 번 실행.
        resize_chk()
    }) //$(window).resize

    $('header').on('mouseenter', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        /* 마우스 아웃 시 class=fixed 삭제는 header가 맨 상단에 있을 때만 해야함. */
        if(scrolling <= 0){
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
        console.log(scrolling)
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter', function(){
        // = 대입 연산자(넣어라), == 비교 연산자(같다)
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        // = 대입 연산자(넣어라), == 비교 연산자(같다)
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        }
    })

    /* mobile menu 클릭시
        1. a 링크값 삭제 (이동 못하게 막아야 함)
        2. li:class=open 추가 -> open 있으면 추가 없으면 삭제 --> 한 번 클릭시 열림, 두 번 클릭시 닫힘 */
    $('header .gnb .gnb_wrap ul.depth1>li>a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault(); /* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });

    /* header .gnb .gnb_open
        메뉴열기 클릭시 header:class=menu_open 추가
        메뉴닫기 클릭시 header:class=menu_open 삭제
        header .gnb .gnb_close */
        $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_open')
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        })
        $('header .gnb .gnb_close').on('click', function(){
            $('header').removeClass('menu_open')
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        })

    /* footer .family_site button.family_open 클릭 시,
        1. .family_site:class=open 부여
        2. .family_site ul 도 열어줌

        footer .family_site button.family_close 클릭 시,
        1. .family_site:class=open 삭제
        2. .family_site ul 닫기 */

    $('footer .family_site button.family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site ul').slideDown()
    })
    $('footer .family_site button.family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site ul').slideUp()
    })
}) //document.ready