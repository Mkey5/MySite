$(function(){
    // This is for IE
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }


    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px");
        return this;
    };

    jQuery.fn.center_bottom = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) - 20) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px");
        return this;
    };



    // Toggling the animating of the home page.
    $('#show-nav').delay(1000).toggle(1000);
    $('#show-content').delay(2000).toggle(1000);
    $('#footer').delay(1000).toggle(1000);
    $('#img-navbar').delay(2000).toggle(1000);

    // Scrolling to the panel
    setTimeout(function(){
        $('html, body').animate({
            scrollTop: $("#panel1").offset().top
        },1000);
    },4000);



});


