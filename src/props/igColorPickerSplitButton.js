(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igColorPickerSplitButton = {
		id: React.PropTypes.string.isRequired,
		items: React.PropTypes.array,
		defaultColor: React.PropTypes.string,
		hasDefaultIcon: React.PropTypes.bool,
		defaultItemName: React.PropTypes.string,
		swapDefaultEnabled: React.PropTypes.bool
	}

})(jQuery);
