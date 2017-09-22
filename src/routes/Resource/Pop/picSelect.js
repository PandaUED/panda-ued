/* eslint-disable */
export default value => {
  let emo;
  switch (value) {
    case '1':
      $('#pop-content').removeClass('pop-right');
      $('#pop-content').addClass('pop-left');
      emo = '1';
      break;
    case '2':
      $('#pop-content').removeClass('pop-left');
      $('#pop-content').addClass('pop-right');
      emo = '2';
      break;
  }
  // 变文字
  $('#tag-title').bind('input propertychange', function() {
    $('#tag').html($(this).val());
  });
  $('#title').bind('input propertychange', function() {
    $('#cover-content').html($(this).val());
  });
};
