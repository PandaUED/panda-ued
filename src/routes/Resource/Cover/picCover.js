/* eslint-disable */
import './picColorpicker';
import picSelect from './picSelect';

export default () => {
  colorpicker();
  // 初始
  picSelect('1');

  $('#cover').css('background-color', $('#color-bg').val());
  $('#cover-content').css('background-color', $('#color-bg').val());
  $('#tag').css('background-color', $('#color-tag').val());
  // 变色
  $('.colorPicker-swatch').click(() => {
    $('#cover').css('background-color', $('#color-bg').val());
    $('#cover-content').css('background', $('#color-bg').val());
    $('#tag').css('background-color', $('#color-tag').val());
  });
  // 变文字
  $('#tag-title').bind('input propertychange', function() {
    $('#tag').html($(this).val());
  });
  $('#title').bind('input propertychange', function() {
    $('#cover-content').html($(this).val());
  });
};

function colorpicker() {
  if ($('.colorPicker-picker').length === 0) {
    $('.colorPicker-palette').remove();
    $('#color-bg').colorPicker();
    $('#color-tag').colorPicker();
  }
}
