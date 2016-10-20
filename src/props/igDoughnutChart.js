(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igDoughnutChartSeries = {
		type: React.PropTypes.oneOf([
			"flat"
		]),
		showTooltip: React.PropTypes.bool,
		tooltipTemplate: React.PropTypes.string,
		itemsSource: React.PropTypes.object,
		valueMemberPath: React.PropTypes.string,
		labelMemberPath: React.PropTypes.string,
		legendLabelMemberPath: React.PropTypes.string,
		labelsPosition: React.PropTypes.oneOf([
			"none",
			"center",
			"insideEnd",
			"outsideEnd",
			"bestFit"
		]),
		leaderLineVisibility: React.PropTypes.oneOf([
			"visible",
			"collapsed"
		]),
		leaderLineStyle: React.PropTypes.object,
		leaderLineType: React.PropTypes.oneOf([
			"straight",
			"arc",
			"spline"
		]),
		leaderLineMargin: React.PropTypes.number,
		othersCategoryThreshold: React.PropTypes.number,
		othersCategoryType: React.PropTypes.oneOf([
			"number",
			"percent"
		]),
		othersCategoryText: React.PropTypes.string,
		legend: React.PropTypes.object,
		formatLabel: React.PropTypes.object,
		formatLegendLabel: React.PropTypes.object,
		labelExtent: React.PropTypes.number,
		startAngle: React.PropTypes.number,
		selectedStyle: React.PropTypes.object,
		brushes: React.PropTypes.object,
		outlines: React.PropTypes.object,
		isSurfaceInteractionDisabled: React.PropTypes.object,
		radiusFactor: React.PropTypes.number
	}

	$.ig.react.propTypes.igDoughnutChart = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		series: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igDoughnutChartSeries)
		),
		allowSliceSelection: React.PropTypes.bool,
		isSurfaceInteractionDisabled: React.PropTypes.object,
		allowSliceExplosion: React.PropTypes.bool,
		innerExtent: React.PropTypes.number,
		selectedStyle: React.PropTypes.object,
		tooltipTemplate: React.PropTypes.string,
		maxRecCount: React.PropTypes.number,
		dataSource: React.PropTypes.object,
		dataSourceType: React.PropTypes.string,
		dataSourceUrl: React.PropTypes.string,
		responseTotalRecCountKey: React.PropTypes.string,
		responseDataKey: React.PropTypes.string
	}

})(jQuery);
