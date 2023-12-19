// var tonezv2_windowsbutton = $('.tonezv2-windows');
// var tonezv2_macbutton = $('.tonezv2-mac');
var tonezv2_downloadbutton = $('.tonezv2-download');
var tonezv2_univpopup = $('.tonezv2-univ');
var body = document.body;
const OS_detector = document.querySelector(".OS-detector");
const OS_detector_link = document.querySelector(".OS-detector-link");

	const downloadBtn_win = document.querySelector(".download-Btn_win");
	
	const countdown = document.querySelector(".countdown");
	const pleaseWaitText = document.querySelector(".pleaseWait-text");
	const manualDownloadText = document.querySelector(".manualDownload-text");
	const manualDownloaLink = document.querySelector(".manualDownload-link");

	var download_href = ""

$('.close-mymodal').click(function(){
    // tonezv2_windowsbutton.removeClass('active');
    // tonezv2_linuxbutton.removeClass('active');
    // tonezv2_macbutton.removeClass('active');
    tonezv2_downloadbutton.removeClass('active');
    tonezv2_univpopup.removeClass('active');
    body.classList.remove('noscroll');
});

$('#tonezv2-windows-button').click(function(){
	tonezv2_downloadbutton.removeClass('active');
    // tonezv2_windowsbutton.addClass('active');
    tonezv2_univpopup.addClass('active');
	// OS_detector.innerHTML = "WINDOWS";
	OS_detector_link.innerHTML = "<a href=\"../ld/ToneZ_V2-x64-2.0.0_Setup.zip\" data-gtmclickid=\"forceDL_WIN\"><h6>Download didn't start ?</h6></a>    ";
	downloadUrl("../ld/ToneZ_V2-x64-2.0.0_Setup.zip");
});

$('#tonezv2-mac-button').click(function(){
	tonezv2_downloadbutton.removeClass('active');
    // tonezv2_macbutton.addClass('active');
    tonezv2_univpopup.addClass('active');
	// OS_detector.innerHTML = "MAC OS";
	OS_detector_link.innerHTML = "<a href=\"https://www.dropbox.com/scl/fi/3ncjwlmom0rqb6kytd8hr/ToneZ_V2-2.0.0_MacOS.dmg.zip?rlkey=uond60kz1mbr4vsq295ed867c&dl=1\" data-gtmclickid=\"forceDL_MAC\"><h6>Download didn't start ?</h6></a>    ";
	downloadUrl("https://www.dropbox.com/scl/fi/3ncjwlmom0rqb6kytd8hr/ToneZ_V2-2.0.0_MacOS.dmg.zip?rlkey=uond60kz1mbr4vsq295ed867c&dl=1");
});

$('#tonezv2-linux-button').click(function(){
	tonezv2_downloadbutton.removeClass('active');
    // tonezv2_macbutton.addClass('active');
    tonezv2_univpopup.addClass('active');
	// OS_detector.innerHTML = "MAC OS";
	OS_detector_link.innerHTML = "<a href=\"../ld/ToneZ_V2-x64-2.0.0_Linux.zip\" data-gtmclickid=\"forceDL_LINUX\"><h6>Download didn't start ?</h6></a>    ";
	downloadUrl("../ld/ToneZ_V2-x64-2.0.0_Linux.zip");
});




$('#tonezv2-download-button').click(function(){
    tonezv2_downloadbutton.addClass('active');
    body.classList.toggle('noscroll');
});






function downloadUrl(download_href){
	var timeLeft = 10;
    console.log(download_href);
		
		countdown.innerHTML = "Your download of ToneZ will start in <span>" + timeLeft + "</span> seconds.";

		
		var downloadTimer = setInterval(function timeCount(){
			timeLeft -= 1;
			countdown.innerHTML = "Your download of ToneZ will start in <span>" + timeLeft + "</span> seconds.";
			
			if (timeLeft <= 0){
				clearInterval(downloadTimer);
				pleaseWaitText.style.display = "block";
				// let download_href = "https://t0nit0rmx.github.io/ld/ToneZ_x64_1.3_Setup.zip";
				window.location.href = download_href;
				
				setTimeout(() => {
					pleaseWaitText.style.display="none";
					manualDownloadText.style.display="block";
				}, 4000);
			}
		}, 1000);
}



