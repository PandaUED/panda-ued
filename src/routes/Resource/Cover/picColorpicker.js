(function ($) {
	/**
	 * Create a couple private variables.
	 **/
	var selectorOwner,
	    activePalette,
	    cItterate       = 0,
	    templates       = {
		    control : $('<div class="colorPicker-picker">&nbsp;</div>'),
		    palette : $('<div id="colorPicker_palette" class="colorPicker-palette" />'),
		    swatch  : $('<div class="colorPicker-swatch">&nbsp;</div>'),
		    hexLabel: $('<label for="colorPicker_hex">Hex</label>'),
		    hexField: $('<input type="text" id="colorPicker_hex" />')
	    },
	    transparent     = "transparent",
	    lastColor;

	/**
	 * Create our colorPicker function
	 **/
	$.fn.colorPicker = function (options) {

		return this.each(function () {
			// Setup time. Clone new elements from our templates, set some IDs, make shortcuts, jazzercise.
			var element      = $(this),
			    opts         = $.extend({}, $.fn.colorPicker.defaults, options),
			    defaultColor = $.fn.colorPicker.toHex(
					    (element.val().length > 0) ? element.val() : opts.pickerDefault
			    ),
			    newControl   = templates.control.clone(),
			    newPalette   = templates.palette.clone().attr('id', 'colorPicker_palette-' + cItterate),
			    newHexLabel  = templates.hexLabel.clone(),
			    newHexField  = templates.hexField.clone(),
			    paletteId    = newPalette[0].id,
			    swatch, controlText;


			/**
			 * Build a color palette.
			 **/
			$.each(opts.colors, function (i) {
				swatch = templates.swatch.clone();

				if (opts.colors[i] === transparent) {
					swatch.addClass(transparent).text('X');
					$.fn.colorPicker.bindPalette(newHexField, swatch, transparent);
				} else {
					swatch.css("background-color", "#" + this);
					$.fn.colorPicker.bindPalette(newHexField, swatch);
				}
				swatch.appendTo(newPalette);
			});


			newHexLabel.attr('for', 'colorPicker_hex-' + cItterate);

			newHexField.attr({
				                 'id'    : 'colorPicker_hex-' + cItterate,
				                 'value' : defaultColor
			                 });

			newHexField.bind("keydown", function (event) {
				if (event.keyCode === 13) {
					var hexColor = $.fn.colorPicker.toHex($(this).val());
					$.fn.colorPicker.changeColor(hexColor ? hexColor : element.val());
				}
				if (event.keyCode === 27) {
					$.fn.colorPicker.hidePalette();
				}
			});

			newHexField.bind("keyup", function (event) {
				var hexColor = $.fn.colorPicker.toHex($(event.target).val());
				$.fn.colorPicker.previewColor(hexColor ? hexColor : element.val());
			});

			$('<div class="colorPicker_hexWrap" />').append(newHexLabel).appendTo(newPalette);

			newPalette.find('.colorPicker_hexWrap').append(newHexField);
			if (opts.showHexField === false) {
				newHexField.hide();
				newHexLabel.hide();
			}

			$("body").append(newPalette);

			newPalette.hide();


			/**
			 * Build replacement interface for original color input.
			 **/
			newControl.css("background-color", defaultColor);

			newControl.bind("click", function () {
				if( element.is( ':not(:disabled)' ) ) {
					$.fn.colorPicker.togglePalette($('#' + paletteId), $(this));
				}
			});

			if( options && options.onColorChange ) {
				newControl.data('onColorChange', options.onColorChange);
			} else {
				newControl.data('onColorChange', function() {} );
			}

			if (controlText = element.data('text'))
				newControl.html(controlText)

			element.after(newControl);

			element.bind("change", function () {
				element.next(".colorPicker-picker").css(
						"background-color", $.fn.colorPicker.toHex($(this).val())
				);
			});

			element.val(defaultColor);

			// Hide the original input.
			if (element[0].tagName.toLowerCase() === 'input') {
				try {
					element.attr('type', 'hidden')
				} catch(err) { // oldIE doesn't allow changing of input.type
					element.css('visibility', 'hidden').css('position', 'absolute')
				}
			} else {
				element.hide();
			}

			cItterate++;
		});
	};

	/**
	 * Extend colorPicker with... all our functionality.
	 **/
	$.extend(true, $.fn.colorPicker, {
		/**
		 * Return a Hex color, convert an RGB value and return Hex, or return false.
		 *
		 * Inspired by http://code.google.com/p/jquery-color-utils
		 **/
		toHex : function (color) {
			// If we have a standard or shorthand Hex color, return that value.
			if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
				return (color.charAt(0) === "#") ? color : ("#" + color);

				// Alternatively, check for RGB color, then convert and return it as Hex.
			} else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
				var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]),
				    pad = function (str) {
					    if (str.length < 2) {
						    for (var i = 0, len = 2 - str.length; i < len; i++) {
							    str = '0' + str;
						    }
					    }

					    return str;
				    };

				if (c.length === 3) {
					var r = pad(c[0].toString(16)),
					    g = pad(c[1].toString(16)),
					    b = pad(c[2].toString(16));

					return '#' + r + g + b;
				}

				// Otherwise we wont do anything.
			} else {
				return false;

			}
		},

		/**
		 * Check whether user clicked on the selector or owner.
		 **/
		checkMouse : function (event, paletteId) {
			var selector = activePalette,
			    selectorParent = $(event.target).parents("#" + selector.attr('id')).length;

			if (event.target === $(selector)[0] || event.target === selectorOwner[0] || selectorParent > 0) {
				return;
			}

			$.fn.colorPicker.hidePalette();
		},

		/**
		 * Hide the color palette modal.
		 **/
		hidePalette : function () {
			$(document).unbind("mousedown", $.fn.colorPicker.checkMouse);

			$('.colorPicker-palette').hide();
		},

		/**
		 * Show the color palette modal.
		 **/
		showPalette : function (palette) {
			var hexColor = selectorOwner.prev("input").val();

			palette.css({
				            top: selectorOwner.offset().top + (selectorOwner.outerHeight()),
				            left: selectorOwner.offset().left
			            });

			$("#color_value").val(hexColor);

			palette.show();

			$(document).bind("mousedown", $.fn.colorPicker.checkMouse);
		},

		/**
		 * Toggle visibility of the colorPicker palette.
		 **/
		togglePalette : function (palette, origin) {
			// selectorOwner is the clicked .colorPicker-picker.
			if (origin) {
				selectorOwner = origin;
			}

			activePalette = palette;

			if (activePalette.is(':visible')) {
				$.fn.colorPicker.hidePalette();

			} else {
				$.fn.colorPicker.showPalette(palette);

			}
		},

		/**
		 * Update the input with a newly selected color.
		 **/
		changeColor : function (value) {
			selectorOwner.css("background-color", value);
			selectorOwner.prev("input").val(value).change();

			$.fn.colorPicker.hidePalette();

			selectorOwner.data('onColorChange').call(selectorOwner, $(selectorOwner).prev("input").attr("id"), value);
		},


		/**
		 * Preview the input with a newly selected color.
		 **/
		previewColor : function (value) {
			selectorOwner.css("background-color", value);
		},

		/**
		 * Bind events to the color palette swatches.
		 */
		bindPalette : function (paletteInput, element, color) {
			color = color ? color : $.fn.colorPicker.toHex(element.css("background-color"));

			element.bind({
				             click : function (ev) {
					             lastColor = color;

					             $.fn.colorPicker.changeColor(color);
				             },
				             mouseover : function (ev) {
					             lastColor = paletteInput.val();

					             $(this).css("border-color", "#598FEF");

					             paletteInput.val(color);

					             $.fn.colorPicker.previewColor(color);
				             },
				             mouseout : function (ev) {
					             $(this).css("border-color", "#000");

					             paletteInput.val(selectorOwner.css("background-color"));

					             paletteInput.val(lastColor);

					             $.fn.colorPicker.previewColor(lastColor);
				             }
			             });
		}
	});

	/**
	 * Default colorPicker options.
	 *
	 * These are publibly available for global modification using a setting such as:
	 *
	 * $.fn.colorPicker.defaults.colors = ['151337', '111111']
	 *
	 * They can also be applied on a per-bound element basis like so:
	 *
	 * $('#element1').colorPicker({pickerDefault: 'efefef', transparency: true});
	 * $('#element2').colorPicker({pickerDefault: '333333', colors: ['333333', '111111']});
	 *
	 **/
	$.fn.colorPicker.defaults = {
		// colorPicker default selected color.
		pickerDefault : "FFFFFF",

		// Default color set.
		colors       : [
			"ff5b62",
			"ff6c3d",
			"ff983d",
			"ffbc1c",
			"95ce5d",
			"5dce89",
			"5dceba",
			"88d5ec",
			"88b7ec",
			"5090b5",
			"5068b5",
			"9360be",
			"be60b1",
			"c84973"
		],

		// If we want to simply add more colors to the default set, use addColors.
		addColors : [],

		// Show hex field
		showHexField: true
	};

})(jQuery);