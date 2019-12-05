$(document).ready(function() {
	var eid = window.location.search.substr(4);
	$('#eid').html(eid);
	$.get('/events/' + eid + '/meta', function(data) {
		var sds = data.split('\n');
		for (var i in sds) {
			if (sds[i].length < 2) {
				continue;
			}
			img_elements = sds[i].split(' ');
			var ele = $('#sample_tr').clone();
			ele.find('#origimg').attr('src', '/events/' + eid + '/' + img_elements[0] + 'orig.jpg');
			ele.find('#diffimg').attr('src', '/events/' + eid + '/' + img_elements[0] + 'diff.jpg');
			ele.find('#hints').html('Delta: ' + img_elements[1] + '<br/>Process time: ' + img_elements[2]);
			ele.attr('id', '');
			console.log(ele);
			$('#imgs').append(ele);
		}
	});
});
