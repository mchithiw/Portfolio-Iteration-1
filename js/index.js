$(function() {

    $(".description").hide();
<<<<<<< HEAD
=======
    //$(".header-icon").hide();
    
    $(".nav").hover(function() {
        //$(this).css("border-top", "1px solid white");
        $(this).css("color", "white");
    }, function() {
        //$(this).css("border-top", "none");
        $(this).css("color", "#75a1e8");
    });
    
    $(".tab").hover(function() {
        //$(this).css("border-top", "1px solid white");
        $(this).css("color", "white");
    }, function() {
        //$(this).css("border-top", "none");
        $(this).css("color", "black");
    });
    
    $(".tab, .nav").click(function() {
        $(".tab, .nav").css("border", "none");
        $(this).css("border-bottom", "1px solid white");
    });

     $("#landing-button, #landing-button-two").click(function() {
        $(".content").hide();
        $(".landing").show();
    });
    
    $("#about-button, #about-button-two").click(function() {
        $(".content").hide();
        $(".about").show();
    });
    
    $("#portfolio-button, #portfolio-button-two").click(function() {
        $(".content").hide();
        $(".portfolio").show();
    });
    
     $("#resume-button, #resume-button-two").click(function() {
        $(".content").hide();
        $(".res").show();
    });
>>>>>>> origin/master
    
    var img;
    
    $(".project").hover(function() {
            $(this).find((".proName")).css("visibility", "visible");
            img = $(this).css("background-image");
            //$(this).css("opacity", ".30");
            $(this).css("background-image", "none");
    }, 
        function() {
            $(this).find((".proName")).css("visibility", "hidden");
            //$(this).css("opacity", "1");
            $(this).css("background-image", img);
    });
    
    $(".project").click(function() {
        $(".portfolio").hide();
    });
    
    $("#ikra").click(function() {
        $("#ikra-des").show();
    });
    
    $("#currency").click(function() {
        $("#currency-des").show();
    });
    
    $("#sockets").click(function() {
        $("#sockets-des").show();
    });
    
    $("#scheduler").click(function() {
        $("#scheduler-des").show();
    });
    
    
    $(".but").click(function() {
        $(".description").hide();
        $(".portfolio").show();
    });
    
    var w = $(window).width();

    $(".header-2").hide();
    
    $("#menu").click(function() {
        $(".header-2").toggle();
    });

    $("a").click(function() {
        if (($(".header-2").css("display") != "none"))
        {
            $(".header-2").hide();
        }
    });
    
<<<<<<< HEAD
});
=======
    var h = $(window).height();


    var about = "Hi, I'm Mehtab Chithiwala. I'm currently attending SPSU for Computer Science, and hope to graduate in Spring 2015. I'm also interning at Georgia Pacific as a Software Developer. In my free time, I like to dabble in new technologies and create interesting projects, some of which can be seen in my portfolio below. I am also a huge sports fan (Go Falcons!) and like to volunteer around the community in my spare time. If you would like to get in touch with me, feel free to contact me via LinkedIn, Email, or even Facebook.";
    
    var intro = "Software Developer, Atlanta.";
    var intro2 = "Currently studying at SPSU and Interning at Georgia Pacfic.";

    
    var typeDetail = function() {
        $(".lp").typer([intro2]);
    }
    
    var typeIntro = function() {
        $(".lh").typer([intro]);
    }
    
    typeIntro();
    setTimeout(typeDetail, 2200);
});
>>>>>>> origin/master
