$.ig.react.propTypes.shapes.igDataChartLegend = {
	element: PropTypes.string,
	type: PropTypes.oneOf([
		"item",
		"legend"
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

$.ig.react.propTypes.shapes.igDataChartAxes = {
	type: PropTypes.oneOf([
		"numericX",
		"numericY",
		"categoryX",
		"categoryDateTimeX",
		"categoryY",
		"categoryAngle",
		"numericAngle",
		"numericRadius"
	]),
	name: PropTypes.string,
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataType: PropTypes.oneOfType([
		PropTypes.string
	]),
	remove: PropTypes.bool,
	labelLocation: PropTypes.oneOf([
		"outsideTop",
		"outsideBottom",
		"outsideLeft",
		"outsideRight",
		"insideTop",
		"insideBottom",
		"insideLeft",
		"insideRight"
	]),
	labelVisibility: PropTypes.oneOf([
		"visible"
	]),
	labelExtent: PropTypes.object
}

$.ig.react.propTypes.shapes.igDataChartSeriesLegend = {
	element: PropTypes.string,
	type: PropTypes.oneOf([
		"item",
		"legend"
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

$.ig.react.propTypes.shapes.igDataChartSeries = {
	type: PropTypes.oneOf([
		"area",
		"bar",
		"column",
		"line",
		"rangeArea",
		"rangeColumn",
		"splineArea",
		"spline",
		"stepArea",
		"stepLine",
		"waterfall",
		"financial",
		"typicalPriceIndicator",
		"polarArea",
		"polarLine",
		"polarScatter",
		"radialColumn",
		"radialLine",
		"radialPie",
		"scatter",
		"absoluteVolumeOscillatorIndicator",
		"averageTrueRangeIndicator",
		"accumulationDistributionIndicator",
		"averageDirectionalIndexIndicator"
	]),
	name: PropTypes.string,
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	remove: PropTypes.bool,
	showTooltip: PropTypes.bool,
	legend: PropTypes.shape(
		$.ig.react.propTypes.shapes.igDataChartSeriesLegend
	)
}

$.ig.react.propTypes.igDataChart = {
	id: PropTypes.string.isRequired,
	syncChannel: PropTypes.string,
	synchronizeVertically: PropTypes.bool,
	syncrhonizeHorizontally: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataType: PropTypes.oneOfType([
		PropTypes.string
	]),
	legend: PropTypes.shape(
		$.ig.react.propTypes.shapes.igDataChartLegend
	),
	axes: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igDataChartAxes)
	),
	series: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igDataChartSeries)
	)
}
