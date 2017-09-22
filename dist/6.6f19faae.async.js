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
      var e = void 0,
        c = void 0,
        t = 0,
        r = {
          control: o('<div class="colorPicker-picker">&nbsp;</div>'),
          palette: o(
            '<div id="colorPicker_palette" class="colorPicker-palette" />'
          ),
          swatch: o('<div class="colorPicker-swatch">&nbsp;</div>'),
          hexLabel: o('<label for="colorPicker_hex">Hex</label>'),
          hexField: o('<input type="text" id="colorPicker_hex" />'),
        },
        l = void 0;
      (o.fn.colorPicker = function(e) {
        return this.each(function() {
          var c = o(this),
            l = o.extend({}, o.fn.colorPicker.defaults, e),
            a = o.fn.colorPicker.toHex(
              c.val().length > 0 ? c.val() : l.pickerDefault
            ),
            n = r.control.clone(),
            i = r.palette.clone().attr('id', 'colorPicker_palette-' + t),
            s = r.hexLabel.clone(),
            d = r.hexField.clone(),
            f = i[0].id,
            g = void 0,
            u = void 0;
          if (
            (o.each(l.colors, function(e) {
              (g = r.swatch.clone()),
                'transparent' === l.colors[e]
                  ? (g.addClass('transparent').text('X'),
                    o.fn.colorPicker.bindPalette(d, g, 'transparent'))
                  : (g.css('background-color', '#' + this),
                    o.fn.colorPicker.bindPalette(d, g)),
                g.appendTo(i);
            }),
            s.attr('for', 'colorPicker_hex-' + t),
            d.attr({ id: 'colorPicker_hex-' + t, value: a }),
            d.bind('keydown', function(e) {
              if (13 === e.keyCode) {
                var t = o.fn.colorPicker.toHex(o(this).val());
                o.fn.colorPicker.changeColor(t || c.val());
              }
              27 === e.keyCode && o.fn.colorPicker.hidePalette();
            }),
            d.bind('keyup', function(e) {
              var t = o.fn.colorPicker.toHex(o(e.target).val());
              o.fn.colorPicker.previewColor(t || c.val());
            }),
            o('<div class="colorPicker_hexWrap" />')
              .append(s)
              .appendTo(i),
            i.find('.colorPicker_hexWrap').append(d),
            !1 === l.showHexField && (d.hide(), s.hide()),
            o('body').append(i),
            i.hide(),
            n.css('background-color', a),
            n.bind('click', function() {
              c.is(':not(:disabled)') &&
                o.fn.colorPicker.togglePalette(o('#' + f), o(this));
            }),
            e && e.onColorChange
              ? n.data('onColorChange', e.onColorChange)
              : n.data('onColorChange', function() {}),
            (u = c.data('text')) && n.html(u),
            c.after(n),
            c.bind('change', function() {
              c
                .next('.colorPicker-picker')
                .css('background-color', o.fn.colorPicker.toHex(o(this).val()));
            }),
            c.val(a),
            'input' === c[0].tagName.toLowerCase())
          )
            try {
              c.attr('type', 'hidden');
            } catch (o) {
              c.css('visibility', 'hidden').css('position', 'absolute');
            }
          else c.hide();
          t++;
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
          bindPalette: function(c, t, r) {
            (r = r || o.fn.colorPicker.toHex(t.css('background-color'))),
              t.bind({
                click: function(e) {
                  (l = r), o.fn.colorPicker.changeColor(r);
                },
                mouseover: function(e) {
                  (l = c.val()),
                    o(this).css('border-color', '#598FEF'),
                    c.val(r),
                    o.fn.colorPicker.previewColor(r);
                },
                mouseout: function(t) {
                  o(this).css('border-color', '#000'),
                    c.val(e.css('background-color')),
                    c.val(l),
                    o.fn.colorPicker.previewColor(l);
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
      0 === $('.colorPicker-picker').length &&
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
