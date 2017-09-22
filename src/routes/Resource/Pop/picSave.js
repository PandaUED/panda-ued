/* eslint-disable */
export default () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  $('#factory').addClass('cutting');
  html2canvas($('#pop'), {
    allowTaint: false,
    taintTest: false,
    onrendered: canvas => {
      const dataUrl = canvas.toDataURL();
      const newImg = $('img').attr('src', dataUrl);
      $('.ant-alert').show();
      $('#factory').append(newImg);
    },
  });
  $('#factory').removeClass('cutting');
};
