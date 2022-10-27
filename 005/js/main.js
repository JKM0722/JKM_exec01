$(document).ready(function () {


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
    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            if ($(window).scrollTop() + $(window).height() != $(document).height()) {
                $(".pb2").css({
                    transform: "translateY(" + (a += 0.5) + "px)"
                });
            }
        } else {
            if ($(window).scrollTop() != 0) {
                $(".pb2").css({
                    transform: "translateY(" + (a -= 0.5) + "px)"
                });
            }
        }

        lastScrollTop = st;


        /*************************************************
        특정 위치에 gnb 클래스 on 추가
        *************************************************/
        const scposli = [];

        const scgnb = $(".scgnb");
        const gnbli = $(".gnb li")
        const gnb = $(".gnb")

        scgnb.each((idx, ele) => {
            // console.log(idx, ele)
            scposli[idx] = $(ele).offset().top;
            // console.log(gnb)
        }) ////each

        $(window).resize(() => {
            scgnb.each((idx, ele) => scposli[idx] = $(ele).offset().top);
            // console.log(gnb)
        }); /////////// resize함수 ///////////////////

        /********************************************* 
            함수명 : gnbposition
            기능 : 특정위치에 gnb li 클래스 on 주기
        *********************************************/

        function gnbposition(n) {
            if (st > scposli[n] - 500) {
                gnbli.eq(n).addClass("on").siblings().removeClass("on")
            } else {
                gnbli.eq(n).removeClass("on")
            }
        } ///gnbposition

        gnbli.each((idx) => gnbposition(idx));

    });


    ///////////////////////////////////////////////////////////////////////
    ///// 숫자 카운트////////////////////////////////
    /////////////////////////////////////////////////////////
    $(function() {


        $(window).scroll(function(){

            var sct_skill = $(".skill_set").offset().top
            var sct = $(window).scrollTop()

            //  console.log(sct_skill, sct)

            if(sct > sct_skill - 500){
                counterFn();
                counterFn2();
                counterFn3();
            }///if

           

        })////scroll

        var cnt0 = 0;
        var cnt2 = 0;
        var cnt3 = 0;


        // counterFn();
        // counterFn2();
        // counterFn3();

        function counterFn() {

          id0 = setInterval(count0Fn, 400);

          function count0Fn() {
            cnt0++;
                if (cnt0 > 90) {
                    clearInterval(id0);
                  } else {
                    $(".number").text(cnt0);
                  }
        }
    }


        function counterFn2() {

          id2 = setInterval(count0Fn, 400);

          function count0Fn() {
            cnt2++;
                if (cnt2 > 70) {
                    clearInterval(id2);
                  } else {
                    $(".number2").text(cnt2);
                  }
        }
    }


        function counterFn3() {

          id3 = setInterval(count0Fn, 400);

          function count0Fn() {
            cnt3++;
                if (cnt3 > 60) {
                    clearInterval(id3);
                  } else {
                    $(".number3").text(cnt3);
                  }
        }
    }
      });



}) ////////////jQB