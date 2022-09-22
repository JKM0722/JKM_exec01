$(function(){

    $(".operator_list > li").click(function(e) {
        e.stopPropagation();
        var num = $(this).index();
        $(".operator_modal_wrap > li").eq(num).fadeIn(300);
    });

    $(document).click(function() {
        $(".operator_modal_wrap > li").fadeOut(300);
    })
    

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        
        let fadein_up = [];
        let fadein_up_class_count = $(".fadein_up").length;

        for(i = 0; i < fadein_up_class_count; i++){
            fadein_up[i] = $(".fadein_up").eq(i).offset().top;
            
            if(sct >= fadein_up[i] - 700){
               $(".fadein_up").eq(i).addClass("on");
            }
        }
        
        let scale_ani = [];
        let scale_ani_class_count = $(".scale_ani").length;
        
        for(i = 0; i < scale_ani_class_count; i++){
            scale_ani[i] = $(".scale_ani").eq(i).offset().top;
            
            if(sct >= scale_ani[i] - 700){
               $(".scale_ani").eq(i).addClass("on");
            }
        }

        let success_ani = [];
        let success_ani_class_count = $(".success_ani").length;
        
        for(i = 0; i < success_ani_class_count; i++){
            success_ani[i] = $(".success_ani").eq(i).offset().top;
            
            if(sct >= success_ani[i] - 700){
               $(".success_ani").eq(i).addClass("on");
            }
        }
    })
    //scroll E


})