// 001 프로젝트 JS

$(()=>{

    let scH; // 넓이 변수    

    scH = $(window).width()

    $('.bar').click(function(){
        $('.nav2, .bar').toggleClass('on');
    });////////////////////////click


    $('.gnb2 a').click(function(){
        $('.nav2, .bar').removeClass('on');
    });/////////////////////click

    
    ///////////////////sec2 이미지 넘기면서 설명보기///////////////////////
    // 임시조치
    // $(".sec2b1").draggable({
    //     axis:"x"
    // });


    /////////////////////////////////////////////////////////
    //// 방법 : 누를때마다 on1, on2, on3을 줘서 넘어가게 하며///
    //// 끝에 다다르면 버튼 자체가 없어지게 한다////////////////
    /////////////////////////////////////////////////////////

    let btn = $(".sec2btn")
    let b1 = $(".sec2b1")

    btn.click(function(){
        let isR = $(this).is(".rb");
        console.log(isR)

        if(scH >= 940){

            if(isR){/// 오른쪽
                    if(b1.css("left") > "10px"){
                        b1.addClass("on1");
                        $("#sec2 .sec2btn.lb").css({display:"block"})
                    }

                    else if(b1.hasClass("on1")){
                        b1.addClass("on2").removeClass("on1");
                    }

                    else if(b1.hasClass("on2")){
                        b1.addClass("on3").removeClass("on2");
                        $(".rb").css({display:"none"})
                    }
                
                }/////////////오른쪽

            else{/////////왼쪽
                if(b1.hasClass("on3")){
                    b1.addClass("on2").removeClass("on3");
                    $(".rb").css({display:""})
                }

                else if (b1.hasClass("on2")){
                    b1.addClass("on1").removeClass("on2");
                }
                else if (b1.hasClass("on1")){
                    b1.removeClass("on1");
                    $(".lb").css({display:"none"})
                }

            }////////////////////////왼쪽
    
        ////////////////////////////////////////////////////////////////////////
        }///////////////////////넓이 if문//////////////////////////////////////
        /////////////////////////////////////////////////////////////////////



        else if(scH<940){

            if(isR){/// 오른쪽
                    if(b1.css("left") >= "0px"){
                        b1.addClass("on1");
                        $("#sec2 .sec2btn.lb").css({display:"block"})
                    }

                    else if(b1.hasClass("on1")){
                        b1.addClass("on2").removeClass("on1");
                    }

                    else if(b1.hasClass("on2")){
                        b1.addClass("on3").removeClass("on2");
                    }

                    else if(b1.hasClass("on3")){
                        b1.addClass("on4").removeClass("on3");
                        $(".rb").css({display:"none"})
                    }
                }/////////////오른쪽

                else{/////////왼쪽
                    if(b1.hasClass("on4")){
                        b1.addClass("on3").removeClass("on4");
                        $(".rb").css({display:""})
                    }
    
                    else if (b1.hasClass("on3")){
                        b1.addClass("on2").removeClass("on3");
                    }

                    else if (b1.hasClass("on2")){
                        b1.addClass("on1").removeClass("on2");
                    }

                    else if (b1.hasClass("on1")){
                        b1.removeClass("on1");
                        $(".lb").css({display:"none"})
                    }
    
                }////////////////////////왼쪽





            ////////////////////////////////////
        }/////////////////////////////넓이 else if문/////////////////////////////////////////////////////////////











    
    })////////////////////////click 함수






















    /////////////////sec2 이미지 넘기기 끝/////////////////////////////////////




    /////////////////////////////////////////////////////////////////////////
    /////////////////////// sec5 폰 넘기기///////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

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




    //////////////////////////////////////////////////////////////////////
    ////////////// sec5 폰넘기기 끝////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////












    /*********************************************************/
    /////스크롤이벤트///////////////////////////////////////////
    /*********************************************************/
    
    let scTop; // 스크롤 위치변수    


    // 각 등장액션 위치 배열변수
    const scposy = [];
    const scposx1 = [];
    const scposx2 = [];

    const tfty = $(".tfty");
    const tftx1 = $(".tftx1");
    const tftx2 = $(".tftx2");

    const gapp = $(window).height();

    // console.log("gapp 입니다", gapp)



    tfty.each((idx,ele) => {
        // console.log(idx,ele);
        scposy[idx] = $(ele).offset().top;
        // console.log(scposy)
    });

    tftx1.each((idx,ele) => {
        // console.log(idx,ele);
        scposx1[idx] = $(ele).offset().top;
    });

    tftx2.each((idx,ele) => {
        // console.log(idx,ele);
        scposx2[idx] = $(ele).offset().top;
    });

    // console.log(scposy)
    // console.log(scposx1)
    // console.log(scposx2)


    // resize
    $(window).resize(() => {
        tfty.each((idx, ele) => scposy[idx] = $(ele).offset().top);
        // console.log(scposy);
    }); /////////// resize함수 ///////////////////
    $(window).resize(() => {
        tftx1.each((idx, ele) => scposx1[idx] = $(ele).offset().top);
        // console.log(scposx1);
    }); /////////// resize함수 ///////////////////
    $(window).resize(() => {
        tftx2.each((idx, ele) => scposx2[idx] = $(ele).offset().top);
        // console.log(scposx2);
    }); /////////// resize함수 ///////////////////

    $(window).resize(() => {
        scH = $(window).width()
        console.log("나는 넓이", scH);
    })


    /////////////////////////////////////////////////////////
    //// 스크롤 할떄 GNB 메뉴 움직이기////////////////////////
    ///////////////////////////////////////////////////////


    ////// 클래스 설정//////////////////////
    const scposli = [];

    const gnbpos = $(".gnbpos")
    const gnbli = $(".gnb li")
    const gnb = $(".gnb")

    gnbpos.each((idx,ele)=>{
        scposli[idx] = $(ele).offset().top
    })//////each
    
    // console.log(scposli)

        // resize
        $(window).resize(() => {
            gnbpos.each((idx, ele) => scposli[idx] = $(ele).offset().top);
            // console.log(scposli);
        }); /////////// resize함수 ///////////////////
    




    /************************************* 
         함수명: tftyGo
         기능: 스크롤 등장액션 주기
    *************************************/

         function tftyGo(n){
            if(scTop > scposy[n] - gapp){
                tfty.eq(n).addClass("on")
            }///////if
            else{
                tfty.eq(n).removeClass("on")
            }/////else
         }

         function tftx1Go(n){
            if(scTop > scposx1[n] - gapp){
                tftx1.eq(n).addClass("on")
            }///////if
            else{
                tftx1.eq(n).removeClass("on")
            }/////else
         }

         function tftx2Go(n){
            if(scTop > scposx2[n] - gapp){
                tftx2.eq(n).addClass("on")
            }///////if
            else{
                tftx2.eq(n).removeClass("on")
            }/////else
         }

         console.log("나는 넓이!", scH)

         function gnbposition(n){
            if(scH>1079){
                if(scTop > scposli[n] - 150){
                    gnbli.eq(n).addClass("on").siblings().removeClass("on")
                }

                else{
                    gnbli.eq(n).removeClass("on")
                }
            }/////////////넓이 if 문!!
            else{
                if(scTop > scposli[n] - 170){
                    gnb.addClass(`on${n}`).removeClass(`on${n-1} on${n+1}`)
                }
                else{
                    gnb.removeClass(`on${n}`)
                }
            }///////else
        }////gnbposition


        







    
    

    /******************************** 스크롤함수  ********************************/


    $(window).scroll(function(){

        scTop = $(this).scrollTop();
        // 스크롤 위차값 확인 + 위치값
        // console.log("스크롤중", scTop);

        let headerA = $(".header")


        if(scTop >= 150){
            headerA.addClass("on")
        }///////////////if문

        else if(scTop < 150){
            headerA.removeClass("on")
        }

        tfty.each((idx) => tftyGo(idx));
        tftx1.each((idx) => tftx1Go(idx));
        tftx2.each((idx) => tftx2Go(idx));

        gnbli.each((idx) => gnbposition(idx));






    });    /*********************************************************/
    /////스크롤이벤트///////////////////////////////////////////
    /*********************************************************/


    //////////////////////////////////////////////////////
    //////섹터5 type li 눌렀을때 변경//////////////////////
    /////////////////////////////////////////////////////

    let lic = $(".lic");

    lic.click(function(){
        console.log(this)

        let temp = $(this).text();

        $(this).html("준비중").css({
            color:"#4eb2cc",
            backgroundColor:"#e7f3f6",
            border:"2px solid #a9d8e4",
            boxSizing:"border-box",
            transition : ".4s",
            lineHeight:"50px"
        })

        setTimeout(() => {
            $(this).attr("style","").text(temp);
        }, 2000);

    })////////////////click































})/////////////////////////////////////////////////////////////////////////////
/////////////JQB////////////////////////////////////////////////////////////