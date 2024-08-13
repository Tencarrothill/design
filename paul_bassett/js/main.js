$('document').ready(function(){
    $('.visual_popup .popup').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        //fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    $('.menu .list .popup').slick({
        dots: false, //하단 페이지 버튼 (true, false)
	      arrows: false,  //다음, 이전팝업 (true, false)
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        /*
        slidesToShow: 6, //한번에 보일 팝업 수. 브라우저 사이즈가 줄어도 갯수가 절대 줄지 않음. 즉 li의 너비가 계속 준다는 말.
        responsive: [
            {
              breakpoint: 1300, //1300px 이하
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1
              }
            },
        ]
        */
        variableWidth: true, //넓이를 자유롭게 설정
        autoplay: true, //팝업 자동 실행
	      autoplaySpeed: 3000, //팝업이 머무는 시간
    })

    $('.md .list .popup').slick({
      dots: false, //하단 페이지 버튼 (true, false)
	    arrows: false,  //다음, 이전팝업 (true, false)
      swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
      variableWidth: true, //넓이를 자유롭게 설정
    })
    $('.sns .popup').slick({
      dots: false, //하단 페이지 버튼 (true, false)
	    arrows: false,  //다음, 이전팝업 (true, false)
      swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
      variableWidth: true, //넓이를 자유롭게 설정
    })
    
}) //document