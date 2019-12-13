$(document).ready(function() {
	var refresh = function() {
		$('#events').html('');
		$.get('/eventdata/meta', function(data) {
			var sds = data.split('\n');
			for (var i in sds) {
				if (sds[i].length < 2) {
					continue;
				}
				var ele = $('#sample_event').clone();
				ele.attr('href', '/events/view.html?id=' + sds[i]);
				ele.attr('id', '');
				ele.find('li').html(sds[i]);
				$('#events').prepend(ele);
			}
		});
	};
	refresh();
	$('#ref').click(refresh);
});
