// ohmygirl 서브페이지 js

$(document).ready(function() {

    $("#section1").parallax("50%", 0.2);
    $("#section2").parallax("50%", 0.1);
    // $("#section3").parallax("50%", 0.1);






}); //// jQB ////////////////////////////////////





$(()=>{

    $.fn.scrollReveal();

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
