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


    // Toggling the page animation
    $('#show-nav').delay(1000).toggle(1000);
    $('#show-content').delay(2000).toggle(1000);
    $('#footer').delay(1000).toggle(1000);
    $('#img-navbar').delay(2000).toggle(1000);


    // Scrolling to the bottom of the page
    setTimeout(function(){
        $('html, body').animate({
            scrollTop: $("#scroll").offset().top
        },1000);
    },4000);

    //function scroll_to(div){
    //    $('html, body').animate({
    //        scrollTop: $("#row-1").offset().top
    //    },1000);
    //}

    // this is the qoute generator
    var oldQuotes = new Array();
    $('#quote-btn').click(function quotefunc (){
        $('#hidden').css("display","block");

        $("#row-2-col-2").attr('class', 'col-sm-4');

        //console.log(oldQuotes);
        //here we read the txt file
        $.ajax({
            url : "txt/quotes.txt",
            dataType: "text",
            success : function (data) {
                //then split it by a newline, check and remove empty elements
                var arr = data.split("\n");
                arr = $.grep(arr,function(n){ return(n) });
                var random = Math.floor((Math.random()*arr.length));
                // we make sure that the quotes are randomised
                if(oldQuotes.indexOf(random)== -1){
                    var quote = arr[random].trim();
                    $("#text-inject").html(quote);
                    //$("#text-inject").css("border-radius","5px");
                    //$("#text-inject").css("background","gray");
                    //$("#text-inject").css("color" , "white");
                    //$("#text-inject").css("padding" , "5px");
                    //$("#text-inject").css("text-align" , "center");

                    oldQuotes.push(random);
                    if(oldQuotes.length == arr.length){
                        oldQuotes = new Array();
                    }
                }else{
                    quotefunc();
                }


            }
        });
        $('#quote-btn').css("display","none");
    });
    $('#btn-more').click(function quotefunc(){
        $('#hidden').css("display","block");

        $("#row-2-col-2").attr('class', 'col-sm-4');

        //console.log(oldQuotes);
        //here we read the txt file
        $.ajax({
            url : "txt/quotes.txt",
            dataType: "text",
            success : function (data) {
                //then split it by a newline, check and remove empty elements
                var arr = data.split("\n");
                arr = $.grep(arr,function(n){ return(n) });
                var random = Math.floor((Math.random()*arr.length));
                // we make sure that the quotes are randomised
                if(oldQuotes.indexOf(random)== -1){
                    var quote = arr[random].trim();
                    $("#text-inject").html(quote);
                    //$("#text-inject").css("border-radius","5px");
                    //$("#text-inject").css("background","gray");
                    //$("#text-inject").css("color" , "white");
                    //$("#text-inject").css("padding" , "5px");
                    //$("#text-inject").css("text-align" , "center");

                    oldQuotes.push(random);
                    if(oldQuotes.length == arr.length){
                        oldQuotes = new Array();
                    }
                }else{
                    quotefunc();
                }


            }
        });
    });
    $('#quote-btn-close').click(function(){
        $('#hidden').css("display","none");
        $('#quote-btn').css("display","block");
        $("#row-2-col-2").attr('class', 'col-sm-8');
    });


});


