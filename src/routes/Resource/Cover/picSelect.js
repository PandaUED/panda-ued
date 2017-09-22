export default value => {
  let emo;
  switch (value) {
    case '1':
      $('#tag-title').val('二发涨姿势');
      $('#color-bg').val('#BE60B1');
      $('#color-tag').val('#5DCE89');
      emo = '1';
      break;
    case '2':
      $('#tag-title').val('二发带你飞');
      $('#color-bg').val('#88d5ec');
      $('#color-bg').change;
      $('#color-tag').val('#ffbc1c');
      emo = '2';
      break;
    case '3':
      $('#tag-title').val('二发说个事');
      $('#color-bg').val('#FFBC1C');
      $('#color-tag').val('#FF6C3D');
      emo = '3';
      break;
    case '4':
      $('#tag-title').val('二发扯着淡');
      $('#color-bg').val('#FF5B62');
      $('#color-tag').val('#5090B5');
      emo = '4';
      break;
    case '5':
      $('#tag-title').val('二发说');
      $('#color-bg').val('#ff6c3d');
      $('#color-tag').val('#ffbc1c');
      emo = '1';
      break;
  }
  $('#color-bg').change();
  $('#color-tag').change();
  $('#tag-title').change();
  $('#tag').html($('#tag-title').val());
  $('#cover-bg').css('background-image', 'url(/img/tools/emo/' + emo + '.png)');
  $('#cover').css('background-color', $('#color-bg').val());
  $('#cover-content').css('background-color', $('#color-bg').val());
  $('#tag').css('background-color', $('#color-tag').val());
};
