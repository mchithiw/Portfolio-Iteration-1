$(function() {

    
    $(".content").hide();
    $(".landing").show();
    $(".description").hide();
    
    $("#about-button").click(function() {
        $(".content").hide();
        $(".about").show();
    });
    
    $("#portfolio-button").click(function() {
        $(".content").hide();
        $(".portfolio").show();
    });
    
    $("#contact-button").click(function() {
        $(".content").hide();
        $(".contact").show();
    });
    
  /*  var ikraContent = "Ikra allows users to read verses of the Quran by a specified Ayat, a complete Sura, or by Keywords. I initially made this because a few friends and I got tired of skimming through the Quran to find a specific topic and wanted a keyword search.";
    
    var currencyContent = "A Currency Converter that gets the latest currency data for over 165 countries and allows free conversion between them. The same application was also ported as a Java App, using the GSON library to parse the JSON from the API calls.";
    
    var socketsContent = "Sockets is a turn based game made in Java to compete with fellow classmates. Each player has a rat and a maze, and the rat tries to solve other people's mazes in the most optimal way. The rats communicated with the maze over the server using TCP/IP Socket communication, hence the name.";
    
    var schedulerContent = "A scheduling system written in Java, which implements the Round-Robin Scheduling Algorithm. The system involved all aspects of the system, including the entry of teams, scheduling, scoring, time management, and UI.";
    
    */
    
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
    
    
    /*
    
    $("#ikra").hover(function() {
        $("#ikra-des").show();
    }, function() {
        $("#ikra-des").hide();
    });   
    
     $("#currency").hover(function() {
        $("#currency-des").show();
    }, function() {
        $("#currency-des").hide();
    });
    
     $("#sockets").hover(function() {
        $("#sockets-des").show();
    }, function() {
        $("#sockets-des").hide();
    });
    
     $("#scheduler").hover(function() {
        $("#scheduler-des").show();
    }, function() {
        $("#scheduler-des").hide();
    });

    
    */
    
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