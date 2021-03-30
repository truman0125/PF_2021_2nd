// 스와이퍼 전역변수
let swiper;

$(function(){//// jQB ///////////////

    ///// 메인 슬라이더 : 스와이퍼 적용하기 //////
    // swiper변수를 전역변수로 만들고 페이지액션에서 사용!
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, //한 영역에 보여줄 슬라이드수
        spaceBetween: 0, //슬라이드 사이간격
        loop: true, //무한이동
        pagination: { // 하단 블릿표시
            el: '.swiper-pagination',
            clickable: true, //블릿클릭이동
        },
        navigation: { // 양쪽이동버튼
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 자동넘김을 미리셋팅하면 본 페이지 오기전부터
        // 이미 넘어가고 있다.... 그러므로 메서드를 사용해야함!
//        autoplay: { // 자동넘김
//            delay: 3000,//사이간격시간
//            disableOnInteraction: false,
//            //스와이프 상호작용후 다시자동넘김옵션
//            //(false가 기본값-상호작용후 사이간격시간
//            //있다가 다시 자동넘김작동함)
//        },
    }); //////// swiper ///////////////////////////
    
    // 처음에 스와이퍼 자동넘김 멈추기
    //swiper.autoplay.stop();




});//// jQB ////////////////////////////