webpackJsonp([19], {
  308: function(t, e, n) {
    'use strict';
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function l(t) {
      return { libPage: t.libPage, loading: t.loading.global };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = (n(294), n(295)),
      i = a(r),
      o = n(22),
      d = a(o),
      u = (0, d.default)(
        [
          '\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: 2rem 0 0 1rem;\n\t',
        ],
        [
          '\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: 2rem 0 0 1rem;\n\t',
        ]
      ),
      f = (0, d.default)(
        [
          '\n\twidth: 280px;\n\tbox-shadow:0 4px 24px 0 rgba(0,0,0,.06);\n\tmargin:1rem;\n\ttransition: all .5s ease-out;\n\tcolor: #444;\n\t&:hover{\n\tbox-shadow:0 12px 44px 0 rgba(0,0,0,.12);\n\t}\n\t',
        ],
        [
          '\n\twidth: 280px;\n\tbox-shadow:0 4px 24px 0 rgba(0,0,0,.06);\n\tmargin:1rem;\n\ttransition: all .5s ease-out;\n\tcolor: #444;\n\t&:hover{\n\tbox-shadow:0 12px 44px 0 rgba(0,0,0,.12);\n\t}\n\t',
        ]
      ),
      p = (0, d.default)(
        ['\n\tpadding:1.5rem;\n\tfont-weight: 500;\n\tfont-size: 1.1rem;\n\t'],
        ['\n\tpadding:1.5rem;\n\tfont-weight: 500;\n\tfont-size: 1.1rem;\n\t']
      ),
      g = (0, d.default)(
        [
          '\n\t\twidth: 100%;\n\t\theight: 240px;\n\t\tbackground: url(',
          ');\n\t\tbackground-size: 100% auto ;\n\t\tborder-bottom: 1px solid #f8f8f8;\n\t\t',
        ],
        [
          '\n\t\twidth: 100%;\n\t\theight: 240px;\n\t\tbackground: url(',
          ');\n\t\tbackground-size: 100% auto ;\n\t\tborder-bottom: 1px solid #f8f8f8;\n\t\t',
        ]
      ),
      s = n(0),
      m = a(s),
      x = n(109),
      c = n(40),
      b = n(84),
      h = a(b),
      w = n(23),
      v = a(w),
      k = n(39);
    (e.default = (0, x.connect)(l)(function(t) {
      var e = t.loading,
        n = t.libPage,
        a = t.location,
        l = v.default.div(u),
        r = (0, v.default)(c.Link)(f),
        o = v.default.div(p),
        d = void 0;
      return (
        e ||
          (d = n.map(function(t, e) {
            var n = v.default.div(
              g,
              h.default.join('/api/data/', t.url, 'cover.png')
            );
            return m.default.createElement(
              r,
              {
                key: e,
                to: h.default.join(
                  '/preview',
                  a.pathname.split('/')[2],
                  t.title
                ),
              },
              m.default.createElement(n, null),
              m.default.createElement(o, null, t.title)
            );
          })),
        m.default.createElement(
          l,
          null,
          m.default.createElement(i.default, {
            style: { flex: 1, lineHeight: '720px' },
            spinning: e,
            size: 'large',
          }),
          d,
          m.default.createElement(k.Comment, null)
        )
      );
    })),
      (t.exports = e.default);
  },
});
