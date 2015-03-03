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

console.log(k);