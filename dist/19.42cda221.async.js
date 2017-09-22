webpackJsonp([19], {
  308: function(e, n, t) {
    'use strict';
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      return { libPage: e.libPage, loading: e.loading.global };
    }
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = (t(294), t(295)),
      i = a(r),
      o = t(22),
      d = a(o),
      u = (0, d.default)(
        [
          '\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2rem 0 0 1rem;\n  ',
        ],
        [
          '\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2rem 0 0 1rem;\n  ',
        ]
      ),
      f = (0, d.default)(
        [
          '\n    width: 280px;\n    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.06);\n    margin: 1rem;\n    transition: all 0.5s ease-out;\n    color: #444;\n    &:hover {\n      box-shadow: 0 12px 44px 0 rgba(0, 0, 0, 0.12);\n    }\n  ',
        ],
        [
          '\n    width: 280px;\n    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.06);\n    margin: 1rem;\n    transition: all 0.5s ease-out;\n    color: #444;\n    &:hover {\n      box-shadow: 0 12px 44px 0 rgba(0, 0, 0, 0.12);\n    }\n  ',
        ]
      ),
      p = (0, d.default)(
        [
          '\n    padding: 1.5rem;\n    font-weight: 500;\n    font-size: 1.1rem;\n  ',
        ],
        [
          '\n    padding: 1.5rem;\n    font-weight: 500;\n    font-size: 1.1rem;\n  ',
        ]
      ),
      g = (0, d.default)(
        [
          '\n        width: 100%;\n        height: 240px;\n        background: url(',
          ');\n        background-size: 100% auto;\n        border-bottom: 1px solid #f8f8f8;\n      ',
        ],
        [
          '\n        width: 100%;\n        height: 240px;\n        background: url(',
          ');\n        background-size: 100% auto;\n        border-bottom: 1px solid #f8f8f8;\n      ',
        ]
      ),
      s = t(0),
      m = a(s),
      x = t(109),
      c = t(40),
      b = t(84),
      h = a(b),
      w = t(23),
      v = a(w),
      k = t(39);
    (n.default = (0, x.connect)(l)(function(e) {
      var n = e.loading,
        t = e.libPage,
        a = e.location,
        l = v.default.div(u),
        r = (0, v.default)(c.Link)(f),
        o = v.default.div(p),
        d = void 0;
      return (
        n ||
          (d = t.map(function(e, n) {
            var t = v.default.div(
              g,
              h.default.join('/api/data/', e.url, 'cover.png')
            );
            return m.default.createElement(
              r,
              {
                key: n,
                to: h.default.join(
                  '/preview',
                  a.pathname.split('/')[2],
                  e.title
                ),
              },
              m.default.createElement(t, null),
              m.default.createElement(o, null, e.title)
            );
          })),
        m.default.createElement(
          l,
          null,
          m.default.createElement(i.default, {
            style: { flex: 1, lineHeight: '720px' },
            spinning: n,
            size: 'large',
          }),
          d,
          m.default.createElement(k.Comment, null)
        )
      );
    })),
      (e.exports = n.default);
  },
});
