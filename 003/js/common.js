//common.js

$(()=>{
    $('#fullpage').fullpage({
        slidesNavigation: true,
        // responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false
    });

    $(function () {
        // 메뉴 버튼 꾸밈
        $(".bar").click(function () {
            $(this).toggleClass("open");
            $(".gnb")
            .toggleClass("show")
            .fadeToggle(200);
            
        });
    });





})//////////JQB///////////////
