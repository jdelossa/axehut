//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 25) {
        $("body").addClass("body-padding-top")
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $("body").removeClass("body-padding-top")
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 6000, 'easeInOutExpo');
        event.preventDefault();
    });
});
