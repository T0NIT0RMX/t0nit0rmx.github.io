var tonezv1_windowsbutton = $('.tonezv1-windows');
var tonezv1_macbutton = $('.tonezv1-mac');
var tonezv1_downloadbutton = $('.tonezv1-download');
var body = document.body;

$('.close-mymodal').click(function(){
    tonezv1_windowsbutton.removeClass('active');
    tonezv1_macbutton.removeClass('active');
    tonezv1_downloadbutton.removeClass('active');
    body.classList.remove('noscroll');
});

$('#tonezv1-windows-button').click(function(){
    tonezv1_windowsbutton.addClass('active');
});

$('#tonezv1-mac-button').click(function(){
    tonezv1_macbutton.addClass('active');
});


$('#tonezv1-download-button').click(function(){
    tonezv1_downloadbutton.addClass('active');
    body.classList.toggle('noscroll');
});


$('#tonezv1-windows-button').on('click', function () {
    $.ajax({
        url: 'https://www.retornz.com/ld/ToneZ_x64_1.3_Setup.zip',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'ToneZ_x64_1.3_Setup.zip';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#tonezv1-mac-button').on('click', function () {
    setTimeout( function() { window.open('https://drive.google.com/uc?id=1RhXqa-J1ACCXjgfqeIoEKH-XISGlZ69K&export=download','_blank');
    }, 5000 );
});

function delay (URL) {
    setTimeout( function() { window.open(
  URL,
  '_blank'
); }, 5000 );
}
