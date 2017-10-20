$.ig.react.propTypes.shapes.igTileManagerSplitterOptionsEvents = {
	collapsed: React.PropTypes.object,
	expanded: React.PropTypes.object
}

$.ig.react.propTypes.shapes.igTileManagerSplitterOptions = {
	enabled: React.PropTypes.bool,
	collapsible: React.PropTypes.bool,
	collapsed: React.PropTypes.bool,
	events: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igTileManagerSplitterOptionsEvents
	)
}

$.ig.react.propTypes.igTileManager = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	columnWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array
	]),
	columnHeight: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array
	]),
	cols: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	rows: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	marginLeft: React.PropTypes.number,
	marginTop: React.PropTypes.number,
	rearrangeItems: React.PropTypes.bool,
	items: React.PropTypes.oneOfType([
		React.PropTypes.object
	]),
	dataSource: React.PropTypes.object,
	minimizedState: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	maximizedState: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	maximizedTileIndex: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	rightPanelCols: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	rightPanelTilesWidth: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	rightPanelTilesHeight: React.PropTypes.oneOfType([
		React.PropTypes.number
	]),
	showRightPanelScroll: React.PropTypes.bool,
	splitterOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igTileManagerSplitterOptions
	),
	preventMaximizingSelector: React.PropTypes.string,
	animationDuration: React.PropTypes.number,
	dataSourceUrl: React.PropTypes.string,
	responseDataKey: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	responseDataType: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	dataSourceType: React.PropTypes.string,
	requestType: React.PropTypes.string,
	responseContentType: React.PropTypes.string
}
