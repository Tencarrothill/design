$('document').ready(function(){
    let boost_top
    let life_top
    let life_w
    let hanhwa_top
    let nature_top
    let paper_top
    let window_h
    let scrolling
    let nature_h2

    function scroll_chk(){
        window_h = $(window).height() //browser height
        scrolling = $(window).scrollTop()// scroll 된 값 
        boost_top = $('.boost').offset().top
        life_top = $('.life').offset().top
        hanhwa_top = $('.hanhwa').offset().top
        nature_top = $('.nature').offset().top
        paper_top = $('.paper').offset().top
        //console.log(widnw_h, scrolling, life_top)
        if(scrolling > (boost_top - window_h + (window_h/3))){
            $('.boost').addClass('active')
        }
        if(scrolling > (life_top - window_h + (window_h/5))){
            
            life_w = (scrolling - (life_top - window_h))*1.2 + 400
            if(life_w > $(window).width()){
                life_w = $(window).width() //너비가 브라우저 너비를 초과하지 않도록
                $('.life').addClass('end')
            }
            //console.log(life_w)
            $('.life .photo_wrap .photo').width(life_w)
        }
        if(scrolling > (hanhwa_top - window_h + (window_h/5))){
            $('body').addClass('bl_bg')
        }else{
            $('body').removeClass('bl_bg')
        }
        if(scrolling > (hanhwa_top - window_h + (window_h/2))){
            $('.hanhwa').addClass('active')
        }
        if(scrolling > (nature_top - window_h + (window_h/5))){
            $('.nature').addClass('active')
            nature_h2 = (scrolling - (nature_top - window_h))*0.07
            console.log(nature_h2)
            $('.nature h2').css('transform', 'translateY('+nature_h2+'%)')
            //transform: translateY(0);
        }
        if(scrolling > (paper_top - window_h + (window_h/3))){
            $('.paper').addClass('active')
        }
    }
    scroll_chk() //browser loading 완료 후 1번
    $(window).scroll(function(){ //browser가 스크롤 될 때 마다
        scroll_chk()
    })
    $(window).resize(function(){ //browser가 리사이즈 될 때 마다
        scroll_chk()
    })
})//document