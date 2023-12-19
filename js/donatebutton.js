var donationbutton = $('.donation');
var body = document.body;

$('#donate-button').click(function(){
    donationbutton.addClass('active');
    body.classList.toggle('noscroll');
});

$('#donate-button2').click(function(){
    donationbutton.addClass('active');
	tonezv2_downloadbutton.removeClass('active');
    tonezv2_univpopup.removeClass('active');
    body.classList.toggle('noscroll');
});

$('.close-mymodal').click(function(){
    donationbutton.removeClass('active');
    body.classList.toggle('noscroll');
});



$('#donatechoice1').click(function(){
     
    $('#donatebutton1').addClass('activebutton');
    $('#donatebutton2').removeClass('activebutton');
    $('#donatebutton3').removeClass('activebutton');
        $('#donatebutton4').removeClass('activebutton');

    document.querySelector("[name=amount]").value = 50;
});

$('#donatechoice2').click(function(){
     
    $('#donatebutton1').removeClass('activebutton');
    $('#donatebutton2').addClass('activebutton');
    $('#donatebutton3').removeClass('activebutton');
        $('#donatebutton4').removeClass('activebutton');

    document.querySelector("[name=amount]").value = 20;

});

$('#donatechoice3').click(function(){
     
    $('#donatebutton1').removeClass('activebutton');
    $('#donatebutton2').removeClass('activebutton');
    $('#donatebutton3').addClass('activebutton');
    $('#donatebutton4').removeClass('activebutton');
    document.querySelector("[name=amount]").value = 10;
});

$('#donatechoice4').click(function(){
     
    $('#donatebutton1').removeClass('activebutton');
    $('#donatebutton2').removeClass('activebutton');
    $('#donatebutton3').removeClass('activebutton');
    $('#donatebutton4').addClass('activebutton');
    document.querySelector("[name=amount]").value = document.querySelector("[name=nameyourprice]").value;
});

$("#donatechoice4").on("change keyup paste", function(){
    document.querySelector("[name=amount]").value = document.querySelector("[name=nameyourprice]").value;
})


