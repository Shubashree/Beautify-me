$(document).ready(function(){
	$('#inject-css').on('click', function(){
		chrome.tabs.insertCSS({"file":"external/bootstrap.css"}, function(){
			window.close();
		});
	});
});