
$(document).ready(function(){
	$('#inject-css').on('click', function(){
		console.log('clicked');
		var path = chrome.extension.getURL('bootstrap.css');
		$('head').append('<link rel="stylesheet" href=' + 'path' + '>');
		console.log(path);
	});
})