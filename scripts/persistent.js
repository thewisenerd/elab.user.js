(function() {
	'use strict'

	var urls = [
		"http://care.srmuniv.ac.in/*/code/flag.checker.php"
	];

	var response = function() {
		return { cancel: true };
	};

	browser.webRequest.onBeforeRequest.addListener(response, { urls: urls }, ['blocking']);

})();
