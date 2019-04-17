var donationbutton = $('.donation');
var windowsbutton = $('.windows');
// var macvstbutton = $('.macvst');
// var macaubutton = $('.macau');
var macbutton = $('.mac');
var downloadbutton = $('.download');

var body = document.body;

$('#donate-button').click(function(){
    donationbutton.addClass('active');
    body.classList.toggle('noscroll');
});

$('.close-mymodal').click(function(){
    donationbutton.removeClass('active');
    windowsbutton.removeClass('active');
    // macvstbutton.removeClass('active');
    // macaubutton.removeClass('active');
    macbutton.removeClass('active');
    downloadbutton.removeClass('active');
    body.classList.toggle('noscroll');
});

$('#windows-button').click(function(){
    windowsbutton.addClass('active');
});

// $('#macvst-button').click(function(){
    // macvstbutton.addClass('active');
// });

// $('#macau-button').click(function(){
    // macaubutton.addClass('active');
// });

$('#mac-button').click(function(){
    macbutton.addClass('active');
});


$('#download-button').click(function(){
    downloadbutton.addClass('active');
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
        url: 'https://t0nit0rmx.github.io/ld/ToneZ_x64_1.1.1_Setup.zip',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'ToneZ_x64_1.1.1_Setup.zip';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    });
});



// $('#macvst-button').on('click', function () {
    // $.ajax({
        // url: 'https://t0nit0rmx.github.io/ld/ToneZ_1.1_MacOS_VST.zip',
        // method: 'GET',
        // xhrFields: {
            // responseType: 'blob'
        // },
        // success: function (data) {
            // var a = document.createElement('a');
            // var url = window.URL.createObjectURL(data);
            // a.href = url;
            // a.download = 'ToneZ_1.1_MacOS_VST.zip';
            // a.click();
            // window.URL.revokeObjectURL(url);
        // }
    // });
// });


// $('#macau-button').on('click', function () {
    // $.ajax({
        // url: 'https://t0nit0rmx.github.io/ld/ToneZ_1.1_MacOS_AU.zip',
        // method: 'GET',
        // xhrFields: {
            // responseType: 'blob'
        // },
        // success: function (data) {
            // var a = document.createElement('a');
            // var url = window.URL.createObjectURL(data);
            // a.href = url;
            // a.download = 'ToneZ_1.1_MacOS_VST.zip';
            // a.click();
            // window.URL.revokeObjectURL(url);
        // }
    // });
// });


// $('#macvst-button').on('click', function () {
    // setTimeout( function() { window.open('https://drive.google.com/uc?export=download&id=1z7PO3ZZzT1YS6vOLJvJTgCfRPPLt5s8h','_blank');
    // }, 5000 );
// });

// $('#macau-button').on('click', function () {
    // setTimeout( function() { window.open('https://drive.google.com/uc?export=download&id=17DlwyKtiZvUpUgwsttY7lZijz2ftfKpf','_blank');
    // }, 5000 );
// });


$('#mac-button').on('click', function () {
    setTimeout( function() { window.open('https://drive.google.com/uc?export=download&id=1rYHf1qQPhLUQbUnH9E26X1eqXlFp5CPH','_blank');
    }, 5000 );
});

function delay (URL) {
    setTimeout( function() { window.open(
  URL,
  '_blank'
); }, 5000 );
}