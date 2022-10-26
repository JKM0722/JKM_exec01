
$(document).ready(function() {

    /* 타이핑효과 */
    var text = document.getElementById("text");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter
    .typeString('HELLO <br> WEB PUBLISHER <br> <strong>장규민</strong> 입니다')
    .pauseFor(2000)
    .start();

    var text2 = document.getElementById("text2");


    var typewriter2 = new Typewriter(text2, {
        loop: false
    });

    typewriter2
    .pauseFor(2000)
    .typeString('#성실한')
    .pauseFor(1000)
    .typeString(' #겸손한')
    .pauseFor(1000)
    .typeString(' #성장하는')
    .start();





    var lastScrollTop = 0;
    var a = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var logo = $(".pattern1 .column-logo");
    
    
        if (st > lastScrollTop) {
            if ($(window).scrollTop() + $(window).height() != $(document).height()) {
                $(".pb2").css({transform: "translateY(" + (a+=0.5) + "px)"});
            }
        } else {
             if ($(window).scrollTop() != 0) {
                $(".pb2").css({transform: "translateY(" + (a-=0.5) + "px)"});
             }
        }
    
        lastScrollTop = st;
    });


})

