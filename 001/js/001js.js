// 001 프로젝트 JS

$(()=>{

    $('.bar').click(function(){
        $('.nav2, .bar').toggleClass('on');
    });////////////////////////click


    $('.gnb2 a').click(function(){
        $('.nav2, .bar').removeClass('on');
    });/////////////////////click

    
    ///////////////////sec2 이미지 넘기면서 설명보기///////////////////////









    /////////////////sec2 이미지 넘기기 끝/////////////////////////////////////


    /////////////////////// sec5 폰 넘기기///////////////////////////////////
    let phib = $(".phi .phib")

    // 광클 금지변수
    let prot = 0; // 1- 불허용, 0- 허용

    // 애니메이션 시간 변수
    const aniT = 600;

    // 애니메이션 이징 변수
    const aniE = "easeOutExpo";

    // 블릿 지명
    let bbtn = $(".bbtn span")

    $(".phobtn").click(function(){

        ////광클 금지/////
        if(prot) return;
        prot = 1;//잠금
        setTimeout(()=>prot=0,aniT)
        // .6초후 prot=0 잠금해제

        // 자동넘김 지우기 함수
        clearAuto();

        let isR = $(this).is(".btr");

        // console.log("오른쪽버튼인가?", isR)

        if(isR){/// 오른쪽
            phib.animate({left:"-100%"}, aniT, aniE, 
            function(){
                phib.append(phib.find("img").first()).css({left:"0"});
            });///animate
        }/// 오른쪽

        else {///왼쪽
            phib.prepend(phib.find("img").last()).css({left:"-100%"}).animate({left:"0"}, aniT, aniE)
        } ////왼쪽

        /// 블릿 span에 클래스 on 주기
        
        let sseq = phib.find("img").eq(isR?1:0).attr("data-seq");

        bbtn.eq(sseq).addClass("on").siblings().removeClass("on")
    })////////////click///////////////////////////////////////

    // 블릿 순번 결정하기

    // 대상 : .phib img
    phib.find("img").each((idx,ele)=>{
        $(ele).attr("data-seq", idx);

        // console.log(ele,idx)
    })////each

    ////////////자동넘김/////////////

    // 인터발용 변수
    let autoI;

    // 타임아웃용 변수
    let autoT;

    // 호출
    autoSlide();

    // 인터발 호출함수
    function autoSlide(){
        autoI = setInterval(() => {
            phib.animate({left:"-100%"}, aniT, aniE, 
            function(){
                phib.append(phib.find("img").first()).css({left:"0"});
            });///animate///
            let sseq = phib.find("img").eq(1).attr("data-seq");
            bbtn.eq(sseq).addClass("on").siblings().removeClass("on")
        }, 3000);///인터발 함수
    }///auto slide 함수


    ///////// 자동넘김 멈추기///////////////////////
    function clearAuto(){
            //인터발 지우기
            clearInterval(autoI);
            // 타임아웃지우기(실행 쓰나미 방지)
            clearTimeout(autoT);

            //일정시간 후 다시 인터발 불러오기
            autoT = setTimeout(autoSlide,4000);            
    };//////////clearAuto





    ////////////// sec5 폰넘기기 끝/////////////////////////////////





})/////////////////////////////////////////////////////////////////////////////
/////////////JQB////////////////////////////////////////////////////////////