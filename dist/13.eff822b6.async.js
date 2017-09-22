webpackJsonp([13], {
  311: function(t, e, n) {
    'use strict';
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var a = n(22),
      l = r(a),
      i = (0, l.default)(
        ['\n\tmargin-left: 2rem;\n\t'],
        ['\n\tmargin-left: 2rem;\n\t']
      ),
      d = (0, l.default)(
        ['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-top: 3rem;\n\t'],
        ['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-top: 3rem;\n\t']
      ),
      u = (0, l.default)(
        [
          '\n\tdisplay: flex;\n\tpadding: 2rem;\n\twidth: 400px;\n\tbox-shadow: 0 6px 32px 0 rgba(0,0,0,.08);\n\tmargin-right: 2rem;\n\tmargin-bottom: 2rem;\n\t',
        ],
        [
          '\n\tdisplay: flex;\n\tpadding: 2rem;\n\twidth: 400px;\n\tbox-shadow: 0 6px 32px 0 rgba(0,0,0,.08);\n\tmargin-right: 2rem;\n\tmargin-bottom: 2rem;\n\t',
        ]
      ),
      o = (0, l.default)(
        [
          '\n\tfont-size: 1.2rem;\n\tfont-weight: 600;\n\tcolor: #333;\n\tmargin-bottom: .5rem;\n\t',
        ],
        [
          '\n\tfont-size: 1.2rem;\n\tfont-weight: 600;\n\tcolor: #333;\n\tmargin-bottom: .5rem;\n\t',
        ]
      ),
      m = (0, l.default)(
        ['\n\tcolor: #999;\n\tfont-size: .9rem;\n\t'],
        ['\n\tcolor: #999;\n\tfont-size: .9rem;\n\t']
      ),
      f = (0, l.default)(
        [
          '\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tbackground: url(/img/icon-',
          '.png);\n\t\tbackground-size: 100%;\n\t\tmargin-right: 1rem;\n\t\tborder-radius: 16%;\n\t',
        ],
        [
          '\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tbackground: url(/img/icon-',
          '.png);\n\t\tbackground-size: 100%;\n\t\tmargin-right: 1rem;\n\t\tborder-radius: 16%;\n\t',
        ]
      ),
      c = n(0),
      g = r(c),
      p = n(23),
      s = r(p),
      x = n(39),
      h = n(63);
    (e.default = function() {
      var t = s.default.div(i),
        e = s.default.div(d),
        n = s.default.a(u),
        r = s.default.div(o),
        a = s.default.div(m),
        l = function(t) {
          var e = t.url,
            l = t.icon,
            i = t.title,
            d = t.desc,
            u = s.default.div(f, l);
          return g.default.createElement(
            n,
            { href: e },
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
        t,
        null,
        g.default.createElement(x.Markdown, {
          data:
            '# \u8d44\u6e90\u4e0b\u8f7d\n\u8fd9\u91cc\u63d0\u4f9b Panda Design \u76f8\u5173\u8bbe\u8ba1\u8d44\u6e90\u548c\u8bbe\u8ba1\u5de5\u5177\u7684\u4e0b\u8f7d\uff0c\u66f4\u591a\u8bbe\u8ba1\u8d44\u6e90\u6b63\u5728\u6574\u7406\u548c\u5b8c\u5584\u4e2d\u3002',
        }),
        g.default.createElement(
          e,
          null,
          h.DownloadList.map(function(t, e) {
            return g.default.createElement(l, {
              key: e,
              url: t.url,
              icon: t.icon,
              title: t.title,
              desc: t.desc,
            });
          })
        )
      );
    }),
      (t.exports = e.default);
  },
});
