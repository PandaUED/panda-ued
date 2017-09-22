export default () => {
  $('.group').show();
  var docObj = document.getElementById('cover-upload');
  var imageUrl = window.URL.createObjectURL(docObj.files[0]);
  convertImgToBase64(imageUrl, base64Img => {
    $('#cover-bg')
      .css('background-image', 'url(' + base64Img + ')')
      .css('background-size', 'auto' + ' ' + '400px');
  });
};

function convertImgToBase64(url, callback, outputFormat) {
  var canvas = document.createElement('CANVAS');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL(outputFormat || 'image/png');
    callback.call(this, dataURL);
    // Clean up
    canvas = null;
  };
  img.src = url;
}
