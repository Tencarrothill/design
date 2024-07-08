$(document).ready(function(){
    /*
        1025이상 pc
        1024이하 mobile
    */
   let pc_mobile //현재가 pc or mobile 상태를 저장하는 변수
   let window_w //browser width

   function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //1024초과 - pc ver.
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }//if
        console.log(pc_mobile)
   }//function

   resize_chk() //html이 로딩된 이후 단 1번 실행
   $(window).resize(function(){ //browser가 resize 될 때 마다
        resize_chk()
   })

   /* pc ver.에서 menu hover 시,
   1. header에 class:menu_over 부여
        오버한 li(header .gnb .gnb_wrap ul.depth1>li)에 class:on 부여 */
    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter focusin', function(){
        /* pc ver. 일 때만 작동되어야 함.
            on은 이벤트 핸들러(감시)임. pc에서만 작동되게 할 수 없음. 무조건 작동됨.
            따라서, 이벤트가 발생했을 때 작동되는 실행문에 if문을 걸어서 pc일 때만 실행되도록 해줘야 함. */
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
            $(this).addClass('on')
        }//if
    })//on
    $('header').on('mouseleave', function(){        
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        }//if
    })//on
    $('header .gnb .gnb_wrap ul.depth1>li:last-child>ul.depth2>li:last-child').on('focusout', function(){
        /* depth1의 li 중 마지막 li의 depth2의 li 중 마지막 li */
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        }//if
    })
})