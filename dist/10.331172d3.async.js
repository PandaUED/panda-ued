webpackJsonp([10], {
  302: function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(t) {
        switch (t) {
          case '1':
            $('#pop-content').removeClass('pop-right'),
              $('#pop-content').addClass('pop-left'),
              '1';
            break;
          case '2':
            $('#pop-content').removeClass('pop-left'),
              $('#pop-content').addClass('pop-right'),
              '2';
        }
        $('#tag-title').bind('input propertychange', function() {
          $('#tag').html($(this).val());
        }),
          $('#title').bind('input propertychange', function() {
            $('#cover-content').html($(this).val());
          });
      }),
      (t.exports = e.default);
  },
});
