$(function(){//// jQB ///////////////
     
    
    // 색상 선택 박스 테두리에 class 넣기
    // toggleClass를 사용!
    $(".pdc_color").click(function(e){
        e.preventDefault();
        // class 토글기능
        $(this).eq(0).addClass("on")
        .siblings().removeClass("on");
        // .on이 있으면 빼고 없으면 넣는다!
     
    
     });///////// click /////////////                           


     // 탭메뉴 디자인 변경 class 넣기
    // toggleClass를 사용!
    $(".tab-box a").click(function(e){
        e.preventDefault();

        // 1. 클릭된 요소의 순번 알아내기(li-a요소의 부모)
        // 왜 필요한가? 탭 컨텐츠때문에 같은 순서를 셋팅하기위해 필요!
        let idx = $(this).index();
        // $(this) - a요소 이므로 부모(parent)로 올라간다!
        console.log("순번:" + idx);


        // class 토글기능
        $(this).addClass("on")
        .siblings().removeClass("on");
        // .on이 있으면 빼고 없으면 넣는다!

        // class 토글기능
        $(".display").eq(idx).addClass("on")
        .siblings().removeClass("on");
        // .on이 있으면 빼고 없으면 넣는다!
     
    // 색상 선택 박스 테두리에 class 넣기    
     });///////// click /////////////    

    

                           
                           
                   
});//// jQB ////////////////////////////