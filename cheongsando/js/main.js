/* 무조건 js는 document.ready을 써주어야 함.*/
$(document).ready(function(){ //html을 다 불러오고 나면 적용해라

    console.log('test')

    let scrolling = $(window).scrollTop() //let 변수 선언. 윈도우에 스크롤값을 부여. (대입연산자)

    //문서가 로딩된 이후 단 1번만 실행됨.
    console.log(scrolling)

    /* 브라우저가 스크롤이 조금이라도 되면, header에 class:fixed을 추가하고
     맨 위로 올라가면, class:fixed를 삭제 할 것임.(if, else문)  */

    function scroll_chk(){ //함수 선언(출생신고)
        //scrolling이라는 변수에 현재 스크롤 된 값을 저장.
        scrolling = $(window).scrollTop()
        if(scrolling > 0){//조금이라도 스크롤다운을 했다면
            $('header').addClass('fixed')
        }else{ //맨 위로 갔다면
            $('header').removeClass('fixed')
        }
    }//function scroll_chk

    scroll_chk() //함수 호출
    
    //브라우저가 스크롤을 할 때 마다 실행됨.
    $(window).scroll(function(){
        scroll_chk()
    })

    /*
    .tour .list ul li 한테 over한 li에만 clas:active 주고,
    이전에 active을 가지고 있던 li에게는 class:active 삭제.
    --- 무조건 1개의 li에게만 clas:active가 부여되야 함.
    
    --> 이전에 오버한 li는 알기 어려움(안되는 건 아님).
    -- 모든 li에 있는 class:active 싹 다 삭제 후,
    오버한li에게만 다시 class:active 추가
    */
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        //수많은 li 중 over한 li 한 개를 뜻함.
        $(this).addClass('active')
    })

    /*
        footer .familysite button.btn_open을 클릭하면
        footer .familysite에 class:open을 줘야함.
        footer .familysite button.btn_close을 클릭하면
        footer .familysite에 clas:open을 삭제할 것임. 
    */
   $('footer .familysite button.btn_open').on('click', function(){
        $('footer .familysite').addClass('open')
        $('footer .familysite .list').slideDown()
   })
   $('footer .familysite button.btn_close').on('click', function(){
        $('footer .familysite').removeClass('open')
        $('footer .familysite .list').slideUp()
    })

})//$(document).ready