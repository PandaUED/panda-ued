/* eslint-disable */
export default () => {
  $('.group').show();
  const docObj = document.getElementById('cover-upload');
  const imageUrl = window.URL.createObjectURL(docObj.files[0]);
  convertImgToBase64(imageUrl, base64Img => {
    $('#cover-bg').css('background-image', `url(${base64Img})`);
  });
};

function convertImgToBase64(url, callback, outputFormat) {
  let canvas = document.createElement('CANVAS');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat || 'image/png');
    callback.call(this, dataURL);
    // Clean up
    canvas = null;
  };
  img.src = url;
}
