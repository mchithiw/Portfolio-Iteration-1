$(function() {
    $("#box-5").backstretch("Images/currency.jpg");
    $("#box-2").backstretch("Images/maze.gif");
    $("#box-3").backstretch("Images/fingers.jpg");
    $("#box-4").backstretch("Images/robin.jpg");
    $("#landing-page").backstretch("Images/fingers.jpg");
    //$("#pic").backstretch("Images/Me.jpg");
});

var h = $(window).height();


var k = "Hi, I'm Mehtab Chithiwala. I'm currently attending SPSU for Computer Science, and hope to graduate in Spring 2015. I'm also interning at Georgia Pacific as a Software Developer. In my free time, I like to dabble in new technologies and create interesting projects, some of which can be seen in my portfolio below. I am also a huge sports fan (Go Falcons!) and like to volunteer around the community in my spare time. If you would like to get in touch with me, feel free to contact me via LinkedIn, Email, or even Facebook.";

$(function() {
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = h-(h/9);             

        if(y_scroll_pos > scroll_pos_test) {
           $("#typer-box").typer(
            [k]);
            $(window).unbind('scroll');
        }
    });
});


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});   
});

$(function() {
    $(".project-full").hide();
    $(".project-full").click(function() {
        $(".project-full").hide();
    });
});

$(function() {
    $("#box-5").click(
        function() {
            $("#box-5").hide();
            $("#cont-5").show();
    });
    $("#box-2").click(
        function() { 
            $("#box-2").hide();
            $("#cont-2").show();
    });
    $("#box-3").click(
        function() { 
            $("#box-3").hide();
            $("#cont-3").show();
    });
    $("#box-4").click(
        function() { 
            $("#box-4").hide();
            $("#cont-4").show();
    });
    $("#cont-5").click(
        function() { 
            $("#cont-5").hide();
            $("#box-5").show();
    });
    $("#cont-2").click(
        function() { 
            $("#cont-2").hide();
            $("#box-2").show();
    });
    $("#cont-3").click(
        function() { 
            $("#cont-3").hide();
            $("#box-3").show();
    });
    $("#cont-4").click(
        function() { 
            $("#cont-4").hide();
            $("#box-4").show();
    });
});

var w = $(window).width();

$(function() {
    $(".cont").hide();
    $(".name-box").hide();
    $(".header-2").hide();
    $(".header-icon").click(function() {
        $(".header-2").toggle();
    });
    
    if (w > 800)
    {
        $(".header-icon").hide();
    }
    
    if (w < 801)
    {
        $(".header").hide();
    }
});


$(window).resize(function() {
    var wd = $(window).width();
    if (wd < 801)
    {
        $(".header").hide();
        $(".header-icon").show();
    }
    else
    {
        $(".header").show();
        $(".header-icon").hide();
        $(".header-2").hide();
    }
});


$(function() {
    $("a").click(function() {
        if (($(".header-2").css("display") != "none"))
        {
            $(".header-2").hide();
        }
    });
});
