
$(document).ready(function() {

    var lastScrollTop = 0;

    
    var a = 0;
    var s0 = 2;

    
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var logo = $(".pattern1 .column-logo");
    
    
        if (st > lastScrollTop) {
            if ($(window).scrollTop() + $(window).height() != $(document).height()) {
                $(".pb2").css({transform: "translateY(" + (a+=s0) + "px)"});
            }
        } else {
             if ($(window).scrollTop() != 0) {
                 $(".pb2").css({transform: "translateY(" + (a-=s0) + "px)"});
             }
        }
    
        lastScrollTop = st;
    });


})

