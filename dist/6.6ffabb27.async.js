webpackJsonp([6, 16, 18], {
  292: function(o, e, c) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(o) {
        var e = void 0;
        switch (o) {
          case '1':
            $('#tag-title').val('\u4e8c\u53d1\u6da8\u59ff\u52bf'),
              $('#color-bg').val('#BE60B1'),
              $('#color-tag').val('#5DCE89'),
              (e = '1');
            break;
          case '2':
            $('#tag-title').val('\u4e8c\u53d1\u5e26\u4f60\u98de'),
              $('#color-bg').val('#88d5ec'),
              $('#color-bg').change,
              $('#color-tag').val('#ffbc1c'),
              (e = '2');
            break;
          case '3':
            $('#tag-title').val('\u4e8c\u53d1\u8bf4\u4e2a\u4e8b'),
              $('#color-bg').val('#FFBC1C'),
              $('#color-tag').val('#FF6C3D'),
              (e = '3');
            break;
          case '4':
            $('#tag-title').val('\u4e8c\u53d1\u626f\u7740\u6de1'),
              $('#color-bg').val('#FF5B62'),
              $('#color-tag').val('#5090B5'),
              (e = '4');
            break;
          case '5':
            $('#tag-title').val('\u4e8c\u53d1\u8bf4'),
              $('#color-bg').val('#ff6c3d'),
              $('#color-tag').val('#ffbc1c'),
              (e = '1');
        }
        $('#color-bg').change(),
          $('#color-tag').change(),
          $('#tag-title').change(),
          $('#tag').html($('#tag-title').val()),
          $('#cover-bg').css(
            'background-image',
            'url(/img/tools/emo/' + e + '.png)'
          ),
          $('#cover').css('background-color', $('#color-bg').val()),
          $('#cover-content').css('background-color', $('#color-bg').val()),
          $('#tag').css('background-color', $('#color-tag').val());
      }),
      (o.exports = e.default);
  },
  293: function(o, e, c) {
    'use strict';
    !(function(o) {
      var e,
        c,
        t,
        r = 0,
        l = {
          control: o('<div class="colorPicker-picker">&nbsp;</div>'),
          palette: o(
            '<div id="colorPicker_palette" class="colorPicker-palette" />'
          ),
          swatch: o('<div class="colorPicker-swatch">&nbsp;</div>'),
          hexLabel: o('<label for="colorPicker_hex">Hex</label>'),
          hexField: o('<input type="text" id="colorPicker_hex" />'),
        };
      (o.fn.colorPicker = function(e) {
        return this.each(function() {
          var c,
            t,
            a = o(this),
            n = o.extend({}, o.fn.colorPicker.defaults, e),
            i = o.fn.colorPicker.toHex(
              a.val().length > 0 ? a.val() : n.pickerDefault
            ),
            s = l.control.clone(),
            d = l.palette.clone().attr('id', 'colorPicker_palette-' + r),
            f = l.hexLabel.clone(),
            g = l.hexField.clone(),
            u = d[0].id;
          if (
            (o.each(n.colors, function(e) {
              (c = l.swatch.clone()),
                'transparent' === n.colors[e]
                  ? (c.addClass('transparent').text('X'),
                    o.fn.colorPicker.bindPalette(g, c, 'transparent'))
                  : (c.css('background-color', '#' + this),
                    o.fn.colorPicker.bindPalette(g, c)),
                c.appendTo(d);
            }),
            f.attr('for', 'colorPicker_hex-' + r),
            g.attr({ id: 'colorPicker_hex-' + r, value: i }),
            g.bind('keydown', function(e) {
              if (13 === e.keyCode) {
                var c = o.fn.colorPicker.toHex(o(this).val());
                o.fn.colorPicker.changeColor(c || a.val());
              }
              27 === e.keyCode && o.fn.colorPicker.hidePalette();
            }),
            g.bind('keyup', function(e) {
              var c = o.fn.colorPicker.toHex(o(e.target).val());
              o.fn.colorPicker.previewColor(c || a.val());
            }),
            o('<div class="colorPicker_hexWrap" />')
              .append(f)
              .appendTo(d),
            d.find('.colorPicker_hexWrap').append(g),
            !1 === n.showHexField && (g.hide(), f.hide()),
            o('body').append(d),
            d.hide(),
            s.css('background-color', i),
            s.bind('click', function() {
              a.is(':not(:disabled)') &&
                o.fn.colorPicker.togglePalette(o('#' + u), o(this));
            }),
            e && e.onColorChange
              ? s.data('onColorChange', e.onColorChange)
              : s.data('onColorChange', function() {}),
            (t = a.data('text')) && s.html(t),
            a.after(s),
            a.bind('change', function() {
              a
                .next('.colorPicker-picker')
                .css('background-color', o.fn.colorPicker.toHex(o(this).val()));
            }),
            a.val(i),
            'input' === a[0].tagName.toLowerCase())
          )
            try {
              a.attr('type', 'hidden');
            } catch (o) {
              a.css('visibility', 'hidden').css('position', 'absolute');
            }
          else a.hide();
          r++;
        });
      }),
        o.extend(!0, o.fn.colorPicker, {
          toHex: function(o) {
            if (o.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i))
              return '#' === o.charAt(0) ? o : '#' + o;
            if (
              !o.match(
                /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
              )
            )
              return !1;
            var e = [
                parseInt(RegExp.$1, 10),
                parseInt(RegExp.$2, 10),
                parseInt(RegExp.$3, 10),
              ],
              c = function(o) {
                if (o.length < 2)
                  for (var e = 0, c = 2 - o.length; e < c; e++) o = '0' + o;
                return o;
              };
            if (3 === e.length) {
              return (
                '#' +
                c(e[0].toString(16)) +
                c(e[1].toString(16)) +
                c(e[2].toString(16))
              );
            }
          },
          checkMouse: function(t, r) {
            var l = c,
              a = o(t.target).parents('#' + l.attr('id')).length;
            t.target === o(l)[0] ||
              t.target === e[0] ||
              a > 0 ||
              o.fn.colorPicker.hidePalette();
          },
          hidePalette: function() {
            o(document).unbind('mousedown', o.fn.colorPicker.checkMouse),
              o('.colorPicker-palette').hide();
          },
          showPalette: function(c) {
            var t = e.prev('input').val();
            c.css({
              top: e.offset().top + e.outerHeight(),
              left: e.offset().left,
            }),
              o('#color_value').val(t),
              c.show(),
              o(document).bind('mousedown', o.fn.colorPicker.checkMouse);
          },
          togglePalette: function(t, r) {
            r && (e = r),
              (c = t),
              c.is(':visible')
                ? o.fn.colorPicker.hidePalette()
                : o.fn.colorPicker.showPalette(t);
          },
          changeColor: function(c) {
            e.css('background-color', c),
              e
                .prev('input')
                .val(c)
                .change(),
              o.fn.colorPicker.hidePalette(),
              e.data('onColorChange').call(
                e,
                o(e)
                  .prev('input')
                  .attr('id'),
                c
              );
          },
          previewColor: function(o) {
            e.css('background-color', o);
          },
          bindPalette: function(c, r, l) {
            (l = l || o.fn.colorPicker.toHex(r.css('background-color'))),
              r.bind({
                click: function(e) {
                  (t = l), o.fn.colorPicker.changeColor(l);
                },
                mouseover: function(e) {
                  (t = c.val()),
                    o(this).css('border-color', '#598FEF'),
                    c.val(l),
                    o.fn.colorPicker.previewColor(l);
                },
                mouseout: function(r) {
                  o(this).css('border-color', '#000'),
                    c.val(e.css('background-color')),
                    c.val(t),
                    o.fn.colorPicker.previewColor(t);
                },
              });
          },
        }),
        (o.fn.colorPicker.defaults = {
          pickerDefault: 'FFFFFF',
          colors: [
            'ff5b62',
            'ff6c3d',
            'ff983d',
            'ffbc1c',
            '95ce5d',
            '5dce89',
            '5dceba',
            '88d5ec',
            '88b7ec',
            '5090b5',
            '5068b5',
            '9360be',
            'be60b1',
            'c84973',
          ],
          addColors: [],
          showHexField: !0,
        });
    })(jQuery);
  },
  296: function(o, e, c) {
    'use strict';
    function t() {
      0 == $('.colorPicker-picker').length &&
        ($('.colorPicker-palette').remove(),
        $('#color-bg').colorPicker(),
        $('#color-tag').colorPicker());
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), c(293);
    var r = c(292),
      l = (function(o) {
        return o && o.__esModule ? o : { default: o };
      })(r);
    (e.default = function() {
      t(),
        (0, l.default)('1'),
        $('#cover').css('background-color', $('#color-bg').val()),
        $('#cover-content').css('background-color', $('#color-bg').val()),
        $('#tag').css('background-color', $('#color-tag').val()),
        $('.colorPicker-swatch').click(function() {
          $('#cover').css('background-color', $('#color-bg').val()),
            $('#cover-content').css('background', $('#color-bg').val()),
            $('#tag').css('background-color', $('#color-tag').val());
        }),
        $('#tag-title').bind('input propertychange', function() {
          $('#tag').html($(this).val());
        }),
        $('#title').bind('input propertychange', function() {
          $('#cover-content').html($(this).val());
        });
    }),
      (o.exports = e.default);
  },
});
