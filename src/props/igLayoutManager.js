(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igLayoutManagerGridLayout = {
		cols: React.PropTypes.number,
		rows: React.PropTypes.number,
		columnWidth: React.PropTypes.object,
		columnHeight: React.PropTypes.object,
		marginLeft: React.PropTypes.number,
		marginTop: React.PropTypes.number,
		rearrangeItems: React.PropTypes.bool,
		overrideConfigOnSetOption: React.PropTypes.bool,
		animationDuration: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igLayoutManagerBorderLayout = {
		showHeader: React.PropTypes.bool,
		showFooter: React.PropTypes.bool,
		showLeft: React.PropTypes.bool,
		showRight: React.PropTypes.bool,
		leftWidth: React.PropTypes.string,
		rightWidth: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igLayoutManagerItem = {
		rowSpan: React.PropTypes.number,
		colSpan: React.PropTypes.number,
		colIndex: React.PropTypes.number,
		rowIndex: React.PropTypes.number,
		width: React.PropTypes.string,
		height: React.PropTypes.string
	}

	$.ig.react.propTypes.igLayoutManager = {
		id: React.PropTypes.string.isRequired,
		layoutMode: React.PropTypes.any,
		itemCount: React.PropTypes.number,
		gridLayout: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgLayoutManagerGridLayout
		),
		borderLayout: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgLayoutManagerBorderLayout
		),
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igLayoutManagerItem)
		),
		width: React.PropTypes.string,
		height: React.PropTypes.string
	}

})(jQuery);
