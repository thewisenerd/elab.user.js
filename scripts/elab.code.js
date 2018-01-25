window.esdk.styling.code = function() {

	var match = esdk.regex.code.exec(window.location.href);
	var lab = match[1];

	var SupportedLanguages = [
		'c',
		'cpp',
		// 'csharp',
		// 'haskell',
		'java',
		// 'matlab',
		// 'perl',
		'python',
		// 'r',
		// 'ruby',
	];

	var flexibleLabs = [
		'daa',
		'data-structure',
		'operating-systems',
	];

	if (flexibleLabs.indexOf(lab) != -1) {
		console.log("flexilab");

		$("#selectInput").detach().appendTo('.main_div > .row > .col.question_div');

		var existing = [];

		$("#selectInput option").each(function(i, e) {
			existing.push( $(e).val() );
		});

		SupportedLanguages.forEach(function(lang) {
			if ( existing.indexOf(lang) == -1 ) {

				$('#selectInput').append($('<option>', {
					value: lang,
					text: lang.toUpperCase() + ' language'
				}));

			}
		});

		$("#selectInput").material_select();
	} // flexibleLabs

	$('body > .container').remove();

	$('body > .main_div').addClass('container');

	$('.main_div > .row > .col').each(function(index) {
		$( this ).removeClass('l4');
		$( this ).addClass('l12');
	});

	var $q = $('.main_div > .row > .col')[0];
};
window.esdk.style(window.esdk.styling.code);

window.esdk.bind(function() {

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

}, 50);
