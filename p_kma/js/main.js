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
            if(destination.index == 1){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                $('header').removeClass('dark')
                $('header').addClass('scd')
                //console.log('3번째 슬라이드가 로딩 되었을때');
            }
            if(destination.index == 0 ){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                
                $('header').removeClass('scd')
                //console.log('3번째 슬라이드가 로딩 되었을때');
            }
        },

        responsiveWidth: 1024 /* fullpage를 적용시키지 않을 모바일 사이즈 */
    });//fulpage

    //gsap.from(".visual .tit h2", {duration: 3, text: ""})

    const story_swiper = new Swiper('.story .swiper', {
        slidesPerView: "1", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 0, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: { 
            1025: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 0,
                slidesPerView: 3
            },
            881: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 0,
                slidesPerView: 3
            },
            581: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 0,
                slidesPerView: 2
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.story .list .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            
        },
    });//story_swiper

    const moreinfo_swiper = new Swiper('.moreinfo .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "2", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: { 
            1025: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 24,
                slidesPerView: 4
            },
            881: {
                spaceBetween: 24,
                slidesPerView: 4
            },
            581: {
                spaceBetween: 16,
                slidesPerView: 2
            },

        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.moreinfo .tab .tab_detail .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    }); //moreinfo_swiper

    $('.moreinfo .tab>ul>li').on('click', function(){
        $('.moreinfo .tab>ul>li').removeClass('on')
        $(this).addClass('on')
    })
    
    
})//document.ready