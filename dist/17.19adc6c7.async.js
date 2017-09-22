webpackJsonp([17], {
  297: function(t, e, o) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function() {
        (document.documentElement.scrollTop = document.body.scrollTop = 0),
          $('#factory').addClass('cutting'),
          html2canvas($('#cover'), {
            allowTaint: !1,
            taintTest: !1,
            onrendered: function(t) {
              var e = t.toDataURL(),
                o = $('img').attr('src', e);
              $('.ant-alert').show(), $('#factory').append(o);
            },
          }),
          $('#factory').removeClass('cutting');
      }),
      (t.exports = e.default);
  },
});
