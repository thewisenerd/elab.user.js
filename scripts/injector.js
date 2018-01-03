(function() {
	'use strict'

	var url = window.location.href;

	// 'tis the homepage
	if (esdk.regex.lab.exec(url) == null) {
		console.log('homepage');
		return;
	}

	if (document.querySelector('esdk')) {
		console.error("already morphed. running dev mode with live reload?");
		return;
	}

	console.log("url: " + window.location.href);
	esdk.inject(document, "script", browser.runtime.getURL('/scripts/esdk.js'), 'esdk');

	esdk.style(window.esdk.styling.common);
	esdk.injectcss(document, browser.runtime.getURL('/css/theme.css'), 'esdk-css');

	esdk.inject(document, "script", browser.runtime.getURL('/scripts/elab.common.client.js'), 'esdk-common');

	if (esdk.regex.login.exec(url)) {
		esdk.inject(document, "script", browser.runtime.getURL('/scripts/elab.login.js'), 'esdk-login');
	} else if (esdk.regex.home.exec(url)) {
		esdk.inject(document, "script", browser.runtime.getURL('/scripts/elab.home.js'), 'esdk-home');
	} else if (esdk.regex.code.exec(url)) {
		esdk.inject(document, "script", browser.runtime.getURL('/scripts/elab.code.js'), 'esdk-home');
	}

	var es = document.createElement('esdk');
	document.getElementsByTagName('head')[0].appendChild(es);
})();
