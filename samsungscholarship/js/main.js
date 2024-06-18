/* top button을 누르면 상단으로 스크롤 됨.
footer .top button -- 탑 버튼 선택자 */
$(document).ready(function(){
    $('footer .top button').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})
