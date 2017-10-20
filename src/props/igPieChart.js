$.ig.react.propTypes.shapes.igPieChartLegend = {
	element: React.PropTypes.string,
	type: React.PropTypes.oneOf([
		"item",
		"legend"
	]),
	width: React.PropTypes.number,
	height: React.PropTypes.number
}

$.ig.react.propTypes.igPieChart = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	dataSource: React.PropTypes.object,
	dataSourceUrl: React.PropTypes.string,
	dataSourceType: React.PropTypes.string,
	responseDataKey: React.PropTypes.string,
	valueMemberPath: React.PropTypes.string,
	labelMemberPath: React.PropTypes.string,
	legendLabelMemberPath: React.PropTypes.string,
	dataValue: React.PropTypes.string,
	dataLabel: React.PropTypes.string,
	labelsPosition: React.PropTypes.oneOf([
		"none",
		"center",
		"insideEnd",
		"outsideEnd",
		"bestFit"
	]),
	labelOuterColor: React.PropTypes.string,
	labelInnerColor: React.PropTypes.string,
	selectionMode: React.PropTypes.oneOf([
		"single",
		"multiple",
		"manual"
	]),
	selectedItem: React.PropTypes.object,
	selectedItems: React.PropTypes.array,
	leaderLineVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	leaderLineType: React.PropTypes.oneOf([
		"straight",
		"arc",
		"spline"
	]),
	leaderLineMargin: React.PropTypes.number,
	othersCategoryThreshold: React.PropTypes.number,
	formatLabel: React.PropTypes.func,
	othersCategoryStyle: React.PropTypes.object,
	othersCategoryType: React.PropTypes.oneOf([
		"number",
		"percent"
	]),
	othersCategoryText: React.PropTypes.string,
	explodedRadius: React.PropTypes.number,
	radiusFactor: React.PropTypes.number,
	allowSliceSelection: React.PropTypes.bool,
	allowSliceExplosion: React.PropTypes.bool,
	explodedSlices: React.PropTypes.array,
	selectedSlices: React.PropTypes.array,
	showTooltip: React.PropTypes.bool,
	tooltipTemplate: React.PropTypes.string,
	legend: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPieChartLegend
	),
	labelExtent: React.PropTypes.number,
	startAngle: React.PropTypes.number,
	sweepDirection: React.PropTypes.oneOf([
		"counterclockwise",
		"clockwise"
	]),
	selectedStyle: React.PropTypes.object,
	brushes: React.PropTypes.object,
	outlines: React.PropTypes.object,
	legendItemTemplate: React.PropTypes.object,
	legendItemBadgeTemplate: React.PropTypes.object,
	textStyle: React.PropTypes.string,
	theme: React.PropTypes.string
}
