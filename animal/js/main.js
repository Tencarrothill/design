$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });//visual_swiper
    /*
        일시정지 버튼 클릭시,
        팝업은 일시정지, 일시정지 버튼 숨김처리
        재생 버튼 나타남

        재생 버튼 클릭시,
        팝업 재생됨
        재생 버튼 숨김처리
        일시정지 버튼 나타남
    */
   $('.visual .btn_wrap button.btn_pause').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
   })//btn_pause
   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_pause').show()
   })//btn_play

   /*  page가 scroll되면 header에 class=fixed를 추가
        다시 맨 위로 올라가면 header에 class=fixed를 삭제  */
    let scrolling

    function scroll_chk(){
        scrolling = (Window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }//function

    //문서가 처음 로딩되었을 때 1번 실행
    scroll_chk()

    $(Window).scroll(function(){
        //browser을 scroll할 때 마다 실행
        scroll_chk()
    })//window.scroll

})//document .ready