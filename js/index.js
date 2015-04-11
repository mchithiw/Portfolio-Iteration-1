$(function() {

    $(".description").hide();
    
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
    
});