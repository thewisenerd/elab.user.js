window.esdk.styling.login = function() {
	var el;

	el = document.querySelector('body > .container .card .login')
	if (el) {
		el.innerHTML = 'eLab';
		el.classList.add('center');

		el.classList.remove('indigo');
		el.classList.add('black');

		el.style.fontWeight = 300;
	}

	el = document.querySelector('body > nav > .nav-wrapper a');
	if (el)
		el.removeAttribute('href');
};
window.esdk.style(window.esdk.styling.login);
