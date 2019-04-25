
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwimKZEbVnC3gc5mU-_PaNj1SRz_O2R4vgf3HcaWy2h-fhPgCRd/exec'

$('#submit-form').on('click', function(e) {
    $('.loadring').toggleClass( "lds-ring" )
    document.getElementById("submit-form").innerHTML = "Sending..."
  e.preventDefault();
  var resetBtn = document.getElementById("submit-form");
    resetBtn.disabled = true;
    var timeStampInMs = Math.floor((new Date()).getTime() / 1000);
            console.log(timeStampInMs);
  var a=document.forms["Form"]["age"].value;
  if (a!="")
  {         
            document.getElementById("test-form").reset();
            return true;
            

            
        }
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()+ '&timestamp=' + timeStampInMs,
    success: function(data)          
     {   
        id = data[0];              
        vname = data[1];
     },
    complete: function (data) {
      document.getElementById("test-form").reset();
        $('.loadring').toggleClass( "lds-ring" )
        document.getElementById("submit-form").innerHTML = "Sent successfuly"
        setTimeout(suiteTraitement, 5000)
        
     }
    });
})

function suiteTraitement()
{
    var resetBtn = document.getElementById("submit-form");
    resetBtn.disabled = false;
        document.getElementById("submit-form").innerHTML = "Send"
}











$(document).ready( function () {
    var $form = $('#mc-embedded-subscribe-form');
    if ( $form.length > 0 ) {
        $('form input[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            register($form);
        });
    }
});

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {
                // It worked, carry on...
            }
        }
    });
}



