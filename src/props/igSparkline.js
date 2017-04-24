$.ig.react.propTypes.igSparkline = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	brush: React.PropTypes.string,
	negativeBrush: React.PropTypes.string,
	markerBrush: React.PropTypes.string,
	negativeMarkerBrush: React.PropTypes.string,
	firstMarkerBrush: React.PropTypes.string,
	lastMarkerBrush: React.PropTypes.string,
	highMarkerBrush: React.PropTypes.string,
	lowMarkerBrush: React.PropTypes.string,
	trendLineBrush: React.PropTypes.string,
	horizontalAxisBrush: React.PropTypes.string,
	verticalAxisBrush: React.PropTypes.string,
	normalRangeFill: React.PropTypes.string,
	horizontalAxisVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	verticalAxisVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	markerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	negativeMarkerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	firstMarkerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	lastMarkerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	lowMarkerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	highMarkerVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	normalRangeVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	displayNormalRangeInFront: React.PropTypes.bool,
	markerSize: React.PropTypes.number,
	firstMarkerSize: React.PropTypes.number,
	lastMarkerSize: React.PropTypes.number,
	highMarkerSize: React.PropTypes.number,
	lowMarkerSize: React.PropTypes.number,
	negativeMarkerSize: React.PropTypes.number,
	lineThickness: React.PropTypes.number,
	valueMemberPath: React.PropTypes.string,
	labelMemberPath: React.PropTypes.string,
	trendLineType: React.PropTypes.oneOf([
		"none",
		"linearFit",
		"quadraticFit",
		"cubicFit",
		"quarticFit",
		"quinticFit",
		"logarithmicFit",
		"exponentialFit",
		"powerLawFit",
		"simpleAverage",
		"exponentialAverage",
		"modifiedAverage",
		"cumulativeAverage",
		"weightedAverage"
	]),
	trendLinePeriod: React.PropTypes.number,
	trendLineThickness: React.PropTypes.number,
	normalRangeMinimum: React.PropTypes.number,
	normalRangeMaximum: React.PropTypes.number,
	displayType: React.PropTypes.oneOf([
		"line",
		"area",
		"column",
		"winLoss"
	]),
	unknownValuePlotting: React.PropTypes.oneOf([
		"linearInterpolate",
		"dontPlot"
	]),
	verticalAxisLabel: React.PropTypes.object,
	horizontalAxisLabel: React.PropTypes.object,
	formatLabel: React.PropTypes.object,
	pixelScalingRatio: React.PropTypes.number,
	tooltipTemplate: React.PropTypes.string,
	maxRecCount: React.PropTypes.number,
	dataSource: React.PropTypes.object,
	dataSourceType: React.PropTypes.string,
	dataSourceUrl: React.PropTypes.string,
	responseTotalRecCountKey: React.PropTypes.string,
	responseDataKey: React.PropTypes.string
}
