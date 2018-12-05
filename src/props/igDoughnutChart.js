$.ig.react.propTypes.shapes.igDoughnutChartSeries = {
	type: PropTypes.oneOf([
		"flat"
	]),
	showTooltip: PropTypes.bool,
	tooltipTemplate: PropTypes.string,
	itemsSource: PropTypes.object,
	valueMemberPath: PropTypes.string,
	labelMemberPath: PropTypes.string,
	legendLabelMemberPath: PropTypes.string,
	labelsPosition: PropTypes.oneOf([
		"none",
		"center",
		"insideEnd",
		"outsideEnd",
		"bestFit"
	]),
	leaderLineVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	leaderLineStyle: PropTypes.object,
	leaderLineType: PropTypes.oneOf([
		"straight",
		"arc",
		"spline"
	]),
	leaderLineMargin: PropTypes.number,
	othersCategoryThreshold: PropTypes.number,
	othersCategoryType: PropTypes.oneOf([
		"number",
		"percent"
	]),
	othersCategoryText: PropTypes.string,
	legend: PropTypes.object,
	formatLabel: PropTypes.object,
	formatLegendLabel: PropTypes.object,
	labelExtent: PropTypes.number,
	startAngle: PropTypes.number,
	selectedStyle: PropTypes.object,
	brushes: PropTypes.object,
	outlines: PropTypes.object,
	isSurfaceInteractionDisabled: PropTypes.bool,
	radiusFactor: PropTypes.number
}

$.ig.react.propTypes.igDoughnutChart = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	series: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igDoughnutChartSeries)
	),
	allowSliceSelection: PropTypes.bool,
	isSurfaceInteractionDisabled: PropTypes.bool,
	allowSliceExplosion: PropTypes.bool,
	innerExtent: PropTypes.number,
	selectedStyle: PropTypes.object,
	pixelScalingRatio: PropTypes.number,
	tooltipTemplate: PropTypes.string,
	maxRecCount: PropTypes.number,
	dataSource: PropTypes.object,
	dataSourceType: PropTypes.string,
	dataSourceUrl: PropTypes.string,
	responseTotalRecCountKey: PropTypes.string,
	responseDataKey: PropTypes.string
}
