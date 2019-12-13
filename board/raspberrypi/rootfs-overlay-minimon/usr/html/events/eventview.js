$(document).ready(function() {
	var eid = window.location.search.substr(4);
	$('#eid').html(eid);
	$.get('/eventdata/' + eid + '/meta', function(data) {
		var sds = data.split('\n');
		var wid = Math.min(600, Math.floor(window.innerWidth / 2 - 10));
		wid = 'width: ' + wid + 'px;';
		for (var i in sds) {
			if (sds[i].length < 2) {
				continue;
			}
			img_elements = sds[i].split(' ');
			var ele = $('#sample_tr').clone();
			ele.find('#origimg').attr('src', '/eventdata/' + eid + '/' + img_elements[0] + 'orig.jpg');
			ele.find('#origimg').attr('style', wid);
			ele.find('#diffimg').attr('src', '/eventdata/' + eid + '/' + img_elements[0] + 'diff.jpg');
			ele.find('#diffimg').attr('style', wid);
			ele.attr('id', '');
			$('#imgs').append(ele);
		}
	});
});
