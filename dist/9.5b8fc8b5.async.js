webpackJsonp([9], {
  303: function(e, t, n) {
    'use strict';
    function o(e, t, n) {
      var o = document.createElement('CANVAS'),
        a = o.getContext('2d'),
        c = new Image();
      (c.crossOrigin = 'Anonymous'),
        (c.onload = function() {
          (o.height = c.height), (o.width = c.width), a.drawImage(c, 0, 0);
          var e = o.toDataURL(n || 'image/png');
          t.call(this, e), (o = null);
        }),
        (c.src = e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function() {
        $('.group').show();
        var e = document.getElementById('cover-upload');
        o(window.URL.createObjectURL(e.files[0]), function(e) {
          $('#cover-bg').css('background-image', 'url(' + e + ')');
        });
      }),
      (e.exports = t.default);
  },
});
