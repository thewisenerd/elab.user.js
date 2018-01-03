window.esdk.styling.home = function() {
	var el;

	$('body > .container > .card > p#top-bar').remove();

	$('body > .container > .card > .card-content').find('p, br').each(function(index) {
		$( this ).remove();
	});

};
window.esdk.style(window.esdk.styling.home);

(function() {
	var ua = navigator.userAgent;
	var ver = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||navigator.userAgent.match(/Firefox\/([0-9]+)\./);

	// fix random NaN sessions with Firefox
	if (ver && ver[0].startsWith("Firefox/") && parseInt(ver[1]) >= "59") {
		$('.choice').off('click');
		$('.choice').on('click', function() {
			var course = $(this).find('.card-content .card-title').text();
			$.post('home.helper.php', { text: course })
				.done(function() {
					window.location = 'question.php';
				}).fail(function() {
					window.Materialize.toast('action failed. try again.', 4000);
				});
		});
	}
})();

