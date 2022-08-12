$(()=>{//////////////////////////////////

    $('.shopb').click(function(){
        // console.log("오버됨")
        $('.tic').fadeToggle(400)
        $('.map').fadeOut(400)
        $(this).toggleClass('on')
        $('.mapb').removeClass('on')

    })///////.shopb.hover////////////////

    $('.mapb').click(function(){
        // console.log("오버됨")
        $('.map').fadeToggle(400)
        $('.tic').fadeOut(400)
        $(this).toggleClass('on')
        $('.shopb').removeClass('on')
    })///////.shopb.hover////////////////



})////////JQB///////////////////////////////