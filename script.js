$( document ).ready(function() {

   $(".container").hover(function () {

        $(this).siblings("section").css({"filter": "blur(20px)"});
        $("main").addClass("main_white");

        if ($(this).hasClass("gauche")){
            $(this).children(".back").addClass("backswapgauche");
        }
        else if ($(this).hasClass("droite")){
            $(this).children(".back").addClass("backswapdroite");
        }

        else if ($(this).hasClass("droite1")){
            $(this).children(".back").addClass("backswapdroite1");
        }

        else {
            $(this).children(".back").addClass("backswapcentre");
            
        }
        
        $(this).children(".front").addClass("frontswap");
        $(this).addClass("transformation");
        $(this).css("z-index", "30000");
        $(this).siblings("section").css("z-index", "11000");
    }),
       
    $(".container").mouseleave(function () {

        $("main").removeClass("main_white");
        if ($(this).hasClass("gauche")){
           $(this).children(".back").removeClass("backswapgauche");
        }
        else if ($(this).hasClass("droite")) {
            $(this).children(".back").removeClass("backswapdroite"); 
        }
        else if ($(this).hasClass("droite1")) {
            $(this).children(".back").removeClass("backswapdroite1"); 
        }
        else {
            $(this).children(".back").removeClass("backswapcentre"); 
        } 
        
        
        
        $(this).children(".front").removeClass("frontswap");
        $(this).siblings("section").css({"filter": "blur(0px)"});
          
    });

});

 
    


    








