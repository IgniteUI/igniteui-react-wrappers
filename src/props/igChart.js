(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igDataChartCrosshairPoint = {
		x: React.PropTypes.number,
		y: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igDataChartLegend = {
		element: React.PropTypes.string,
		type: React.PropTypes.oneOf([
			"item",
			"legend"
		]),
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		])
	}

	$.ig.react.propTypes.shapes.igDataChartAxes = {
		type: React.PropTypes.oneOf([
			"numericX",
			"numericY",
			"categoryX",
			"categoryDateTimeX",
			"categoryY",
			"categoryAngle",
			"numericAngle",
			"numericRadius"
		]),
		name: React.PropTypes.string,
		dataSource: React.PropTypes.object,
		dataSourceUrl: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		remove: React.PropTypes.bool,
		labelLocation: React.PropTypes.oneOf([
			"outsideTop",
			"outsideBottom",
			"outsideLeft",
			"outsideRight",
			"insideTop",
			"insideBottom",
			"insideLeft",
			"insideRight"
		]),
		labelVisibility: React.PropTypes.oneOf([
			"visible",
			"collapsed"
		]),
		labelExtent: React.PropTypes.number,
		labelAngle: React.PropTypes.number,
		labelTextStyle: React.PropTypes.string,
		labelTextColor: React.PropTypes.string,
		formatLabel: React.PropTypes.object,
		stroke: React.PropTypes.string,
		strokeThickness: React.PropTypes.number,
		strip: React.PropTypes.string,
		majorStroke: React.PropTypes.string,
		majorStrokeThickness: React.PropTypes.number,
		minorStroke: React.PropTypes.string,
		minorStrokeThickness: React.PropTypes.number,
		isInverted: React.PropTypes.bool,
		crossingAxis: React.PropTypes.string,
		crossingValue: React.PropTypes.object,
		coercionMethods: React.PropTypes.object,
		label: React.PropTypes.object,
		gap: React.PropTypes.number,
		overlap: React.PropTypes.number,
		startAngleOffset: React.PropTypes.number,
		interval: React.PropTypes.number,
		displayType: React.PropTypes.oneOf([
			"continuous",
			"discrete"
		]),
		isDataPreSorted: React.PropTypes.bool,
		minimumValue: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.instanceOf(Date)
		]),
		maximumValue: React.PropTypes.oneOfType([
			React.PropTypes.number,	
			React.PropTypes.instanceOf(Date)
		]),
		dateTimeMemberPath: React.PropTypes.string,
		referenceValue: React.PropTypes.number,
		isLogarithmic: React.PropTypes.bool,
		logarithmBase: React.PropTypes.number,
		radiusExtentScale: React.PropTypes.number,
		innerRadiusExtentScale: React.PropTypes.number,
		title: React.PropTypes.string,
		titleTextStyle: React.PropTypes.string,
		titleMargin: React.PropTypes.number,
		titleHorizontalAlignment: React.PropTypes.oneOf([
			"left",
			"center",
			"right"
		]),
		titleVerticalAlignment: React.PropTypes.oneOf([
			"center"
		]),
		titlePosition: React.PropTypes.oneOf([
			"auto",
			"left",
			"right",
			"top",
			"bottom"
		]),
		titleTopMargin: React.PropTypes.number,
		titleLeftMargin: React.PropTypes.number,
		titleRightMargin: React.PropTypes.number,
		titleBottomMargin: React.PropTypes.number,
		labelHorizontalAlignment: React.PropTypes.oneOf([
			"left",
			"center",
			"right"
		]),
		labelVerticalAlignment: React.PropTypes.oneOf([
			"top",
			"center",
			"bottom"
		]),
		labelMargin: React.PropTypes.number,
		labelTopMargin: React.PropTypes.number,
		labelLeftMargin: React.PropTypes.number,
		labelRightMargin: React.PropTypes.number,
		labelBottomMargin: React.PropTypes.number,
		showFirstLabel: React.PropTypes.bool,
		titleAngle: React.PropTypes.number,
		tickLength: React.PropTypes.number,
		tickStrokeThickness: React.PropTypes.number,
		tickStroke: React.PropTypes.object,
		useClusteringMode: React.PropTypes.bool,
		useEnhancedIntervalManagement: React.PropTypes.bool,
		enhancedIntervalMinimumCharacters: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igDataChartSeriesLegend = {
		element: React.PropTypes.string,
		type: React.PropTypes.oneOf([
			"item",
			"legend"
		]),
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		])
	}

	$.ig.react.propTypes.shapes.igDataChartSeries = {
		type: React.PropTypes.oneOf([
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
			"polarSpline",
			"polarScatter",
			"radialColumn",
			"radialLine",
			"radialPie",
			"scatter",
			"scatterLine",
			"bubble",
			"absoluteVolumeOscillatorIndicator",
			"averageTrueRangeIndicator",
			"accumulationDistributionIndicator",
			"averageDirectionalIndexIndicator"
		]),
		name: React.PropTypes.string,
		dataSource: React.PropTypes.object,
		dataSourceUrl: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		remove: React.PropTypes.bool,
		showTooltip: React.PropTypes.bool,
		tooltipTemplate: React.PropTypes.string,
		legend: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgDataChartSeriesLegend
		),
		legendItemVisibility: React.PropTypes.oneOf([
			"visible",
			"collapsed"
		]),
		legendItemBadgeTemplate: React.PropTypes.object,
		legendItemTemplate: React.PropTypes.object,
		discreteLegendItemTemplate: React.PropTypes.object,
		transitionDuration: React.PropTypes.number,
		transitionEasingFunction: React.PropTypes.object,
		resolution: React.PropTypes.number,
		title: React.PropTypes.string,
		brush: React.PropTypes.string,
		outline: React.PropTypes.string,
		thickness: React.PropTypes.number,
		coercionMethods: React.PropTypes.object,
		markerType: React.PropTypes.oneOf([
			"unset",
			"none",
			"automatic",
			"circle",
			"triangle",
			"pyramid",
			"square",
			"diamond",
			"pentagon",
			"hexagon",
			"tetragram",
			"pentagram",
			"hexagram"
		]),
		markerTemplate: React.PropTypes.object,
		markerBrush: React.PropTypes.string,
		markerOutline: React.PropTypes.string,
		xAxis: React.PropTypes.string,
		yAxis: React.PropTypes.string,
		xMemberPath: React.PropTypes.string,
		yMemberPath: React.PropTypes.string,
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
		trendLineBrush: React.PropTypes.string,
		trendLineThickness: React.PropTypes.number,
		trendLinePeriod: React.PropTypes.number,
		trendLineZIndex: React.PropTypes.number,
		maximumMarkers: React.PropTypes.number,
		unknownValuePlotting: React.PropTypes.oneOf([
			"linearInterpolate",
			"dontPlot"
		]),
		radiusMemberPath: React.PropTypes.string,
		radiusScale: React.PropTypes.object,
		labelMemberPath: React.PropTypes.string,
		fillMemberPath: React.PropTypes.string,
		fillScale: React.PropTypes.object,
		angleAxis: React.PropTypes.string,
		valueAxis: React.PropTypes.string,
		clipSeriesToBounds: React.PropTypes.bool,
		valueMemberPath: React.PropTypes.string,
		radiusX: React.PropTypes.number,
		radiusY: React.PropTypes.number,
		angleMemberPath: React.PropTypes.string,
		radiusAxis: React.PropTypes.string,
		useCartesianInterpolation: React.PropTypes.bool,
		negativeBrush: React.PropTypes.string,
		splineType: React.PropTypes.oneOf([
			"natural",
			"clamped"
		]),
		lowMemberPath: React.PropTypes.string,
		highMemberPath: React.PropTypes.string,
		openMemberPath: React.PropTypes.string,
		closeMemberPath: React.PropTypes.string,
		volumeMemberPath: React.PropTypes.string,
		displayType: React.PropTypes.oneOf([
			"candlestick",
			"OHLC"
		]),
		ignoreFirst: React.PropTypes.number,
		period: React.PropTypes.number,
		shortPeriod: React.PropTypes.number,
		longPeriod: React.PropTypes.number,
		markerCollisionAvoidance: React.PropTypes.oneOf([
			"none",
			"omit",
			"fade",
			"omitAndShift"
		]),
		useHighMarkerFidelity: React.PropTypes.bool,
		useBruteForce: React.PropTypes.bool,
		progressiveLoad: React.PropTypes.bool,
		mouseOverEnabled: React.PropTypes.bool,
		useSquareCutoffStyle: React.PropTypes.bool,
		heatMinimum: React.PropTypes.number,
		heatMaximum: React.PropTypes.number,
		heatMinimumColor: React.PropTypes.object,
		heatMaximumColor: React.PropTypes.object,
		series: React.PropTypes.array,
		isDropShadowEnabled: React.PropTypes.bool,
		useSingleShadow: React.PropTypes.bool,
		shadowColor: React.PropTypes.object,
		shadowBlur: React.PropTypes.number,
		shadowOffsetX: React.PropTypes.number,
		shadowOffsetY: React.PropTypes.number,
		isTransitionInEnabled: React.PropTypes.bool,
		transitionInSpeedType: React.PropTypes.oneOf([
			"auto",
			"normal",
			"valueScaled",
			"indexScaled",
			"random"
		]),
		transitionInMode: React.PropTypes.oneOf([
			"auto",
			"fromZero",
			"sweepFromLeft",
			"sweepFromRight",
			"sweepFromTop",
			"sweepFromBottom",
			"sweepFromCenter",
			"accordionFromLeft",
			"accordionFromRight",
			"accordionFromTop",
			"accordionFromBottom",
			"expand",
			"sweepFromCategoryAxisMinimum",
			"sweepFromCategoryAxisMaximum",
			"sweepFromValueAxisMinimum",
			"sweepFromValueAxisMaximum",
			"accordionFromCategoryAxisMinimum",
			"accordionFromCategoryAxisMaximum",
			"accordionFromValueAxisMinimum",
			"accordionFromValueAxisMaximum"
		]),
		transitionInDuration: React.PropTypes.number,
		radius: React.PropTypes.number,
		areaFillOpacity: React.PropTypes.number,
		expectFunctions: React.PropTypes.bool,
		useInterpolation: React.PropTypes.bool,
		skipUnknownValues: React.PropTypes.bool,
		verticalLineVisibility: React.PropTypes.bool,
		horizontalLineVisibility: React.PropTypes.bool,
		targetSeries: React.PropTypes.string,
		targetAxis: React.PropTypes.string,
		isCustomCategoryStyleAllowed: React.PropTypes.bool,
		isCustomCategoryMarkerStyleAllowed: React.PropTypes.bool,
		isHighlightingEnabled: React.PropTypes.bool,
		bandHighlightWidth: React.PropTypes.number,
		highlightType: React.PropTypes.oneOf([
			"auto",
			"marker",
			"shape"
		]),
		tooltipPosition: React.PropTypes.oneOf([
			"auto",
			"outsideStart",
			"insideStart",
			"insideEnd",
			"outsideEnd"
		]),
		cursorPosition: React.PropTypes.object,
		isDefaultCrosshairDisabled: React.PropTypes.bool,
		useIndex: React.PropTypes.bool,
		useLegend: React.PropTypes.bool,
		reverseLegendOrder: React.PropTypes.bool,
		hitTestMode: React.PropTypes.oneOf([
			"auto",
			"computational",
			"colorEncoded"
		])
	}

	$.ig.react.propTypes.igDataChart = {
		id: React.PropTypes.string.isRequired,
		syncChannel: React.PropTypes.string,
		synchronizeVertically: React.PropTypes.bool,
		syncrhonizeHorizontally: React.PropTypes.bool,
		crosshairPoint: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgDataChartCrosshairPoint
		),
		windowRect: React.PropTypes.object,
		horizontalZoomable: React.PropTypes.bool,
		verticalZoomable: React.PropTypes.bool,
		windowResponse: React.PropTypes.oneOf([
			"deferred",
			"immediate"
		]),
		windowRectMinWidth: React.PropTypes.number,
		overviewPlusDetailPaneVisibility: React.PropTypes.oneOf([
			"visible",
			"collapsed"
		]),
		crosshairVisibility: React.PropTypes.oneOf([
			"visible",
			"collapsed"
		]),
		plotAreaBackground: React.PropTypes.string,
		defaultInteraction: React.PropTypes.oneOf([
			"none",
			"dragZoom",
			"dragPan"
		]),
		dragModifier: React.PropTypes.oneOf([
			"none",
			"alt",
			"control",
			"shift"
		]),
		panModifier: React.PropTypes.oneOf([
			"none",
			"alt",
			"control",
			"shift"
		]),
		previewRect: React.PropTypes.object,
		windowPositionHorizontal: React.PropTypes.number,
		windowPositionVertical: React.PropTypes.number,
		windowScaleHorizontal: React.PropTypes.number,
		windowScaleVertical: React.PropTypes.number,
		circleMarkerTemplate: React.PropTypes.object,
		triangleMarkerTemplate: React.PropTypes.object,
		pyramidMarkerTemplate: React.PropTypes.object,
		squareMarkerTemplate: React.PropTypes.object,
		diamondMarkerTemplate: React.PropTypes.object,
		pentagonMarkerTemplate: React.PropTypes.object,
		hexagonMarkerTemplate: React.PropTypes.object,
		tetragramMarkerTemplate: React.PropTypes.object,
		pentagramMarkerTemplate: React.PropTypes.object,
		hexagramMarkerTemplate: React.PropTypes.object,
		topMargin: React.PropTypes.number,
		leftMargin: React.PropTypes.number,
		rightMargin: React.PropTypes.number,
		bottomMargin: React.PropTypes.number,
		autoMarginWidth: React.PropTypes.number,
		autoMarginHeight: React.PropTypes.number,
		isSquare: React.PropTypes.bool,
		gridMode: React.PropTypes.oneOf([
			"none",
			"beforeSeries",
			"behindSeries"
		]),
		brushes: React.PropTypes.object,
		markerBrushes: React.PropTypes.object,
		outlines: React.PropTypes.object,
		markerOutlines: React.PropTypes.object,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		size: React.PropTypes.object,
		dataSource: React.PropTypes.object,
		dataSourceUrl: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		isSurfaceInteractionDisabled: React.PropTypes.bool,
		animateSeriesWhenAxisRangeChanges: React.PropTypes.bool,
		title: React.PropTypes.string,
		subtitle: React.PropTypes.string,
		titleTextStyle: React.PropTypes.string,
		titleTopMargin: React.PropTypes.number,
		titleLeftMargin: React.PropTypes.number,
		titleRightMargin: React.PropTypes.number,
		titleBottomMargin: React.PropTypes.number,
		subtitleTextStyle: React.PropTypes.string,
		subtitleTopMargin: React.PropTypes.number,
		subtitleLeftMargin: React.PropTypes.number,
		subtitleRightMargin: React.PropTypes.number,
		subtitleBottomMargin: React.PropTypes.number,
		titleTextColor: React.PropTypes.object,
		subtitleTextColor: React.PropTypes.object,
		titleHorizontalAlignment: React.PropTypes.oneOf([
			"left",
			"center",
			"right"
		]),
		subtitleHorizontalAlignment: React.PropTypes.oneOf([
			"left",
			"center",
			"right"
		]),
		highlightingTransitionDuration: React.PropTypes.number,
		useTiledZooming: React.PropTypes.bool,
		preferHigherResolutionTiles: React.PropTypes.bool,
		pixelScalingRatio: React.PropTypes.number,
		zoomTileCacheSize: React.PropTypes.number,
		contentHitTestMode: React.PropTypes.oneOf([
			"auto",
			"computational",
			"colorEncoded",
			"mixed",
			"mixedFavoringComputational"
		]),
		legend: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgDataChartLegend
		),
		axes: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igDataChartAxes)
		),
		series: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igDataChartSeries)
		),
		theme: React.PropTypes.string
	}

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
			$.ig.react.propTypes.shapes.IgPieChartLegend
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

})(jQuery);
