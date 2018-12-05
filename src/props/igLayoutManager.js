$.ig.react.propTypes.shapes.igLayoutManagerBorderLayout = {
	leftWidth: PropTypes.string,
	rightWidth: PropTypes.string,
	showFooter: PropTypes.bool,
	showHeader: PropTypes.bool,
	showLeft: PropTypes.bool,
	showRight: PropTypes.bool
}

$.ig.react.propTypes.shapes.igLayoutManagerGridLayout = {
	animationDuration: PropTypes.number,
	cols: PropTypes.number,
	columnHeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array
	]),
	columnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array
	]),
	marginLeft: PropTypes.number,
	marginTop: PropTypes.number,
	overrideConfigOnSetOption: PropTypes.bool,
	rearrangeItems: PropTypes.bool,
	rows: PropTypes.number
}

$.ig.react.propTypes.shapes.igLayoutManagerItem = {
	colIndex: PropTypes.number,
	colSpan: PropTypes.number,
	height: PropTypes.string,
	rowIndex: PropTypes.number,
	rowSpan: PropTypes.number,
	width: PropTypes.number
}

$.ig.react.propTypes.igLayoutManager = {
	id: PropTypes.string.isRequired,
	borderLayout: PropTypes.shape(
		$.ig.react.propTypes.shapes.igLayoutManagerBorderLayout
	),
	gridLayout: PropTypes.shape(
		$.ig.react.propTypes.shapes.igLayoutManagerGridLayout
	),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	itemCount: PropTypes.number,
	items: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igLayoutManagerItem)
	),
	layoutMode: PropTypes.any,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}
