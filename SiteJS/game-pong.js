/**
 * Created by Marek on 20.10.2015 ã..
 */
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



    // Toggling the page content and animating the page
    $('#show-nav').delay(1000).toggle(1000);
    $('#show-content').delay(2000).toggle(1000);
    $('#footer').delay(1000).toggle(1000);
    $('#img-navbar').delay(2000).toggle(1000);


    // hide the game when opened on a media device
    if($(window).width() < 890){
        $('#canvas-id').toggle();
        $('#replay-game').toggle();
        $('#start-game').toggle();
        $('#hidden').toggle(1000);
        setTimeout(function(){
            // to scroll the screen to the alert well
            $('html, body').animate({scrollTop:1000},'50');
        }, 4000);
    }else{
        setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(".striped").offset().top
            },1000);
        },3000);
        $('#start-game').click(function(){
            $('#start-game').toggle(1000);
            //loading the game with 3 seconds delay
            $.getScript("SiteJS/Marek-PONG.js",function(){});
            setTimeout(function(){
                $.getScript("SiteJS/canvas.js", function(){});
            }, 2000);
        });

        $('#replay-game').click(function(){
            location.reload(true);
        });
    }


});


