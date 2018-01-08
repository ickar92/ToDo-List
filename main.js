$(document).ready(function() {
	$('button').click(function() {
		var item = $('input').val();
		$('#list').append('<li>' + item + ' <a href="">x</a></li>')
		$('input').val(' ');
	});

	$('#list').on('click', 'a', function (e) {
	    e.preventDefault();
	    $(this).parent().remove();
	});
});
