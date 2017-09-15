export default () => {
	document.documentElement.scrollTop = document.body.scrollTop = 0;
	html2canvas($("#cover"), {
		allowTaint: false,
		taintTest : false,
		onrendered: (canvas) => {
			let dataUrl = canvas.toDataURL();
			let newImg  = $('img').attr('src', dataUrl);
			$('.ant-alert').show();
			$('#factory').append(newImg);
		}
	});
}