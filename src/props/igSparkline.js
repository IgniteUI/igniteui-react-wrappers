$.ig.react.propTypes.igSparkline = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	brush: PropTypes.string,
	negativeBrush: PropTypes.string,
	markerBrush: PropTypes.string,
	negativeMarkerBrush: PropTypes.string,
	firstMarkerBrush: PropTypes.string,
	lastMarkerBrush: PropTypes.string,
	highMarkerBrush: PropTypes.string,
	lowMarkerBrush: PropTypes.string,
	trendLineBrush: PropTypes.string,
	horizontalAxisBrush: PropTypes.string,
	verticalAxisBrush: PropTypes.string,
	normalRangeFill: PropTypes.string,
	horizontalAxisVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	verticalAxisVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	markerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	negativeMarkerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	firstMarkerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	lastMarkerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	lowMarkerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	highMarkerVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	normalRangeVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	displayNormalRangeInFront: PropTypes.bool,
	markerSize: PropTypes.number,
	firstMarkerSize: PropTypes.number,
	lastMarkerSize: PropTypes.number,
	highMarkerSize: PropTypes.number,
	lowMarkerSize: PropTypes.number,
	negativeMarkerSize: PropTypes.number,
	lineThickness: PropTypes.number,
	valueMemberPath: PropTypes.string,
	labelMemberPath: PropTypes.string,
	trendLineType: PropTypes.oneOf([
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
	trendLinePeriod: PropTypes.number,
	trendLineThickness: PropTypes.number,
	normalRangeMinimum: PropTypes.number,
	normalRangeMaximum: PropTypes.number,
	displayType: PropTypes.oneOf([
		"line",
		"area",
		"column",
		"winLoss"
	]),
	unknownValuePlotting: PropTypes.oneOf([
		"linearInterpolate",
		"dontPlot"
	]),
	verticalAxisLabel: PropTypes.object,
	horizontalAxisLabel: PropTypes.object,
	formatLabel: PropTypes.object,
	pixelScalingRatio: PropTypes.number,
	tooltipTemplate: PropTypes.string,
	maxRecCount: PropTypes.number,
	dataSource: PropTypes.object,
	dataSourceType: PropTypes.string,
	dataSourceUrl: PropTypes.string,
	responseTotalRecCountKey: PropTypes.string,
	responseDataKey: PropTypes.string
}
