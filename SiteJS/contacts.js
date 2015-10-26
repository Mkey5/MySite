//jQuery.validator.addMethod('answercheck', function (value, element) {
//    return this.optional(element) || /^\bcat\b$/.test(value);
//}, "type the correct answer -_-");





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


    // Toggling the animating of the home page.
    $('#show-nav').delay(1000).toggle(1000);
    $('#show-content').delay(2000).toggle(1000);
    $('#footer').delay(1000).toggle(1000);
    $('#img-navbar').delay(2000).toggle(1000);

    // Scrolling to the bottom of the page

    setTimeout(function(){
        $('html, body').animate({
            scrollTop: $("#panel").offset().top
        },1000);
    },4000);

    // Function for validation of an email
    function isEmail(email){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        return regex.test(email);
    }

    // Validating the data from the form and sending the email
    $('#hidden-not-send').click(function(){
        $('#hidden-not-send').css('display','none');
    });
    $('#hidden-send').click(function(){
        $('#hidden-send').css('display','none');
    });
    $('#send').click(function(){

       if($('#capitals').val() == "Sofia"
           && $('#name').val().length >= 5
            && isEmail($('#email').val())
                && $('#message').val().length >= 3 ){
            console.log("Sending");

           var name = $('#name').val();
           var email = $('#email').val();
           var message = $('#message').val();
           var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
            console.log(name + ' ' + email + ' ' +message + ' ' + dataString);
           $.ajax({

               type:"POST",
               url:"php/process.php",
               contentType: "application/x-www-form-urlencoded;charset=utf-8",
               data: dataString,
                   success: function() {
                       $('#hidden-send').css('display','block');
                       $('#name').val('');
                       $('#email').val('');
                       $('#capitals').val('');
                       $('#message').val('');

                   },
                   error: function() {
                       $('#hidden-not-send').css('display','block');
                       $('#name').val('');
                       $('#email').val('');
                       $('#capitals').val('');
                       $('#message').val('');
                   }
               });


       }else{
            $('#hidden-not-send').css('display','block');
            $('#name').val('');
            $('#email').val('');
            $('#capitals').val('');
            $('#message').val('');
       }
    });


});

