$.ig.react.propTypes.shapes.igSplitterPanel = {
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	min: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	max: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	resizable: PropTypes.bool,
	collapsed: PropTypes.bool,
	collapsible: PropTypes.bool
}

$.ig.react.propTypes.igSplitter = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	orientation: PropTypes.oneOf([
		"vertical",
		"horizontal"
	]),
	panels: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igSplitterPanel)
	),
	dragDelta: PropTypes.number,
	resizeOtherSplitters: PropTypes.bool
}
