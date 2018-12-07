$.ig.react.propTypes.shapes.igTileManagerSplitterOptionsEvents = {
	collapsed: PropTypes.object,
	expanded: PropTypes.object
}

$.ig.react.propTypes.shapes.igTileManagerSplitterOptions = {
	enabled: PropTypes.bool,
	collapsible: PropTypes.bool,
	collapsed: PropTypes.bool,
	events: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTileManagerSplitterOptionsEvents
	)
}

$.ig.react.propTypes.igTileManager = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	columnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array
	]),
	columnHeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array
	]),
	cols: PropTypes.oneOfType([
		PropTypes.number
	]),
	rows: PropTypes.oneOfType([
		PropTypes.number
	]),
	marginLeft: PropTypes.number,
	marginTop: PropTypes.number,
	rearrangeItems: PropTypes.bool,
	items: PropTypes.oneOfType([
		PropTypes.object
	]),
	dataSource: PropTypes.object,
	minimizedState: PropTypes.oneOfType([
		PropTypes.string
	]),
	maximizedState: PropTypes.oneOfType([
		PropTypes.string
	]),
	maximizedTileIndex: PropTypes.oneOfType([
		PropTypes.number
	]),
	rightPanelCols: PropTypes.oneOfType([
		PropTypes.number
	]),
	rightPanelTilesWidth: PropTypes.oneOfType([
		PropTypes.number
	]),
	rightPanelTilesHeight: PropTypes.oneOfType([
		PropTypes.number
	]),
	showRightPanelScroll: PropTypes.bool,
	splitterOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTileManagerSplitterOptions
	),
	preventMaximizingSelector: PropTypes.string,
	animationDuration: PropTypes.number,
	dataSourceUrl: PropTypes.string,
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataType: PropTypes.oneOfType([
		PropTypes.string
	]),
	dataSourceType: PropTypes.string,
	requestType: PropTypes.string,
	responseContentType: PropTypes.string
}
