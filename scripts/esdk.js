'use strict'
window.esdk = {};
esdk = {
	regex: {
		lab: /^https?:\/\/care\.srmuniv\.ac\.in\/([^\/]*)\//,
		login: /^https?:\/\/care\.srmuniv\.ac\.in\/[^\/]+\/(?:index\.php.*)?$/,
		home: /^https?:\/\/care\.srmuniv\.ac\.in\/[^\/]*\/login\/student\/home\.php.*$/,
		request: /^https?:\/\/care\.srmuniv\.ac\.in\/[^\/]*\/login\/student\/request\.php.*$/,
		profile: /^https?:\/\/care\.srmuniv\.ac\.in\/[^\/]+\/login\/student\/profile\/(?:index\.php.*)?$/,
		code: /^https?:\/\/care\.srmuniv\.ac\.in\/[^\/]*\/login\/student\/code\/([^\/]*)\/[^\.]*.code\.php.*$/,
	},
	bind: function(cb, delay) {
		var d = (typeof delay !== "undefined") ? delay : null;

		if (/^(comp|inter|loaded)/.test(document.readyState)) {
			if (d)
				setTimeout(cb, delay);
			else
				cb();
		} else {
			// todo: delay ???
			document.addEventListener('DOMContentLoaded', cb);
		}
	},
	u: function() {
		return window.location.href;
	},
	inject: function(d, s, u, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		console.log("injecting: " + u);
		if (d.getElementById(id)){ console.error("already injected."); return; }
		js = d.createElement(s); js.id = id;
		js.src = u;
		fjs.parentNode.insertBefore(js, fjs);
	},
	injectcss: function(d, u, id) {
		var css, head = document.getElementsByTagName('head')[0];
		console.log("injecting stylesheet: " + u);
		css = document.createElement('link');
		css.id = id;
		css.rel  = 'stylesheet';
		css.type = 'text/css';
		css.href = u;
		css.media = 'all';
		head.appendChild(css);
	},
	styling: {},
	style: function(cb) {
		cb();
	},
};
window.esdk = esdk;
