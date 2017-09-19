let right: 450,
    bottom: 250,
    zoom: 400;

function picRight(value) {
	right = 450 + parseInt(value);
	$('#cover-bg').css('background-position', right + 'px' + ' ' + bottom + 'px');
}

function picBottom(value) {
	bottom = 250 + value;
	$('#cover-bg').css('background-position', right + 'px' + ' ' + bottom + 'px');
}

function picZoom(value) {
	zoom = 400 + value;
	$('#cover-bg').css("background-size", 'auto' + ' ' + zoom + 'px');
}

export {picRight as picRight, picBottom as picBottom, picZoom as picZoom}