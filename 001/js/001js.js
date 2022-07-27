// 001 프로젝트 JS

$(()=>{

    $('.bar').click(function(){
        $('.nav2, .bar').toggleClass('on');
    });////////////////////////click


    $('.gnb2 a').click(function(){
        $('.nav2, .bar').removeClass('on');
    });/////////////////////click

    
    /////////////////////// sec5 폰 넘기기///////////////////////////////////
    let phib = $(".phi .phib")

    // 광클 금지변수
    let prot = 0; // 1- 불허용, 0- 허용

    // 애니메이션 시간 변수
    const aniT = 600;

    // 애니메이션 이징 변수
    const aniE = "easeOutExpo";

    $(".phobtn").click(function(){

        ////광클 금지/////
        if(prot) return;
        prot = 1;//잠금
        setTimeout(()=>prot=0,aniT)
        // .6초후 prot=0 잠금해제

        let isR = $(this).is(".btr");

        console.log("오른쪽버튼인가?", isR)

        if(isR){/// 오른쪽
            phib.animate({left:"-131.2%"}, aniT, aniE, 
            function(){
                phib.append(phib.find("img").first()).css({left:"0"});
            });///animate
        }/// 오른쪽

        else {///왼쪽
            phib.prepend(phib.find("img").last()).css({left:"-131.2%"}).animate({left:"0"}, aniT, aniE)
        } ////왼쪽

    })////////////click///////////////////////////////////////

    ////////////// sec5 폰넘기기 끝/////////////////////////////////





})/////////////////////////////////////////////////////////////////////////////
/////////////JQB////////////////////////////////////////////////////////////