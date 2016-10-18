(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igSplitterPanel = {
		size: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		min: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		max: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		resizable: React.PropTypes.bool,
		collapsed: React.PropTypes.bool,
		collapsible: React.PropTypes.bool
	}

	$.ig.react.propTypes.igSplitter = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		orientation: React.PropTypes.oneOf([
			"vertical",
			"horizontal"
		]),
		panels: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igSplitterPanel)
		),
		dragDelta: React.PropTypes.number,
		resizeOtherSplitters: React.PropTypes.bool
	}

})(jQuery);
