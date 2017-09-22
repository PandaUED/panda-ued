webpackJsonp([3, 7, 25], {
  116: function(e, t, i) {
    'use strict';
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e) {
      return { preview: e.preview, loading: e.loading.global };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (i(950), i(45)),
      o = a(r),
      n = (i(294), i(295)),
      l = a(n),
      c = i(22),
      d = a(c),
      h = i(176),
      u = a(h),
      p = i(3),
      m = a(p),
      f = i(6),
      v = a(f),
      g = i(4),
      b = a(g),
      y = i(5),
      x = a(y),
      S = (0, d.default)(
        [
          '\n      width: 3rem;\n      height: 3rem;\n      cursor: pointer;\n      border-radius: 50%;\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: ',
          ';\n      position: fixed;\n      bottom: 2rem;\n      right: 2rem;\n      z-index: 9999999;\n    ',
        ],
        [
          '\n      width: 3rem;\n      height: 3rem;\n      cursor: pointer;\n      border-radius: 50%;\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: ',
          ';\n      position: fixed;\n      bottom: 2rem;\n      right: 2rem;\n      z-index: 9999999;\n    ',
        ]
      ),
      z = (0, d.default)([''], ['']),
      w = (0, d.default)(
        [
          '\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 999999;\n      ',
        ],
        [
          '\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 999999;\n      ',
        ]
      ),
      $ = i(109),
      I = i(84),
      C = a(I),
      j = i(0),
      k = a(j),
      D = i(23),
      T = a(D),
      R = i(39),
      N = i(937),
      E = a(N),
      O = i(310),
      L = a(O),
      P = (function(e) {
        function t(e) {
          (0, m.default)(this, t);
          var i = (0, b.default)(
            this,
            (t.__proto__ || (0, u.default)(t)).call(this, e)
          );
          return (
            (i.state = { fullscreen: !1 }), (i.onClick = i.onClick.bind(i)), i
          );
        }
        return (
          (0, x.default)(t, e),
          (0, v.default)(t, [
            {
              key: 'onClick',
              value: function() {
                this.setState({ fullscreen: !this.state.fullscreen });
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.location,
                  i = e.preview,
                  a = e.loading,
                  s = C.default.join(
                    '/api/data',
                    t.pathname.replace('/preview/', '/library/'),
                    '/'
                  ),
                  r = decodeURI(s);
                a ||
                  setTimeout(function() {
                    return (0, L.default)(i, r);
                  }, 100);
                var n = T.default.div(S, R.style.color.primary),
                  c = T.default.div(z);
                return (
                  this.state.fullscreen && (c = c.extend(w)),
                  k.default.createElement(
                    'div',
                    null,
                    k.default.createElement(
                      l.default,
                      { spinning: a, size: 'large' },
                      k.default.createElement(c, {
                        className: E.default.preview,
                        id: 'app',
                      })
                    ),
                    k.default.createElement(
                      n,
                      { onClick: this.onClick },
                      k.default.createElement(o.default, {
                        type: this.state.fullscreen ? 'shrink' : 'arrows-alt',
                      })
                    ),
                    k.default.createElement(
                      R.View,
                      null,
                      k.default.createElement(R.Comment, null)
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(k.default.Component);
    (t.default = (0, $.connect)(s)(P)), (e.exports = t.default);
  },
  310: function(e, t, i) {
    'use strict';
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s,
      r = i(964),
      o = a(r),
      n = i(11),
      l = a(n),
      c = {},
      d = navigator.language.toLocaleLowerCase(),
      h = '';
    (c['zh-cn'] = ((s = {
      'Design resolution': '\u8bbe\u8ba1\u5206\u8fa8\u7387',
      NOTES: '\u5907\u6ce8',
      PROPERTIES: '\u5c5e\u6027',
      FILLS: '\u586b\u5145',
      TYPEFACE: '\u5b57\u4f53',
      BORDERS: '\u8fb9\u6846',
      SHADOWS: '\u9634\u5f71',
      'CSS STYLE': 'CSS \u6837\u5f0f',
      EXPORTABLE: '\u5bfc\u51fa',
      Gradient: '\u6e10\u53d8',
      Color: '\u989c\u8272',
      Weight: '\u7c97\u7ec6',
      'Style name': '\u6837\u5f0f\u540d\u79f0',
      Custom: '\u81ea\u5b9a\u4e49',
      Standard: '\u6807\u51c6\u50cf\u7d20',
      'iOS Devices': 'iOS \u8bbe\u5907',
      Points: '\u6807\u51c6\u70b9',
      Retina: '\u89c6\u7f51\u819c',
      'Retina HD': '\u9ad8\u6e05\u89c6\u7f51\u819c',
      'Android Devices': '\u5b89\u5353\u8bbe\u5907',
      'Other Devices': '\u5176\u4ed6\u8bbe\u5907',
      'Ubuntu Grid': 'Ubuntu \u7f51\u683c',
      'Web View': '\u7f51\u9875',
      Scale: '\u500d\u7387',
      Unit: '\u5355\u4f4d',
      'Color format': '\u989c\u8272\u683c\u5f0f',
      'Color hex': '\u8272\u503c',
      'ARGB hex': '\u5b89\u5353\u8272\u503c',
      Save: '\u4fdd\u5b58',
      Width: '\u5bbd\u5ea6',
      Height: '\u9ad8\u5ea6',
      Top: '\u4e0a\u9762',
      Right: '\u53f3\u4fa7',
      Bottom: '\u4e0b\u9762',
      Left: '\u5de6\u4fa7',
      'Fill / Color': '\u586b\u5145 / \u989c\u8272',
      Border: '\u8fb9\u6846',
      Opacity: '\u4e0d\u900f\u660e\u5ea6',
      Radius: '\u5706\u89d2',
      Shadow: '\u5916(\u5185)\u9634\u5f71',
      Style: '\u6837\u5f0f\u540d\u79f0',
      'Font size': '\u5b57\u53f7',
      Line: '\u884c\u9ad8',
      Typeface: '\u5b57\u4f53',
      Character: '\u5b57\u95f4\u8ddd',
      Paragraph: '\u6bb5\u843d\u95f4\u8ddd',
      'Percentage of artboard':
        '\u57fa\u4e8e\u753b\u677f\u767e\u5206\u6bd4\u5355\u4f4d',
      Mark: '\u6807\u6ce8',
      All: '\u5168\u9009',
      None: '\u4e0d\u5168\u9009',
      'Select filtered': '\u9009\u4e2d\u8fc7\u6ee4\u7684',
      'Selection of Sketch': 'Sketch \u9009\u4e2d\u7684\u753b\u677f',
      'Current of Sketch': 'Sketch \u5f53\u524d\u7684\u753b\u677f',
      Filter: ' \u8fc7\u6ee4',
      Export: '\u5bfc\u51fa',
      Position: '\u4f4d\u7f6e',
      Size: '\u5927\u5c0f',
      Family: '\u5b57\u4f53',
      Spacing: '\u7a7a\u95f4',
      Content: '\u5185\u5bb9',
      'All artboards': '\u5168\u90e8\u753b\u677f',
      'No slices added!': '\u672a\u6dfb\u52a0\u5207\u56fe',
      'No color names added!': '\u672a\u6dfb\u52a0\u989c\u8272\u540d\u79f0',
      'Select 1 or 2 layers to make marks!':
        '\u8bf7\u9009\u4e2d 1 \u81f3 2 \u4e2a\u56fe\u5c42!',
      'Select a text layer to make marks!':
        '\u8bf7\u9009\u4e2d 1 \u4e2a\u6587\u672c\u56fe\u5c42!',
      'Select a layer to make marks!':
        '\u8bf7\u9009\u4e2d 1 \u4e2a\u56fe\u5c42!',
      'Export spec': '\u5bfc\u51fa\u89c4\u8303',
      'Export to:': '\u5bfc\u51fa\u5230:',
    }),
    (0, l.default)(s, 'Export', '\u5bfc\u51fa'),
    (0, l.default)(s, 'Exporting...', '\u5bfc\u51fa\u4e2d...'),
    (0, l.default)(s, 'Export complete!', '\u5bfc\u51fa\u5b8c\u6210!'),
    (0, l.default)(
      s,
      'The slice not in current artboard.',
      '\u5207\u56fe\u4e0d\u5728\u5f53\u524d\u753b\u677f'
    ),
    (0, l.default)(s, 'Inside Border', '\u5185\u8fb9\u6846'),
    (0, l.default)(s, 'Outside Border', '\u5916\u8fb9\u6846'),
    (0, l.default)(s, 'Center Border', '\u4e2d\u5fc3\u8fb9\u6846'),
    (0, l.default)(s, 'Inner Shadow', '\u5185\u9634\u5f71'),
    (0, l.default)(s, 'Outer Shadow', '\u5916\u9634\u5f71'),
    (0, l.default)(s, 'No artboards!', '\u6ca1\u6709\u753b\u677f'),
    (0, l.default)(
      s,
      'You need add some artboards.',
      '\u60a8\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u753b\u677f'
    ),
    (0, l.default)(
      s,
      'No slices added!',
      '\u6ca1\u6709\u6dfb\u52a0\u5207\u56fe'
    ),
    (0, l.default)(
      s,
      'No colors added!',
      '\u6ca1\u6709\u6dfb\u52a0\u989c\u8272'
    ),
    (0, l.default)(s, 'Import', '\u5bfc\u5165'),
    (0, l.default)(
      s,
      'Choose a &quot;colors.json&quot;',
      '\u9009\u62e9\u4e00\u4e2a &quot;colors.json&quot;'
    ),
    (0, l.default)(s, 'Choose', '\u9009\u62e9'),
    (0, l.default)(
      s,
      'Select a layer to add exportable!',
      '\u8bf7\u9009\u4e2d 1 \u4e2a\u56fe\u5c42!'
    ),
    (0, l.default)(s, 'Import complete!', '\u5bfc\u5165\u5b8c\u6210!'),
    (0, l.default)(
      s,
      'Processing layer %@ of %@',
      '\u56fe\u5c42\u5904\u7406\u4e2d... %@ / %@'
    ),
    (0, l.default)(s, 'Advanced mode', '\u9ad8\u7ea7\u6a21\u5f0f'),
    (0, l.default)(s, 'Plugins', '\u63d2\u4ef6'),
    (0, l.default)(s, 'Toolbar', '\u5de5\u5177\u680f'),
    (0, l.default)(s, '1. Mark Overlay', '1. \u6807\u6ce8\u533a\u57df'),
    (0, l.default)(s, '2. Mark Sizes', '2. \u6807\u6ce8\u5c3a\u5bf8'),
    (0, l.default)(s, '3. Mark Spacings', '3. \u6807\u6ce8\u95f4\u9694'),
    (0, l.default)(s, '4. Mark Properties', '4. \u6807\u6ce8\u5c5e\u6027'),
    (0, l.default)(s, '5. Mark Note', '5. \u6807\u6ce8\u5907\u6ce8'),
    (0, l.default)(s, 'Spec Export', '\u89c4\u8303\u5bfc\u51fa'),
    (0, l.default)(s, 'Toggle Hidden', '\u5207\u6362\u9690\u85cf\u6807\u6ce8'),
    (0, l.default)(s, 'Toggle Locked', '\u5207\u6362\u9501\u5b9a\u6807\u6ce8'),
    (0, l.default)(s, 'Clear Marks', '\u6e05\u9664\u6807\u6ce8'),
    (0, l.default)(s, 'Settings', '\u8bbe\u7f6e'),
    (0, l.default)(s, 'Color Names', '\u989c\u8272\u547d\u540d'),
    (0, l.default)(s, 'Make Exportable', '\u8bbe\u7f6e\u5207\u56fe'),
    (0, l.default)(s, 'Set Name...', '\u8bbe\u7f6e\u540d\u79f0...'),
    (0, l.default)(s, 'Import Colors', '\u5bfc\u5165\u989c\u8272'),
    (0, l.default)(s, 'Export Colors', '\u5bfc\u51fa\u989c\u8272'),
    (0, l.default)(
      s,
      'You can select shape layer to add colors or import colors',
      '\u60a8\u53ef\u4ee5\u9009\u4e2d\u77e2\u91cf\u56fe\u5c42\u6dfb\u52a0\u989c\u8272\u6216\u5bfc\u5165\u989c\u8272'
    ),
    (0, l.default)(s, 'New Version!', '\u65b0\u7684\u7248\u672c!'),
    (0, l.default)(
      s,
      'Just checked Sketch Measure has a new version (%@)',
      '\u521a\u521a\u68c0\u6d4b\u5230 Sketch Measure \u6709\u65b0\u7248 (%@)'
    ),
    (0, l.default)(s, 'Download Now', '\u4e0b\u8f7d'),
    (0, l.default)(s, 'Cancel', '\u53d6\u6d88'),
    (0, l.default)(s, 'Donate', '\u6350\u8d60'),
    s)),
      (function(e) {
        String.prototype.firstUpperCase = function() {
          return this.replace(/\b(\w)(\w*)/g, function(e, t, i) {
            return t.toUpperCase() + i.toLowerCase();
          });
        };
        var t = function(e) {
            return c[d] && c[d][e] ? c[d][e] : e;
          },
          i = function e(t, i) {
            return (h = i), new e.fn.init(t);
          };
        (i.fn = i.prototype = {
          constructor: i,
          artboardID: void 0,
          selectedID: void 0,
          targetID: void 0,
          zoomSize: function(e) {
            return e * this.configs.zoom;
          },
          percentageSize: function(e, t) {
            return Math.round(e / t * 1e3) / 10 + '%';
          },
          unitSize: function(e, t) {
            var e = Math.round(e / this.configs.scale * 100) / 100,
              i = this.configs.unit.split('/'),
              a = i[0];
            return i.length > 1 && t && (a = i[1]), e + a;
          },
          scaleSize: function(e) {
            return Math.round(e / this.configs.scale * 10) / 10;
          },
          positive: function(e) {
            return e < 0 ? -e : e;
          },
          isIntersect: function(e, t) {
            return !(
              e.maxX <= t.x ||
              e.x >= t.maxX ||
              e.y >= t.maxY ||
              e.maxY <= t.y
            );
          },
          getID: function(e) {
            return '#' + $(e).attr('id');
          },
          getIndex: function(e) {
            return $(e).attr('data-index');
          },
          getRect: function(e) {
            var t = this.current.layers[e];
            return {
              x: t.rect.x,
              y: t.rect.y,
              width: t.rect.width,
              height: t.rect.height,
              maxX: t.rect.x + t.rect.width,
              maxY: t.rect.y + t.rect.height,
            };
          },
          getDistance: function(e, t) {
            return {
              top: e.y - t.y,
              right: t.maxX - e.maxX,
              bottom: t.maxY - e.maxY,
              left: e.x - t.x,
            };
          },
          message: function(e) {
            $('#message')
              .text(e)
              .hide()
              .fadeIn()
              .delay(1e3)
              .fadeOut('fast');
          },
          locationHash: function(t) {
            if (t) {
              var i = {},
                a = [];
              return (
                $.each(t, function(e, t) {
                  /[a-z]+/.test(e) &&
                    !isNaN(t) &&
                    ((i[e] = parseInt(t)), a.push(e + t));
                }),
                e.history.replaceState(void 0, void 0, '#' + a.join('-')),
                i
              );
            }
            var i = {};
            e.location.hash.replace(/[\#\-]([a-z]+)([\d]+)/gi, function(
              e,
              t,
              a
            ) {
              i[t] = parseInt(a);
            });
            return i;
          },
          render: function() {
            $('#app').html(
              [
                '<header>',
                '<div class="header-left">',
                '<ul class="tab">',
                '<li class="icon-artboards current" data-id="artboards"></li>',
                '<li class="icon-slices" data-id="slices"></li>',
                '<li class="icon-colors" data-id="colors"></li>',
                '</ul>',
                '</div>',
                '<div class="header-center">',
                '<div id="zoom" class="zoom-widget"></div>',
                '<h1></h1>',
                '<div class="show-notes">',
                '<label for="show-notes">' + t('NOTES') + '</label>',
                '<div class="slidebox">',
                '<input id="show-notes" type="checkbox" name="show-notes" checked="checked">',
                '<label for="show-notes"></label>',
                '</div>',
                '</div>',
                '</div>',
                '<div class="header-right"><div id="unit" class="unit-box" tabindex="0">XHDPI @2x (dp/sp)</div></div>',
                '</header>',
                '<main>',
                '<aside class="navbar on">',
                '<section id="artboards"></section>',
                '<section id="slices" style="display: none;"><div class="empty">' +
                  t('No slices added!') +
                  '</div></section>',
                '<section id="colors" style="display: none;"><div class="empty">' +
                  t('No colors added!') +
                  '</div></section>',
                '</aside>',
                '<section class="screen-viewer">',
                '<div class="screen-viewer-inner">',
                '<div id="screen" class="screen">',
                '<div id="rulers" style="display:none;">',
                '<div id="rv" class="ruler v"></div>',
                '<div id="rh" class="ruler h"></div>',
                '</div>',
                '<div id="layers"></div>',
                '<div id="notes"></div>',
                '<div id="td" class="distance v" style="display:none;"><div data-height="3"></div></div>',
                '<div id="rd" class="distance h" style="display:none;"><div data-width=""></div></div>',
                '<div id="bd" class="distance v" style="display:none;"><div data-height=""></div></div>',
                '<div id="ld" class="distance h" style="display:none;"><div data-width=""></div></div>',
                '</div>',
                '</div>',
                '<div class="overlay"></div>',
                '</section>',
                '<aside id="inspector" class="inspector"></aside>',
                '</main>',
                '<div id="message" class="message"></div>',
                '<div id="cursor" class="cursor"></div>',
              ].join('')
            ),
              this.zoom(),
              this.unit(),
              this.artboards(),
              this.slices(),
              this.colors(),
              this.screen(),
              this.layers(),
              this.notes(),
              this.events();
          },
          screen: function() {
            var e = this.current.imageBase64
              ? this.current.imageBase64
              : this.current.imagePath + '';
            if (!this.maxSize) {
              var t =
                  this.current.width > this.current.height
                    ? this.current.width
                    : this.current.height,
                i =
                  $('.screen-viewer').outerWidth() >
                  $('.screen-viewer').outerHeight()
                    ? $('.screen-viewer').outerWidth()
                    : $('.screen-viewer').outerHeight();
              (this.maxSize = t > i ? 5 * t : 5 * i),
                $('#screen')
                  .parent()
                  .css({ width: this.maxSize, height: this.maxSize });
              var a = this.maxSize - $('.screen-viewer').outerWidth(),
                s = this.maxSize - $('.screen-viewer').outerHeight(),
                r = 0.5 * a,
                o = 0.5 * s;
              $('.screen-viewer').scrollLeft(r),
                $('.screen-viewer').scrollTop(o);
            }
            $('#screen').css({
              width: this.zoomSize(this.current.width),
              height: this.zoomSize(this.current.height),
              background: '#FFF url(' + h + e + ') no-repeat',
              backgroundSize:
                this.zoomSize(this.current.width) +
                'px ' +
                this.zoomSize(this.current.height) +
                'px',
            }),
              $('.screen').css({
                marginLeft: -parseInt(this.zoomSize(this.current.width / 2)),
                marginTop: -80,
              });
          },
          zoom: function() {
            var e = 100 * this.configs.zoom + '%',
              t = this.configs.zoom <= 0.25 ? ' disabled="disabled"' : '',
              i = this.configs.zoom >= 4 ? ' disabled="disabled"' : '';
            $('#zoom').html(
              [
                '<button class="zoom-in"' + t + '></button>',
                '<label class="zoom-text">' + e + '</label>',
                '<button class="zoom-out"' + i + '></button>',
              ].join('')
            );
          },
          unit: function() {
            var e = this,
              i = [
                { units: [{ name: t('Standard'), unit: 'px', scale: 1 }] },
                {
                  name: t('iOS Devices'),
                  units: [
                    { name: t('Points') + ' @1x', unit: 'pt', scale: 1 },
                    { name: t('Retina') + ' @2x', unit: 'pt', scale: 2 },
                    { name: t('Retina HD') + ' @3x', unit: 'pt', scale: 3 },
                  ],
                },
                {
                  name: t('Android Devices'),
                  units: [
                    { name: 'LDPI @0.75x', unit: 'dp/sp', scale: 0.75 },
                    { name: 'MDPI @1x', unit: 'dp/sp', scale: 1 },
                    { name: 'HDPI @1.5x', unit: 'dp/sp', scale: 1.5 },
                    { name: 'XHDPI @2x', unit: 'dp/sp', scale: 2 },
                    { name: 'XXHDPI @3x', unit: 'dp/sp', scale: 3 },
                    { name: 'XXXHDPI @4x', unit: 'dp/sp', scale: 4 },
                  ],
                },
                {
                  name: t('Web View'),
                  units: [
                    { name: 'CSS Rem 12px', unit: 'rem', scale: 12 },
                    { name: 'CSS Rem 14px', unit: 'rem', scale: 14 },
                    { name: 'CSS Rem 16px', unit: 'rem', scale: 16 },
                  ],
                },
              ],
              a = [],
              s = [],
              r = '',
              o = '';
            $.each(i, function(i, a) {
              a.name && s.push('<li class="sub-title">' + t(a.name) + '</li>'),
                $.each(a.units, function(i, a) {
                  var r = '';
                  a.unit === e.configs.unit &&
                    a.scale === e.configs.scale &&
                    ((r = ' checked="checked"'), (o = t(a.name))),
                    s.push(
                      '<li><label><input type="radio" name="resolution" data-name="' +
                        t(a.name) +
                        '" data-unit="' +
                        a.unit +
                        '" data-scale="' +
                        a.scale +
                        '"' +
                        r +
                        '><span>' +
                        t(a.name) +
                        '</span></label></li>'
                    );
                });
            }),
              o ||
                ((r =
                  '<li><label><input type="radio" name="resolution" data-name="' +
                  t('Custom') +
                  ' (' +
                  e.configs.scale +
                  ', ' +
                  e.configs.unit +
                  ')" data-unit="' +
                  e.configs.unit +
                  '" data-scale="' +
                  e.configs.scale +
                  '" checked="checked"><span>' +
                  t('Custom') +
                  ' (' +
                  e.configs.scale +
                  ', ' +
                  e.configs.unit +
                  ')</span></label></li>'),
                (o =
                  t('Custom') +
                  ' (' +
                  e.configs.scale +
                  ', ' +
                  e.configs.unit +
                  ')')),
              a.push(
                '<div class="overlay"></div>',
                '<h3>' + t('Design resolution') + '</h3>',
                '<p>' + o + '</p>',
                '<ul>',
                r,
                s.join(''),
                '</ul>'
              ),
              $('#unit').html(a.join(''));
          },
          artboards: function() {
            var e = this,
              i = [],
              a = [],
              s = {};
            return (
              i.push('<ul class="artboard-list">'),
              $.each(this.project.artboards, function(t, a) {
                s[a.pageObjectID] ||
                  (s[a.pageObjectID] = {
                    name: a.pageName,
                    objectID: a.pageObjectID,
                    count: 0,
                  }),
                  s[a.pageObjectID].count++;
                var r = e.artboardIndex !== t || a.fileName ? '' : ' active',
                  o = a.fileName ? ' data-file="' + a.fileName + '"' : '',
                  n = a.imageBase64 ? a.imageBase64 : a.imagePath + '';
                i.push(
                  '<li id="artboard-' +
                    t +
                    '"' +
                    o +
                    ' class="artboard' +
                    r +
                    '" data-page-id="' +
                    a.pageObjectID +
                    '" data-id="' +
                    a.objectID +
                    '" data-index="' +
                    t +
                    '" >',
                  '<picture class="preview-img" data-name="' + a.name + '">',
                  '<img alt="' + a.name + '" src="' + h + n + '">',
                  '</picture>',
                  '<div>',
                  '<h3>' + a.name + '</h3>',
                  '<small>' + a.pageName + '</small>',
                  '</div>',
                  '</li>'
                );
              }),
              i.push('</ul>'),
              a.push('<div class="pages-select" tabindex="0">'),
              a.push(
                '<h3>' +
                  t('All artboards') +
                  ' <em>(' +
                  this.project.artboards.length +
                  ')</em></h3>'
              ),
              a.push('<ul class="page-list">'),
              a.push(
                '<li><label><input type="radio" name="page" value="all" checked="checked"><span>' +
                  t('All artboards') +
                  ' <em>(' +
                  this.project.artboards.length +
                  ')</em></span></label></li>'
              ),
              $.each(s, function(e, t) {
                a.push(
                  '<li><label><input type="radio" name="page" value="' +
                    t.objectID +
                    '"><span>' +
                    t.name +
                    ' <em>(' +
                    t.count +
                    ')</em></span></label></li>'
                );
              }),
              a.push('</ul>'),
              a.push('</div>'),
              $('#artboards').html([a.join(''), i.join('')].join('')),
              this
            );
          },
          layers: function() {
            var e = this,
              t = [];
            $.each(this.current.layers, function(i, a) {
              var s = e.zoomSize(a.rect.x),
                r = e.zoomSize(a.rect.y),
                o = e.zoomSize(a.rect.width),
                n = e.zoomSize(a.rect.height),
                l = ['layer'];
              l.push('layer-' + a.objectID),
                e.selectedIndex === i && l.push('selected'),
                t.push(
                  [
                    '<div id="layer-' +
                      i +
                      '" class="' +
                      l.join(' ') +
                      '" data-index="' +
                      i +
                      '" percentage-width="' +
                      e.percentageSize(a.rect.width, e.current.width) +
                      '" percentage-height="' +
                      e.percentageSize(a.rect.height, e.current.height) +
                      '" data-width="' +
                      e.unitSize(a.rect.width) +
                      '" data-height="' +
                      e.unitSize(a.rect.height) +
                      '" style="left: ' +
                      s +
                      'px; top: ' +
                      r +
                      'px; width: ' +
                      o +
                      'px; height: ' +
                      n +
                      'px;">',
                    '<i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>',
                    '<b class="et h"></b><b class="er v"></b><b class="eb h"></b><b class="el v"></b>',
                    '</div>',
                  ].join('')
                );
            }),
              $('#layers').html(t.join(''));
          },
          slices: function() {
            if (!this.project.slices) return !1;
            var e = this,
              t = [];
            return (
              t.push('<ul class="asset-list">'),
              $.each(this.project.slices, function(i, a) {
                if (a.exportable.length > 0) {
                  var s = JSON.parse((0, o.default)(a.exportable)).pop();
                  t.push(
                    '<li id="slice-' +
                      a.objectID +
                      '" class="slice-layer" data-objectId="' +
                      a.objectID +
                      '">',
                    '<picture><img src="' +
                      h +
                      'assets/' +
                      s.path +
                      '" alt=""></picture>',
                    '<div>',
                    '<h3>' + a.name + '</h3>',
                    '<small>' +
                      e.unitSize(a.rect.width) +
                      ' \xd7 ' +
                      e.unitSize(a.rect.height) +
                      '</small>',
                    '</div>',
                    '</li>'
                  );
                }
              }),
              t.push('</ul>'),
              this.project.slices.length > 0 && $('#slices').html(t.join('')),
              this
            );
          },
          colors: function(e) {
            if (!this.project.colors) return !1;
            var t = this,
              i = [];
            return (
              (this.project.colorNames = {}),
              i.push('<ul class="color-list">'),
              $.each(this.project.colors, function(e, a) {
                (t.project.colorNames[a.color['argb-hex']] = a.name),
                  i.push(
                    '<li id="color-' +
                      e +
                      '" data-color="' +
                      encodeURI((0, o.default)(a.color)) +
                      '">',
                    '<em><i style="background:' +
                      a.color['css-rgba'] +
                      '"></i></em>',
                    '<div>',
                    '<h3>' + a.name + '</h3>',
                    '<small>' + a.color[t.configs.colorFormat] + '</small>',
                    '</div>',
                    '</li>'
                  );
              }),
              i.push('</ul>'),
              this.project.colors.length > 0 && $('#colors').html(i.join('')),
              this
            );
          },
          notes: function() {
            var e = this,
              t = [];
            $.each(this.current.notes, function(i, a) {
              t.push(
                '<div class="note" data-index="' +
                  (i + 1) +
                  '" style="left: ' +
                  e.zoomSize(a.rect.x) +
                  'px; top: ' +
                  e.zoomSize(a.rect.y) +
                  'px;"><div style="white-space:nowrap;display:none;">' +
                  a.note +
                  '</div></div>'
              );
            }),
              $('#notes').html(t.join(''));
          },
          getEdgeRect: function(e) {
            var t = $('#screen').offset(),
              i = (e.pageX - t.left) / this.configs.zoom,
              a = (e.pageY - t.top) / this.configs.zoom,
              s = 10,
              r = 10,
              o = i >= 0 && i <= this.current.width,
              n = a >= 0 && a <= this.current.height;
            return (
              i <= 0 && a <= 0
                ? ((i = -10), (a = -10))
                : i >= this.current.width && a <= 0
                  ? ((i = this.current.width), (a = -10))
                  : i >= this.current.width && a >= this.current.height
                    ? ((i = this.current.width), (a = this.current.height))
                    : i <= 0 && a >= this.current.height
                      ? ((i = -10), (a = this.current.height))
                      : a <= 0 && o
                        ? ((i = 0), (a = -10), (s = this.current.width))
                        : i >= this.current.width && n
                          ? ((i = this.current.width),
                            (a = 0),
                            (r = this.current.height))
                          : a >= this.current.height && o
                            ? ((i = 0),
                              (a = this.current.height),
                              (s = this.current.width))
                            : i <= 0 &&
                              n &&
                              ((i = -10), (a = 0), (r = this.current.height)),
              o &&
                n &&
                ((i = 0),
                (a = 0),
                (s = this.current.width),
                (r = this.current.height)),
              { x: i, y: a, width: s, height: r, maxX: i + s, maxY: a + r }
            );
          },
          distance: function() {
            if (
              (this.selectedIndex &&
                this.targetIndex &&
                this.selectedIndex != this.targetIndex) ||
              (this.selectedIndex && this.tempTargetRect)
            ) {
              var e = this.getRect(this.selectedIndex),
                t = this.tempTargetRect || this.getRect(this.targetIndex),
                i = void 0,
                a = void 0,
                s = void 0,
                r = void 0,
                o = this.zoomSize(e.x + e.width / 2),
                n = this.zoomSize(e.y + e.height / 2);
              if (this.isIntersect(e, t)) {
                var l = this.getDistance(e, t);
                0 != l.top &&
                  (i = {
                    x: o,
                    y: l.top > 0 ? this.zoomSize(t.y) : this.zoomSize(e.y),
                    h: this.zoomSize(this.positive(l.top)),
                    distance: this.unitSize(this.positive(l.top)),
                    percentageDistance: this.percentageSize(
                      this.positive(l.top),
                      this.current.height
                    ),
                  }),
                  0 != l.right &&
                    (a = {
                      x:
                        l.right > 0
                          ? this.zoomSize(e.maxX)
                          : this.zoomSize(t.maxX),
                      y: n,
                      w: this.zoomSize(this.positive(l.right)),
                      distance: this.unitSize(this.positive(l.right)),
                      percentageDistance: this.percentageSize(
                        this.positive(l.right),
                        this.current.width
                      ),
                    }),
                  0 != l.bottom &&
                    (s = {
                      x: o,
                      y:
                        l.bottom > 0
                          ? this.zoomSize(e.maxY)
                          : this.zoomSize(t.maxY),
                      h: this.zoomSize(this.positive(l.bottom)),
                      distance: this.unitSize(this.positive(l.bottom)),
                      percentageDistance: this.percentageSize(
                        this.positive(l.bottom),
                        this.current.height
                      ),
                    }),
                  0 != l.left &&
                    (r = {
                      x: l.left > 0 ? this.zoomSize(t.x) : this.zoomSize(e.x),
                      y: n,
                      w: this.zoomSize(this.positive(l.left)),
                      distance: this.unitSize(this.positive(l.left)),
                      percentageDistance: this.percentageSize(
                        this.positive(l.left),
                        this.current.width
                      ),
                    });
              } else
                e.y > t.maxY &&
                  (i = {
                    x: o,
                    y: this.zoomSize(t.maxY),
                    h: this.zoomSize(e.y - t.maxY),
                    distance: this.unitSize(e.y - t.maxY),
                    percentageDistance: this.percentageSize(
                      e.y - t.maxY,
                      this.current.height
                    ),
                  }),
                  e.maxX < t.x &&
                    (a = {
                      x: this.zoomSize(e.maxX),
                      y: n,
                      w: this.zoomSize(t.x - e.maxX),
                      distance: this.unitSize(t.x - e.maxX),
                      percentageDistance: this.percentageSize(
                        t.x - e.maxX,
                        this.current.width
                      ),
                    }),
                  e.maxY < t.y &&
                    (s = {
                      x: o,
                      y: this.zoomSize(e.maxY),
                      h: this.zoomSize(t.y - e.maxY),
                      distance: this.unitSize(t.y - e.maxY),
                      percentageDistance: this.percentageSize(
                        t.y - e.maxY,
                        this.current.height
                      ),
                    }),
                  e.x > t.maxX &&
                    (r = {
                      x: this.zoomSize(t.maxX),
                      y: n,
                      w: this.zoomSize(e.x - t.maxX),
                      distance: this.unitSize(e.x - t.maxX),
                      percentageDistance: this.percentageSize(
                        e.x - t.maxX,
                        this.current.width
                      ),
                    });
              i &&
                ($('#td')
                  .css({ left: i.x, top: i.y, height: i.h })
                  .show(),
                $('#td div')
                  .attr('data-height', i.distance)
                  .attr('percentage-height', i.percentageDistance)),
                a &&
                  ($('#rd')
                    .css({ left: a.x, top: a.y, width: a.w })
                    .show(),
                  $('#rd div')
                    .attr('data-width', a.distance)
                    .attr('percentage-width', a.percentageDistance)),
                s &&
                  ($('#bd')
                    .css({ left: s.x, top: s.y, height: s.h })
                    .show(),
                  $('#bd div')
                    .attr('data-height', s.distance)
                    .attr('percentage-height', s.percentageDistance)),
                r &&
                  ($('#ld')
                    .css({ left: r.x, top: r.y, width: r.w })
                    .show(),
                  $('#ld div')
                    .attr('data-width', r.distance)
                    .attr('percentage-width', r.percentageDistance)),
                $('.selected').addClass('hidden');
            }
          },
          inspector: function() {
            if (
              !this.selectedIndex ||
              (!this.current &&
                !this.current.layers &&
                !this.current.layers[this.selectedIndex])
            )
              return !1;
            var e = this,
              i = this.current.layers[this.selectedIndex],
              a = [];
            a.push('<h2>' + i.name + '</h2>');
            var s = [
                '<div class="item" data-label="' + t('Position') + ':">',
                '<label data-label="' +
                  t('X') +
                  '"><input id="position-x" type="text" value="' +
                  this.unitSize(i.rect.x) +
                  '" readonly="readonly"></label>',
                '<label data-label="' +
                  t('Y') +
                  '"><input id="position-y" type="text" value="' +
                  this.unitSize(i.rect.y) +
                  '" readonly="readonly"></label>',
                '</div>',
              ].join(''),
              r = [
                '<div class="item" data-label="' + t('Size') + ':">',
                '<label data-label="' +
                  t('Width') +
                  '"><input id="size-width" type="text" value="' +
                  this.unitSize(i.rect.width) +
                  '" readonly="readonly"></label>',
                '<label data-label="' +
                  t('Height') +
                  '"><input id="size-height" type="text" value="' +
                  this.unitSize(i.rect.height) +
                  '" readonly="readonly"></label>',
                '</div>',
              ].join(''),
              o =
                'number' == typeof i.opacity
                  ? [
                      '<div class="item" data-label="' + t('Opacity') + ':">',
                      '<label><input id="opacity" type="text" value="' +
                        Math.round(1e4 * i.opacity) / 100 +
                        '%" readonly="readonly"></label>',
                      '<label></label>',
                      '</div>',
                    ].join('')
                  : '',
              n = i.radius
                ? [
                    '<div class="item" data-label="' + t('Radius') + ':">',
                    '<label><input id="radius" type="text" value="' +
                      this.unitSize(i.radius) +
                      '" readonly="readonly"></label>',
                    '<label></label>',
                    '</div>',
                  ].join('')
                : '',
              l = i.styleName
                ? [
                    '<div class="item" data-label="' + t('Style') + ':">',
                    '<label><input id="styleName" type="text" value="' +
                      i.styleName +
                      '" readonly="readonly"></label>',
                    '</div>',
                  ].join('')
                : '';
            if (
              (a.push(
                this.propertyType('PROPERTIES', [s, r, o, n, l].join(''))
              ),
              i.fills && i.fills.length > 0)
            ) {
              var c = [],
                d = $.extend(!0, [], i.fills);
              $.each(d.reverse(), function(i, a) {
                c.push(
                  '<div class="item items-group" data-label="' +
                    t(a.fillType.firstUpperCase()) +
                    ':">'
                ),
                  'color' === a.fillType
                    ? c.push(e.colorItem(a.color))
                    : (c.push('<div class="gradient">'),
                      $.each(a.gradient.colorStops, function(t, i) {
                        c.push(e.colorItem(i.color));
                      }),
                      c.push('</div>')),
                  c.push('</div>');
              }),
                a.push(this.propertyType('FILLS', c.join('')));
            }
            if ('text' === i.type) {
              var u = [
                  '<div class="item" data-label="' + t('Family') + ':">',
                  '<label><input id="font-family" type="text" value="' +
                    i.fontFace +
                    '" readonly="readonly"></label>',
                  '</div>',
                ].join(''),
                p = [
                  '<div class="item" data-label="' + t('Color') + ':">',
                  '<div class="color">',
                  e.colorItem(i.color),
                  '</div>',
                  '</div>',
                ].join(''),
                m = i.fontSize
                  ? [
                      '<div class="item" data-label="' + t('Size') + ':">',
                      '<label><input id="opacity" type="text" value="' +
                        this.unitSize(i.fontSize, !0) +
                        '" readonly="readonly"></label>',
                      '<label></label>',
                      '</div>',
                    ].join('')
                  : '',
                f = [
                  '<div class="item" data-label="' + t('Spacing') + ':">',
                  '<label data-label="' +
                    t('Character') +
                    '"><input id="letter-spacing" type="text" value="' +
                    this.unitSize(i.letterSpacing, !0) +
                    '" readonly="readonly"></label>',
                  '<label data-label="' +
                    t('Line') +
                    '"><input id="line-height" type="text" value="' +
                    this.unitSize(i.lineHeight, !0) +
                    '" readonly="readonly"></label>',
                  '</div>',
                ].join(''),
                v = [
                  '<div class="item">',
                  '<label data-label="' +
                    t('Content') +
                    '"><textarea id="content" rows="2" readonly="readonly">' +
                    i.content +
                    '</textarea></label>',
                  '</div>',
                ].join('');
              a.push(this.propertyType('TYPEFACE', [u, p, m, f, v].join('')));
            }
            if (i.borders && i.borders.length > 0) {
              var g = [],
                b = $.extend(!0, [], i.borders);
              $.each(b.reverse(), function(i, a) {
                g.push(
                  '<div class="items-group">',
                  '<h4>' + t(a.position.firstUpperCase() + ' Border') + '</h4>',
                  '<div class="item" data-label="' + t('Weight') + ':">',
                  '<label><input id="font-family" type="text" value="' +
                    e.unitSize(a.thickness) +
                    '" readonly="readonly"></label>',
                  '<label></label>',
                  '</div>'
                ),
                  g.push(
                    '<div class="item" data-label="' +
                      t(a.fillType.firstUpperCase()) +
                      ':">'
                  ),
                  'color' === a.fillType
                    ? g.push(e.colorItem(a.color))
                    : (g.push('<div class="colors gradient">'),
                      $.each(a.gradient.colorStops, function(t, i) {
                        g.push(e.colorItem(i.color));
                      }),
                      g.push('</div>')),
                  g.push('</div>'),
                  g.push('</div>');
              }),
                a.push(this.propertyType('BORDERS', g.join('')));
            }
            if (i.shadows && i.shadows.length > 0) {
              var y = [],
                x = $.extend(!0, [], i.shadows);
              $.each(x.reverse(), function(i, a) {
                y.push(
                  '<div class="items-group">',
                  '<h4>' + t(a.type.firstUpperCase() + ' Shadow') + '</h4>',
                  '<div class="item" data-label="' + t('Offset') + ':">',
                  '<label data-label="' +
                    t('X') +
                    '"><input id="offset-x" type="text" value="' +
                    e.unitSize(a.offsetX) +
                    '" readonly="readonly"></label>',
                  '<label data-label="' +
                    t('Y') +
                    '"><input id="offset-y" type="text" value="' +
                    e.unitSize(a.offsetY) +
                    '" readonly="readonly"></label>',
                  '</div>',
                  '<div class="item" data-label="' + t('Effect') + ':">',
                  '<label data-label="' +
                    t('Blur') +
                    '"><input id="offset-x" type="text" value="' +
                    e.unitSize(a.blurRadius) +
                    '" readonly="readonly"></label>',
                  '<label data-label="' +
                    t('Spread') +
                    '"><input id="offset-y" type="text" value="' +
                    e.unitSize(a.spread) +
                    '" readonly="readonly"></label>',
                  '</div>',
                  '<div class="item" data-label="' + t('Color') + ':">',
                  e.colorItem(a.color),
                  '</div>',
                  '</div>'
                );
              }),
                a.push(this.propertyType('SHADOWS', y.join('')));
            }
            if (i.css && i.css.length > 0) {
              var S = [
                  '<ul class="tab" id="code-tab" >',
                  '<li class="icon-css-panel" data-id="css-panel" data-codeType="css"></li>',
                  '<li class="icon-android-panel" data-id="android-panel" data-codeType="android" ></li>',
                  '<li class="icon-ios-panel" data-id="ios-panel" data-codeType="ios" ></li>',
                  '</ul>',
                ].join(''),
                z = [
                  '<div id="css-panel" class="code-item item">',
                  '<label><textarea id="css" rows="' +
                    (i.css.length + 1) +
                    '" readonly="readonly">' +
                    i.css.join('\r\n') +
                    '</textarea></label>',
                  '</div>',
                ].join(''),
                w = [];
              'text' === i.type
                ? w.push(
                    '<div id="android-panel"  class="code-item item">',
                    '<label><textarea id="css" rows="6" readonly="readonly">&lt;TextView\r\n' +
                      this.getAndroidWithHeight(i) +
                      'android:text="' +
                      i.content +
                      '"\r\nandroid:textColor="' +
                      i.color['argb-hex'] +
                      '"\r\nandroid:textSize="' +
                      this.unitSize(i.fontSize, !0) +
                      '"\r\n/&gt;</textarea></label>',
                    '</div>'
                  )
                : 'shape' === i.type
                  ? w.push(
                      '<div id="android-panel" class="code-item item">',
                      '<label><textarea id="css" rows="6" readonly="readonly">&lt;View\r\n' +
                        this.getAndroidWithHeight(i) +
                        this.getAndroidShapeBackground(i) +
                        '/&gt;</textarea></label>',
                      '</div>'
                    )
                  : (i.type = 'slice') &&
                    w.push(
                      '<div id="android-panel" class="code-item item">',
                      '<label><textarea id="css" rows="6" readonly="readonly">&lt;ImageView\r\n' +
                        this.getAndroidWithHeight(i) +
                        this.getAndroidImageSrc(i) +
                        '/&gt;</textarea></label>',
                      '</div>'
                    );
              var I = [];
              'text' === i.type
                ? I.push(
                    '<div id="ios-panel"  class="code-item item">',
                    '<label><textarea id="css" rows="6" readonly="readonly">UILabel *label = [[UILabel alloc] init];\r\nlabel.frame = CGRectMake(' +
                      this.scaleSize(i.rect.x) +
                      ', ' +
                      this.scaleSize(i.rect.y) +
                      ', ' +
                      this.scaleSize(i.rect.width) +
                      ', ' +
                      this.scaleSize(i.rect.height) +
                      ');\r\nlabel.text = @"' +
                      i.content +
                      '";\r\nlabel.font = [UIFont fontWithName:@"' +
                      i.fontFace +
                      '" size:' +
                      this.scaleSize(i.fontSize) +
                      '];\r\nlabel.textColor = [UIColor colorWithRed:' +
                      i.color.r +
                      '/255.0 green:' +
                      i.color.g +
                      '/255.0 blue:' +
                      i.color.b +
                      '/255.0 alpha:' +
                      i.color.a +
                      '/1.0];\r\n</textarea></label>',
                    '</div>'
                  )
                : 'shape' === i.type
                  ? I.push(
                      '<div id="ios-panel" class="code-item item">',
                      '<label><textarea id="css" rows="6" readonly="readonly">UIView *view = [[UIView alloc] init];\r\nview.frame = CGRectMake(' +
                        this.scaleSize(i.rect.x) +
                        ', ' +
                        this.scaleSize(i.rect.y) +
                        ', ' +
                        this.scaleSize(i.rect.width) +
                        ', ' +
                        this.scaleSize(i.rect.height) +
                        ');\r\n' +
                        this.getIOSShapeBackground(i) +
                        '</textarea></label>',
                      '</div>'
                    )
                  : (i.type = 'slice') &&
                    I.push(
                      '<div id="ios-panel" class="code-item item">',
                      '<label><textarea id="css" rows="6" readonly="readonly">UIImageView *imageView = [[UIImageView alloc] init];\r\nimageView.frame = CGRectMake(' +
                        this.scaleSize(i.rect.x) +
                        ', ' +
                        this.scaleSize(i.rect.y) +
                        ', ' +
                        this.scaleSize(i.rect.width) +
                        ', ' +
                        this.scaleSize(i.rect.height) +
                        ');\r\n' +
                        this.getIOSImageSrc(i) +
                        '</textarea></label>',
                      '</div>'
                    ),
                a.push(
                  this.propertyType(
                    'CODE TEMPLATE',
                    [S, z, w.join(''), I.join('')].join(''),
                    !0
                  )
                );
            }
            if (i.exportable && i.exportable.length > 0) {
              var C = [];
              C.push('<ul class="exportable">'),
                $.each(i.exportable, function(e, t) {
                  var i = 'assets/' + t.path;
                  C.push(
                    '<li>',
                    '<a href="' +
                      h +
                      i +
                      '" download="' +
                      t.path +
                      '" data-format="' +
                      t.format.toUpperCase() +
                      '"><img src="' +
                      h +
                      i +
                      '" alt="' +
                      t.path +
                      '">' +
                      t.path.replace('drawable-', '') +
                      '</a>',
                    '</li>'
                  );
                }),
                C.push('</ul>'),
                a.push(this.propertyType('EXPORTABLE', C.join('')));
            }
            e.renderInspector(a);
          },
          getAndroidWithHeight: function(e) {
            return (
              'android:layout_width="' +
              this.unitSize(e.rect.width, !1) +
              '"\r\nandroid:layout_height="' +
              this.unitSize(e.rect.height, !1) +
              '"\r\n'
            );
          },
          getAndroidShapeBackground: function(e) {
            if ('shape' != e.type || void 0 === e.fills || 0 === e.fills.length)
              return '';
            var t = void 0;
            for (t in e.fills)
              if ('color' === e.fills[t].fillType)
                return (
                  'android:background="' +
                  e.fills[t].color['argb-hex'] +
                  '"\r\n'
                );
            return '';
          },
          getAndroidImageSrc: function(e) {
            return 'slice' != e.type ||
              void 0 === e.exportable ||
              0 === e.exportable
              ? ''
              : 'android:src="@mipmap/' +
                  e.exportable[0].name +
                  '.' +
                  e.exportable[0].format +
                  '"\r\n';
          },
          getIOSShapeBackground: function(e) {
            if ('shape' != e.type || void 0 === e.fills || 0 === e.fills.length)
              return '';
            var t = void 0;
            for (t in e.fills)
              if ('color' === e.fills[t].fillType)
                return (
                  'view.backgroundColor = [UIColor colorWithRed:' +
                  e.fills[t].color.r +
                  '/255.0 green:' +
                  e.fills[t].color.g +
                  '/255.0 blue:' +
                  e.fills[t].color.b +
                  '/255.0 alpha:' +
                  e.fills[t].color.a +
                  '/1.0];\r\n'
                );
            return '';
          },
          getIOSImageSrc: function(e) {
            return 'slice' != e.type ||
              void 0 === e.exportable ||
              0 === e.exportable
              ? ''
              : 'imageView.image = [UIImage imageNamed:@"' +
                  e.exportable[0].name +
                  '.' +
                  e.exportable[0].format +
                  '"];\r\n';
          },
          renderInspector: function(e) {
            var t = this;
            $('#inspector')
              .addClass('active')
              .html(e.join('')),
              $('#inspector')
                .find('[data-codeType=' + t.configs.codeType + ']')
                .addClass('select'),
              $('#code-tab')
                .unbind('click')
                .on('click', 'li', function() {
                  var e = $(this),
                    i = e.attr('data-id');
                  (t.configs.codeType = $(this).attr('data-codeType')),
                    e
                      .parent()
                      .find('li.select')
                      .removeClass('select'),
                    e.addClass('select'),
                    $('#inspector')
                      .find('div.item.select')
                      .removeClass('select'),
                    $('#inspector')
                      .find('#' + i)
                      .addClass('select');
                }),
              $('#code-tab')
                .find('li.select')
                .trigger('click');
          },
          propertyType: function(e, i, a) {
            var s = a ? ' style="padding:0"' : '';
            return [
              '<section>',
              '<h3>' + t(e) + '</h3>',
              '<div class="context"' + s + '>',
              i,
              '</div>',
              '</section>',
            ].join('');
          },
          colorItem: function(e) {
            var t = this.project.colorNames
              ? this.project.colorNames[e['argb-hex']]
              : '';
            return (
              (t = t ? ' data-name="' + t + '"' : ''),
              [
                '<div class="color"' + t + '>',
                '<label><em><i style="background-color:' +
                  e['css-rgba'] +
                  ';"></i></em></label><input data-color="' +
                  encodeURI((0, o.default)(e)) +
                  '" type="text" value="' +
                  e[this.configs.colorFormat] +
                  '" readonly="readonly">',
                '</div>',
              ].join('')
            );
          },
          changeColorFormat: function() {
            var e = this;
            $('.color input').each(function() {
              var t = $(this),
                i = JSON.parse(decodeURI(t.attr('data-color')));
              t.val(i[e.configs.colorFormat]);
            }),
              this.colors();
          },
          selectedLayer: function() {
            if (void 0 === this.selectedIndex) return !1;
            $('.selected').removeClass('selected'),
              $('#layer-' + this.selectedIndex).addClass('selected'),
              $('#rulers').hide();
          },
          removeSelected: function() {
            if (!this.selectedIndex) return !1;
            $('#layer-' + this.selectedIndex).removeClass('selected'),
              $('#rulers').hide();
          },
          mouseoverLayer: function() {
            if (this.targetIndex && this.selectedIndex === this.targetIndex)
              return !1;
            var e = $('#layer-' + this.targetIndex);
            e.addClass('hover'),
              $('#rv').css({ left: e.position().left, width: e.outerWidth() }),
              $('#rh').css({ top: e.position().top, height: e.outerHeight() }),
              $('#rulers').show();
          },
          mouseoutLayer: function() {
            $('.hover').removeClass('hover'), $('#rulers').hide();
          },
          hideDistance: function() {
            $('#td').hide(),
              $('#rd').hide(),
              $('#bd').hide(),
              $('#ld').hide(),
              $('.selected').removeClass('hidden');
          },
          zoomRender: function() {
            var e = this;
            (this.targetIndex = void 0),
              $('#rulers').hide(),
              this.hideDistance(),
              this.zoom(),
              this.screen(),
              $('#layers, #notes').html(''),
              setTimeout(function() {
                e.layers(), e.notes();
              }, 150);
          },
          events: function() {
            var i = this;
            $('body')
              .on({
                click: function(e) {
                  if (!$('.screen-viewer').hasClass('moving-screen'))
                    if (
                      $(e.target).hasClass('layer') ||
                      $(e.target).hasClass('slice-layer')
                    ) {
                      var t = $(e.target).hasClass('slice-layer')
                        ? $(
                            '.layer-' + $(e.target).attr('data-objectid')
                          ).first()
                        : e.target;
                      (i.selectedIndex = i.getIndex(t)),
                        i.hideDistance(),
                        i.mouseoutLayer(),
                        i.selectedLayer(),
                        i.inspector();
                    } else
                      i.removeSelected(),
                        i.hideDistance(),
                        $('#inspector').removeClass('active'),
                        (i.selectedIndex = void 0),
                        (i.tempTargetRect = void 0);
                },
                mousemove: function(e) {
                  $('.screen-viewer').hasClass('moving-screen') ||
                    (i.mouseoutLayer(),
                    i.hideDistance(),
                    $(e.target).hasClass('screen-viewer') ||
                    $(e.target).hasClass('screen-viewer-inner')
                      ? ((i.tempTargetRect = i.getEdgeRect(e)),
                        (i.targetIndex = void 0),
                        i.distance())
                      : $(e.target).hasClass('layer')
                        ? ((i.targetIndex = i.getIndex(e.target)),
                          (i.tempTargetRect = void 0),
                          i.mouseoverLayer(),
                          i.distance())
                        : (i.tempTargetRect = void 0));
                },
              })
              .on('click', 'header, #inspector, .navbar', function(e) {
                e.stopPropagation();
              })
              .on('dragstart', '.exportable img', function(e) {
                var t = $(this),
                  i = t.offset();
                t.css({ width: 'auto', height: 'auto' });
                var a = e.originalEvent.pageX - i.left - t.width() / 2,
                  s = e.originalEvent.pageY - i.top - t.height() / 2;
                t.css({ left: a, top: s });
              })
              .on('dragend', '.exportable img', function(e) {
                $(this).css({ left: 0, top: 0, width: '100%', height: '100%' });
              }),
              $('#zoom')
                .on('click', '.zoom-in:not(disabled)', function(e) {
                  (i.configs.zoom -= 0.25), i.zoomRender(), e.stopPropagation();
                })
                .on('click', '.zoom-out:not(disabled)', function(e) {
                  (i.configs.zoom += 0.25), i.zoomRender(), e.stopPropagation();
                }),
              $(e)
                .keydown(function(e) {
                  if (
                    (e.ctrlKey || e.metaKey) &&
                    (187 === e.which || 189 === e.which || 48 === e.which)
                  )
                    return (
                      187 === e.which && i.configs.zoom < 4
                        ? $('.zoom-out').click()
                        : 189 === e.which && i.configs.zoom > 0.25
                          ? $('.zoom-in').click()
                          : 48 === e.which &&
                            ((i.maxSize = void 0),
                            (i.configs.zoom = 1),
                            i.zoomRender()),
                      e.preventDefault(),
                      !1
                    );
                  32 === e.which
                    ? ($('#cursor').show(),
                      $('.screen-viewer').addClass('moving-screen'),
                      i.mouseoutLayer(),
                      i.hideDistance(),
                      e.preventDefault())
                    : 18 === e.which &&
                      $('#screen').addClass('percentage-mode');
                })
                .keyup(function(e) {
                  32 === e.which
                    ? ($('#cursor').hide(),
                      $('.screen-viewer').removeClass('moving-screen'),
                      $('#cursor').removeClass('moving'),
                      e.preventDefault())
                    : 18 === e.which &&
                      ($('#screen').removeClass('percentage-mode'),
                      e.preventDefault());
                })
                .mousemove(function(e) {
                  $('#cursor').css({ left: e.clientX, top: e.clientY });
                  $(e.target);
                  $('.screen-viewer').hasClass('moving-screen') &&
                    $('#cursor').hasClass('moving') &&
                    ($('.screen-viewer').scrollLeft(
                      i.moveData.x - e.clientX + i.moveData.scrollLeft
                    ),
                    $('.screen-viewer').scrollTop(
                      i.moveData.y - e.clientY + i.moveData.scrollTop
                    ),
                    e.preventDefault());
                })
                .mousedown(function(e) {
                  var t = $(e.target);
                  $('.screen-viewer').hasClass('moving-screen') &&
                    (t.hasClass('cursor') || t.hasClass('overlay')) &&
                    ((i.moveData = {
                      x: e.clientX,
                      y: e.clientY,
                      scrollLeft: $('.screen-viewer').scrollLeft(),
                      scrollTop: $('.screen-viewer').scrollTop(),
                    }),
                    $('#cursor').addClass('moving'),
                    e.preventDefault());
                })
                .mouseup(function(e) {
                  $(e.target);
                  $('.screen-viewer').hasClass('moving-screen') &&
                    ($('#cursor').removeClass('moving'), e.preventDefault());
                }),
              $('#unit')
                .on('change', 'input[name=resolution]', function() {
                  var e = $('input[name=resolution]:checked');
                  (i.configs.unit = e.attr('data-unit')),
                    (i.configs.scale = Number(e.attr('data-scale'))),
                    (i.targetID = void 0),
                    i.layers(),
                    i.inspector(),
                    $('#unit')
                      .blur()
                      .find('p')
                      .text(e.attr('data-name')),
                    i.slices();
                })
                .on('click', 'h3, .overlay', function() {
                  $('#unit').blur();
                }),
              $('#inspector').on('dblclick', 'input, textarea', function() {
                $(this).select();
              }),
              $('#show-notes').change(function() {
                this.checked
                  ? $('#notes').fadeIn('fast')
                  : $('#notes').fadeOut('fast');
              }),
              $('#artboards')
                .on('click', '.artboard', function(e) {
                  i.artboardIndex !== i.getIndex(this) &&
                    ((i.maxSize = void 0),
                    (i.artboardIndex = i.getIndex(this)),
                    (i.selectedIndex = void 0),
                    (i.current = i.project.artboards[i.artboardIndex]),
                    i.hideDistance(),
                    i.screen(),
                    i.layers(),
                    i.notes(),
                    $('.active').removeClass('active'),
                    $(this).addClass('active'),
                    i.locationHash({ artboard: i.artboardIndex }));
                })
                .on('click', '.pages-select', function(e) {
                  e.stopPropagation();
                })
                .on('change', 'input[name=page]', function(e) {
                  var t = $('.page-list input[name=page]:checked').val();
                  $('.pages-select h3').html(
                    $(this)
                      .parent()
                      .find('span')
                      .html()
                  ),
                    $('.artboard-list li').show(),
                    'all' != t &&
                      $('.artboard-list li').each(function() {
                        var e = $(this).attr('data-page-id');
                        t != e && $(this).hide();
                      }),
                    $('.pages-select').blur(),
                    e.stopPropagation();
                }),
              $('#slices')
                .on('mouseover', 'li', function() {
                  var e = $(this).attr('data-objectid');
                  $('.layer-' + e).addClass('has-slice');
                })
                .on('mouseout', 'li', function() {
                  $('.has-slice').removeClass('has-slice');
                })
                .on('click', 'li', function() {
                  var e = $(this).attr('data-objectid');
                  if ($('.layer-' + e).length > 0) {
                    var a = $('.layer-' + e).offset(),
                      s = {
                        left: $('.screen-viewer').scrollLeft(),
                        top: $('.screen-viewer').scrollTop(),
                      },
                      r = {
                        width: $('.layer-' + e).outerWidth(),
                        height: $('.layer-' + e).outerHeight(),
                      },
                      o = {
                        width: $('.screen-viewer').outerWidth(),
                        height: $('.screen-viewer').outerHeight(),
                      };
                    $('.screen-viewer').animate(
                      {
                        scrollLeft: a.left + s.left - (o.width - r.width) / 2,
                        scrollTop:
                          a.top + s.top - 60 - (o.height - r.height) / 2,
                      },
                      150
                    ),
                      $('.layer-' + e).click();
                  } else i.message(t('The slice not in current artboard.'));
                }),
              $('#inspector').on('click', '.color label', function() {
                (i.configs.colorFormat =
                  'color-hex' === i.configs.colorFormat
                    ? 'argb-hex'
                    : 'argb-hex' === i.configs.colorFormat
                      ? 'css-rgba'
                      : 'css-rgba' === i.configs.colorFormat
                        ? 'ui-color'
                        : 'color-hex'),
                  i.changeColorFormat();
              }),
              $('.tab').on('click', 'li', function() {
                var e = $(this),
                  t = e.attr('data-id');
                e.hasClass('current')
                  ? ($('.current').removeClass('current'),
                    $('.navbar').removeClass('on'))
                  : ($('.current').removeClass('current'),
                    $('.navbar section').hide(),
                    e.addClass('current'),
                    $('#' + t).show(),
                    $('.navbar').addClass('on'));
              }),
              $('#notes')
                .on('mousemove', '.note', function(e) {
                  e.stopPropagation(),
                    i.mouseoutLayer(),
                    i.hideDistance(),
                    $(this)
                      .find('div')
                      .show(),
                    $(this)
                      .find('div')
                      .outerWidth() > 160 &&
                      $(this)
                        .find('div')
                        .css({ width: 160, 'white-space': 'normal' });
                })
                .on('mouseout', '.note', function() {
                  $(this)
                    .find('div')
                    .hide();
                });
          },
        }),
          ((i.fn.init = function(e) {
            var t = this.locationHash();
            (this.project = e),
              (this.configs = {
                scale: this.project.scale,
                unit: this.project.unit,
                colorFormat: this.project.colorFormat,
                codeType: 'css',
              }),
              (this.artboardIndex = isNaN(t.artboard) ? 0 : t.artboard),
              (this.current = this.project.artboards[this.artboardIndex]);
            var i = $(document).height() / this.current.height;
            return (
              (this.configs.zoom = i >= 0.8 ? 1 : i >= 0.7 ? 0.75 : 0.5),
              this.render(),
              isNaN(t.artboard) ||
                ($('.current').removeClass('current'),
                $('.navbar').removeClass('on')),
              this.current.imageBase64 &&
                ($('.tab').remove(), $('.navbar').remove()),
              this
            );
          }).prototype =
            i.fn),
          (e.SMApp = i);
      })(window),
      (t.default = SMApp),
      (e.exports = t.default);
  },
  937: function(e, t) {},
  950: function(e, t, i) {
    'use strict';
    i(25);
  },
  964: function(e, t, i) {
    e.exports = { default: i(965), __esModule: !0 };
  },
  965: function(e, t, i) {
    var a = i(14),
      s = a.JSON || (a.JSON = { stringify: JSON.stringify });
    e.exports = function(e) {
      return s.stringify.apply(s, arguments);
    };
  },
});
