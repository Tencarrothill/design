$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_prev',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_next',  
        },
    });//visual_swiper

    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
            slidesPerView: "auto",
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//book_swiper

    /*
        스크롤을 내리면 header에 fixed 클래스를 추가할 것임
        스크롤이 맨 위에 있을 땐 fixed 클래스 삭제. 조금이라도 내려오면 fixed 클래스 부여.
        브라우저가 스크롤 된 정도를 체크하는 값 : $(window).scrollTop()
        맨 위 0 , 스크롤 내리면 상단부터 스크롤 한 만큼 출력.
        $(window).scrollTop()가 0이면 fixed을 삭제, 0보다 크면 fixed 부여.
     */
    $(window).scroll(function(){ //browser가 스크롤 될 때 마다 실행되는 명령.
        $(window).scrollTop()
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed')
            /* header에 class명fixed을 준다는 말 */
        }else{ //그 외 전부
            $('header').removeClass('fixed')
            /* header에 줬던 class명 fixed을 지운다는 말 */
        }//if
    })//scroll

    /*
    .interview .list ul li
    오버한 li에만 class:'on'을 주고 그 외 li와 이전에 오버상태였던 li는 class:'on' 삭제.
    --> 이전에 오버했던 li을 선택하는 명령이 없다. 때문에, 모든 li의 class:'on'을 다 삭제 후
    오버한 li에만 다시 class:'on' 부여.
    <ul>
        <li></li> -- when over, 이 li만 지칭하는 언어 $(this)
        <li></li>
        <li></li>
    </ul>
    */
   $('.interview .list ul li').on('mouseenter', function(){
    $('.interview .list ul li').removeClass('on')
    $(this).addClass('on')
   })

   const series_swiper = new Swiper('.series .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 4, //pc ver.
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//series swiper
})//document.ready