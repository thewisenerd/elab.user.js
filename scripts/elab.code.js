window.esdk.styling.code = function() {
	$('body > .container').remove();

	$('body > .main_div').addClass('container');

	$('.main_div > .row > .col').each(function(index) {
		$( this ).removeClass('l4');
		$( this ).addClass('l12');
	});

	var $q = $('.main_div > .row > .col')[0];
};
window.esdk.style(window.esdk.styling.code);

/* backup? */
window.esdk.bind(function() {
	console.log("...");

	/* don't fuck with cut copy paste */
	$('body').off('cut copy paste');

	/* don't fuck with right-click */
	$('body').off('contextmenu');
}, 600);

window.esdk.bind(function() {
	console.log("...");

	/* don't fuck with cut copy paste */
	$('body').off('cut copy paste');

	/* don't fuck with right-click */
	$('body').off('contextmenu');

	window.CM = document.querySelector('#codeEditor .CodeMirror').CodeMirror;
	CM.setOption('indentWithTabs', true);
	CM.setOption('indentUnit', 4);

	function getmime(lab) {
		if (!lab)
			return 'text/x-csrc';
		if (lab == 'c')
			return 'text/x-csrc';
		if (lab == 'cpp')
			return 'text/x-c++src';
		if (lab == 'java')
			return 'text/x-java';
		if (lab == 'data-structure')
			return 'text/x-csrc';
		return 'text/x-csrc';
	}

	CM.setOption('mode', getmime(window.esdk.regex.code.exec(window.location.href)[1]));
	console.log("set mode to: " + CM.getOption('mode'));

	CM.setOption('extraKeys', null);
	// CM.setOption('keyMap', '');
	

}, 300);