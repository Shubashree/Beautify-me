$(document).ready(function(){
	$('#inject-css').on('click', function(){
		console.log('clicked');
		chrome.tabs.query({
			"currentWindow": true,
			"active": true
		}, function(tabs){
			chrome.tabs.insertCSS(tabs[0],'bootstrap.css');
			console.log('from inside the callback of insertCSS');
		})
	});
})