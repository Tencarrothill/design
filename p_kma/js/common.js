$('document').ready(function(){
    let window_w
    let mobile_size = 880
    let pc_m

    function reszie_chk(){
        window_w = $(window).width()
        //console.log(window_w)
        if(window_w > mobile_size){
            pc_m = 'pc'
        }else{
            pc_m = 'm'
        }
        //console.log(pc_m)
    }
    reszie_chk() // document 로딩완료 시 1번 실행
    $(window).resize(function(){
        reszie_chk()
    })//header fixed

    $('header .logo_box .gnb .gnb_wrap .depth1>li').on('mouseenter focusin', function(){
        if(pc_m == 'pc'){
            $('header .logo_box .gnb .gnb_wrap .depth1>li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_m == 'pc'){
            $('header .logo_box .gnb .gnb_wrap .depth1>li').removeClass('on')
        }
    })

    setTimeout(function(){
        $('header').addClass('dark')
    }, 2400)

    $('.quick_menu .quick_open').on('click', function(){
        $('.quick_menu').addClass('open')
    })
    $('.quick_menu .quick_close').on('click', function(){
        $('.quick_menu').removeClass('open')
    })
    $('.quick_menu .quick_wrap ul li.newsletter a').on('mouseenter', function(){
        $('.quick_menu .quick_wrap ul li.newsletter p').show()
    })
    $('.quick_menu .quick_wrap ul li.newsletter a').on('mouseleave', function(){
        $('.quick_menu .quick_wrap ul li.newsletter p').hide()
    })
    $('.quick_menu .top').on('click', function(){
        $("html, body").animate({
            scrollTop : 0
          }, 500);
    });

})//document.ready