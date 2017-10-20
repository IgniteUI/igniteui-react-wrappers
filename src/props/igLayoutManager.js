$.ig.react.propTypes.shapes.igLayoutManagerBorderLayout = {
	leftWidth: React.PropTypes.string,
	rightWidth: React.PropTypes.string,
	showFooter: React.PropTypes.bool,
	showHeader: React.PropTypes.bool,
	showLeft: React.PropTypes.bool,
	showRight: React.PropTypes.bool
}

$.ig.react.propTypes.shapes.igLayoutManagerGridLayout = {
	animationDuration: React.PropTypes.number,
	cols: React.PropTypes.number,
	columnHeight: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array
	]),
	columnWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array
	]),
	marginLeft: React.PropTypes.number,
	marginTop: React.PropTypes.number,
	overrideConfigOnSetOption: React.PropTypes.bool,
	rearrangeItems: React.PropTypes.bool,
	rows: React.PropTypes.number
}

$.ig.react.propTypes.shapes.igLayoutManagerItem = {
	colIndex: React.PropTypes.number,
	colSpan: React.PropTypes.number,
	height: React.PropTypes.string,
	rowIndex: React.PropTypes.number,
	rowSpan: React.PropTypes.number,
	width: React.PropTypes.number
}

$.ig.react.propTypes.igLayoutManager = {
	id: React.PropTypes.string.isRequired,
	borderLayout: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igLayoutManagerBorderLayout
	),
	gridLayout: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igLayoutManagerGridLayout
	),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	itemCount: React.PropTypes.number,
	items: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igLayoutManagerItem)
	),
	layoutMode: React.PropTypes.any,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	])
}
