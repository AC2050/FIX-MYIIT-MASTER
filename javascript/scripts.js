jQuery(function($) {
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
	$('#tools-jump').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('html').toggleClass('has-toolbar');
		$('#content').on('click', function(e) {
			$('html').removeClass('has-toolbar');
		});
	});
});