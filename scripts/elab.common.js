window.esdk.styling.common = function() {
	var el;
	var u = window.esdk.u();

	var nav = document.querySelector('body > nav');

	var wrapper = nav.querySelector('.nav-wrapper');

	var links = nav.querySelectorAll('ul li a');

	var a = [];
	for (var i = 0; i < links.length; i++) {
		a.push(links[i]);
	}

	wrapper.outerHTML = "";
	delete wrapper;

	// build links
	var l = '';
	if (a.length) {
		for (var i = a.length - 1; i >= 0 ; i--) {
			if ( window.esdk.regex.home.exec(a[i].href) ) {
				continue;
			}

			var icon = null;
			if (window.esdk.regex.login.exec(a[i].href)) {
				icon = 'exit_to_app';
			}
			if (window.esdk.regex.profile.exec(a[i].href)) {
				icon = 'face';
			}
			if (window.esdk.regex.request.exec(a[i].href)) {
				icon = 'add_shopping_cart';
			}
			if (icon == null) {
				icon = 'format_list_bulleted';
			}
			l = l + '<li><a style="width: 100%" class="left" href="' + a[i].getAttribute('href') +  '" title="' + a[i].text + '"><i class="material-icons left">' + icon + '</i><span class="hide-on-large-only">' + a[i].text + '<span></a></li>'
		}
	}

	// add prev, next, question page link
	if ( window.esdk.regex.code.exec(u) ) {
		var t = ''
		var nu = new URL(u);
		var id = nu.searchParams.get('id');
		var val = nu.searchParams.get('value');
		val = parseInt(val);
		var lu = val - 1;
		var ru = (val + 1) % 100;

		if (lu < 0)
			lu = 99;

		var url_l = nu.origin + nu.pathname + '?id=' + id + '&value=' + lu.toString();
		var url_r = nu.origin + nu.pathname + '?id=' + id + '&value=' + ru.toString();

		t = t + '<li><a style="width: 100%" class="left" href="' + url_l + '" title="Previous Question"><i class="material-icons left">keyboard_arrow_left</i><span class="hide-on-large-only"><span></a></li>'
		t = t + '<li><a style="width: 100%" class="left" href="http://care.srmuniv.ac.in/computingskill/login/student/question.php" title="Question Index"><i class="material-icons left">format_list_bulleted</i><span class="hide-on-large-only"><span></a></li>'
		t = t + '<li><a style="width: 100%" class="left" href="' + url_r + '" title="Next Question"><i class="material-icons left">keyboard_arrow_right</i><span class="hide-on-large-only"><span></a></li>'

		// merge q links
		l = t + l;
	}

	// build nav
	var s = '<div id="is-elab-addon-nav"class="nav-wrapper black">';
	s = s + '<a class="brand-logo"><img></a>';
	if (a.length) {
		s = s + '<a data-activates="mobile-navbar" class="button-collapse"><i class="material-icons">menu</i></a>';
		s = s + '<ul class="right hide-on-med-and-down">';
		s = s + l;
		s = s + '</ul>'
		s = s + '<ul class="side-nav" id="mobile-navbar">'
		s = s + l;
		s = s + '</ul>'
	}
	s = s + '</div>'

	nav.innerHTML = s;

	el = nav.querySelector('.nav-wrapper a.brand-logo img');
	el.src = browser.runtime.getURL('/resources/1f984.png');

	el = nav.querySelector('.nav-wrapper a.brand-logo');
	if (!(esdk.regex.login.exec(u) || esdk.regex.home.exec(u))) {
		el.href = esdk.regex.lab.exec(u)[0] + 'login/student/home.php';
	}
};
