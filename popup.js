$(document).ready(function(){
	$('#inject-css').on('click', function(){
		chrome.tabs.insertCSS({"file":"bootstrap.css"});
	});
});