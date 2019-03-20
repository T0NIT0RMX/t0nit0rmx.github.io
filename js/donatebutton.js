var donationbutton = $('.donation');
var windowsbutton = $('.windows');

var body = document.body;

$('#donate-button').click(function(){
    donationbutton.addClass('active');
    body.classList.toggle('noscroll');
});

$('.close-mymodal').click(function(){
    donationbutton.removeClass('active');
    windowsbutton.removeClass('active');
    body.classList.toggle('noscroll');
});

$('#windows-button').click(function(){
    windowsbutton.addClass('active');
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



$('#windows-button').on('click', function () {
    $.ajax({
        url: 'https://t0nit0rmx.github.io/ld/ToneZ_x64_1.0_Setup.zip',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'ToneZ_v1.0.zip';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    });
});