webpackJsonp([15], {
  298: function(o, c, i) {
    'use strict';
    function n(o) {
      (p = 450 + parseInt(o)),
        $('#cover-bg').css('background-position', p + 'px ' + s + 'px');
    }
    function t(o) {
      (s = 250 + o),
        $('#cover-bg').css('background-position', p + 'px ' + s + 'px');
    }
    function e(o) {
      (r = 400 + o), $('#cover-bg').css('background-size', 'auto ' + r + 'px');
    }
    Object.defineProperty(c, '__esModule', { value: !0 });
    var p = void 0,
      s = void 0,
      r = void 0;
    (c.picRight = n), (c.picBottom = t), (c.picZoom = e);
  },
});
