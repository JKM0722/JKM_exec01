$(function(){

    $("#ft").load("./footer.html")
    $("#hd").load("./header.html")

    
    /* mobile gnb S */
    $("#hd").load("./header.html", function(){
        console.log("헤더로드")
        
        $(".gnb_btn, .modal").click(function(){
            $("#gnb>ul").slideToggle()
            $(".gnb_btn>img").toggle()
            $(".modal").toggle()
        })
        
        // let body_width = $("body").width();

        // if(body_width <= 767){
        //     $("#gnb>ul>li>a").click(function(){
        //         $("#gnb>ul").slideToggle()
        //         $(".gnb_btn>img").toggle()
        //         $(".modal").toggle()
        //     })
        // }
        // else if(body_width >= 768){
        //     $(".lang_wrap").on("mouseover focusin", function(){
        //             $(".lang_wrap").addClass("on")
        //     })
        //     $(".lang_wrap").on("mouseout focusout", function(){
        //         $(".lang_wrap").removeClass("on")
        //     })
        // }


    });
    
    /* mobile gnb E */

    // button to top S 

    let body_width = $("body").width();
    if(body_width >= 767){

        $(window).scroll(function(){

            let sct = $(window).scrollTop();
            let win_height = $(window).height()
            let mb_height = $(".main_banner").height();

            if(sct <= (mb_height - 1000)){
                $(".to_top").stop().fadeOut()
            }
            else if(sct > (mb_height - 1000)){
                $(".to_top").stop().fadeIn()
            }

            $('.to_top').click(function(){
                $('html, body').stop().animate({"scrollTop":0},700);
            });
        });


    }
    // button to top E 

    

    
})//E