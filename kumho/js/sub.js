$(document).ready(function(){

    /*
        1. tab button 클릭 시, class="active" 추가 (클릭한 li에만)
            .cts_history .tab_area .tab_btn ul li
        2. clikc한 li만 aria-selected="true" 나머지는 모두 "false"
        3. click한 li에서 aria-control값을 가져온 후, 하단 컨텐츠 중 같은 이름의 id을 가진 요소에만
            class="active" 추가
                .cts_history .tab_area .tab_cts div[role="tabpanel"]

            find라는 명령으로 id가 aria-selected값과 같은 요소를 찾아야 함. 
            하지만 find는 하위요소를 검색하는 기능임. 따라서 선택자가 tabpanel을 직접 선택하는게 아닌,
            그 부모 요소를 선택해서 하위요소를 검색하게 해야 함.
    */
    
    let tab_btn = $('.cts_history .tab_area .tab_btn ul li')
    let tab_name
    let tab_cts = $('.cts_history .tab_area .tab_cts div[role="tabpanel"]')
    let tab_cts_parent = $('.cts_history .tab_area .tab_cts')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')
        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#' + tab_name // id selector을 추가로 삽입
        console.log(tab_name)
        $('.cts_history .tab_area .tab_cts div[role="tabpanel"]')
        tab_cts.removeClass('active')
        tab_cts_parent.find(tab_name).addClass('active')
        
    })
}) //document.ready