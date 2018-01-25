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

		var $s = $("#selectInput").detach();
		var existing = [];

		$s.find("option").each(function(i, e) {
			existing.push( $(e).val() );
		});

		SupportedLanguages.forEach(function(lang) {
			if ( existing.indexOf(lang) == -1 ) {

				$s.append($('<option>', {
					value: lang,
					text: lang.toUpperCase() + ' language'
				}));

			}
		});

		$('.main_div > .row > .col.question_div').append( $('<div class="input-field" />').append( $s ) );

		$s.material_select();
	} // flexibleLabs

	$('body > .container').remove();

	$('body > .main_div').addClass('container');

	$('.main_div > .row > .col').each(function(index) {
		$( this ).removeClass('l4');
		$( this ).addClass('l12');
	});

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

	var $q = $('.main_div > .row > .col.question_div > .card > ul.collection > li');
	var $testcases = [ $q[3], $q[4] ]; // TODO: do index-offset based searching here

	$testcases.forEach(function(el) {
		$(el).find("pre").each(function(idx, pre) {
			var str = $(pre).html();
			var regex_nlbr = /<br\s*[\/]?>/gi;
			var regex_mark = /<[\/]?mark>/gi;
			$(pre).html(str.replace(regex_nlbr, "").replace(regex_mark, ""));
			$(pre).addClass('testcasemd');
		});
	});

}, 50);
