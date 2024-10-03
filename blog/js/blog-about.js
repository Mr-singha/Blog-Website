$(document).ready(function(){

    //=================== header-2 start ============================

    $(".bar").click(function(){
        $(".top_menu_nav").show();
    })


    // click to hide 

    var rat = document.querySelector("#hide22");

    window.onclick=function(aaa){
        if(aaa.target == rat){
            rat.style.display = "none";
        }
    }





    //=================== end-click start ============================

    var body = document.querySelector(".body");
    var bodyH = body.offsetHeight;
    // alert(bodyH);
    var bodyHeight= bodyH-400;
    // alert(bodyHeight);

    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll > bodyHeight){
            document.querySelector(".end_click").style.display ="block";
            
        }else{
            document.querySelector(".end_click").style.display ="none";
        }
    })




    //=================== header fixed start ============================

    // ............ header1 and header2 start .............

    var rrr = document.querySelector(".body");
    var bbb = rrr.offsetHeight;
    // alert(bbb);
    var ccc = bbb - 400;
    // alert(ccc);

    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll > ccc){
         document.querySelector(".top_section").classList.add("fixed");
         document.querySelector(".header-2").classList.add("fixed")
        }else{
            document.querySelector(".top_section").classList.remove("fixed");
            document.querySelector(".header-2").classList.remove("fixed")
        }



        //=================== agent start ============================

        // ............ owl-carousel start .............

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

    })
})