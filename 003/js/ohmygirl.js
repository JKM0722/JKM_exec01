// ohmygirl 서브페이지 js

$(document).ready(function() {

    $("#section1").parallax("50%", 0.1);
    $("#section2").parallax("50%", 0.2);
    $("#section3").parallax("50%", 0.3);

    $(document).on("contextmenu dragstart selectstart", function (e) {
        return false;
    });




}); //// jQB ////////////////////////////////////





$(()=>{

    $("body")
            .fadeIn(1000);


    $.fn.scrollReveal();

    $(function () {

        // 메뉴 버튼 꾸밈
        $(".bar").click(function () {
            $(this).toggleClass("open");
            $(".gnb")
            .fadeToggle(200);

            $(".gnb li").each((idx,ele)=>{
                $(ele).stop(true,true).delay(50*idx).animate({top:"0",opacity:1})
            });
            
            if(!$(this).is("open")) $(".gnb li").attr("style","");    
        });
    });




    





})//////////JQB///////////////
