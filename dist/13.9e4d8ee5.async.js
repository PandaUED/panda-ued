webpackJsonp([13], {
  311: function(e, n, t) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(n, '__esModule', { value: !0 });
    var a = t(22),
      l = r(a),
      i = (0, l.default)(['margin-left: 2rem;'], ['margin-left: 2rem;']),
      d = (0, l.default)(
        [
          '\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 3rem;\n  ',
        ],
        [
          '\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 3rem;\n  ',
        ]
      ),
      u = (0, l.default)(
        [
          '\n    display: flex;\n    padding: 2rem;\n    width: 400px;\n    box-shadow: 0 6px 32px 0 rgba(0, 0, 0, 0.08);\n    margin-right: 2rem;\n    margin-bottom: 2rem;\n  ',
        ],
        [
          '\n    display: flex;\n    padding: 2rem;\n    width: 400px;\n    box-shadow: 0 6px 32px 0 rgba(0, 0, 0, 0.08);\n    margin-right: 2rem;\n    margin-bottom: 2rem;\n  ',
        ]
      ),
      o = (0, l.default)(
        [
          '\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #333;\n    margin-bottom: 0.5rem;\n  ',
        ],
        [
          '\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #333;\n    margin-bottom: 0.5rem;\n  ',
        ]
      ),
      m = (0, l.default)(
        ['\n    color: #999;\n    font-size: 0.9rem;\n  '],
        ['\n    color: #999;\n    font-size: 0.9rem;\n  ']
      ),
      f = (0, l.default)(
        [
          '\n      width: 50px;\n      height: 50px;\n      background: url(/img/icon-',
          '.png);\n      background-size: 100%;\n      margin-right: 1rem;\n      border-radius: 16%;\n    ',
        ],
        [
          '\n      width: 50px;\n      height: 50px;\n      background: url(/img/icon-',
          '.png);\n      background-size: 100%;\n      margin-right: 1rem;\n      border-radius: 16%;\n    ',
        ]
      ),
      c = t(0),
      g = r(c),
      p = t(23),
      s = r(p),
      x = t(39),
      h = t(63);
    (n.default = function() {
      var e = s.default.div(i),
        n = s.default.div(d),
        t = s.default.a(u),
        r = s.default.div(o),
        a = s.default.div(m),
        l = function(e) {
          var n = e.url,
            l = e.icon,
            i = e.title,
            d = e.desc,
            u = s.default.div(f, l);
          return g.default.createElement(
            t,
            { href: n },
            g.default.createElement(u, null),
            g.default.createElement(
              'div',
              null,
              g.default.createElement(r, null, i),
              g.default.createElement(a, null, d)
            )
          );
        };
      return g.default.createElement(
        e,
        null,
        g.default.createElement(x.Markdown, {
          data:
            '# \u8d44\u6e90\u4e0b\u8f7d\n\u8fd9\u91cc\u63d0\u4f9b Panda Design \u76f8\u5173\u8bbe\u8ba1\u8d44\u6e90\u548c\u8bbe\u8ba1\u5de5\u5177\u7684\u4e0b\u8f7d\uff0c\u66f4\u591a\u8bbe\u8ba1\u8d44\u6e90\u6b63\u5728\u6574\u7406\u548c\u5b8c\u5584\u4e2d\u3002',
        }),
        g.default.createElement(
          n,
          null,
          h.DownloadList.map(function(e, n) {
            return g.default.createElement(l, {
              key: n,
              url: e.url,
              icon: e.icon,
              title: e.title,
              desc: e.desc,
            });
          })
        )
      );
    }),
      (e.exports = n.default);
  },
});
