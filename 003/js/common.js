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
            .fadeToggle(200);

            $(".gnb li").each((idx,ele)=>{
                $(ele).delay(100*idx).animate({top:"0",opacity:1})
            });
            
            if(!$(this).is("open")) $(".gnb li").attr("style","");    
        });
    });




    





})//////////JQB///////////////
