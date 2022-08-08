// ohmygirl 서브페이지 js

// 윈도우 객체 컨텐츠가 모두 로딩된 후 로딩 박스 없애기
// $(window).on("load",function(){
//     $(".LDbx").hide();

// })

$(document).ready(function() {

    $("#section1").parallax("50%", 0.1);
    $("#section2").parallax("50%", 0.2);
    // $("#section3").parallax("50%", 0.3);

    $(document).on("contextmenu dragstart selectstart", function (e) {
        return false;
    });




}); //// jQB ////////////////////////////////////





$(()=>{
          // 로딩 텍스트용 동영상
    // $("body").prepend('<iframe width="871" height="490" src="https://www.youtube.com/embed/7AHLhrY75Iw" title="이걸 8000원에 판다고? 피파4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    $(".body")
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
