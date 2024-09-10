$('document').ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

        navigation: true, /* 오른쪽에 각 페이지의 paging */
        navigationPosition: 'left', /* 위치 */
        navigationTooltips: ['Main', 'Museum Story', 'Notice & Webzine', 'Exhibition'], /* 툴팁 */
        showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
        
        lockAnchors: true,
        anchors: ['visual', 'story', 'notice', 'moreinfo'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

        autoScrolling:true, /* 한페이지씩 스크롤 */
        scrollHorizontally: true,

        verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
        
        scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

        afterLoad: function(origin, destination, direction, trigger){
            if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                console.log('3번째 슬라이드가 로딩 되었을때');
            }
        },

        responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
    });//fulpage

    let visual_top
    let visual_w
    let window_h
    let scrolling

    function scroll_chk(){
        visual_top = $('.visual').offset().top
        if(scrolling > (visual_top - window_h + (window_h/5))){
            visual_w = (scrolling - (visual_top - window_h))*1.2 + 400
            if(visual_w > $(window).width()){
                visual_w = $(window).width() //너비가 브라우저 너비를 초과하지 않도록
                $('.visual').addClass('end')
            }
            console.log(visual_w)
            $('.visual .photo_wrap .photo').width(visual_w)
        }
    }
    scroll_chk() //browser loading 완료 후 1번
    $(window).scroll(function(){ //browser가 스크롤 될 때 마다
        scroll_chk()
    })
    $(window).resize(function(){ //browser가 리사이즈 될 때 마다
        scroll_chk()
    })
})//document.ready