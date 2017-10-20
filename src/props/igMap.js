$.ig.react.propTypes.shapes.igMapCrosshairPoint = {
	x: React.PropTypes.number,
	y: React.PropTypes.number
}

$.ig.react.propTypes.shapes.igMapBackgroundContent = {
	type: React.PropTypes.oneOf([
		"openStreet",
		"cloudMade",
		"bing"
	]),
	key: React.PropTypes.string,
	parameter: React.PropTypes.string,
	tilePath: React.PropTypes.string,
	imagerySet: React.PropTypes.string,
	bingUrl: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igMapSeries = {
	type: React.PropTypes.oneOf([
		"geographicSymbolSeries",
		"geographicPolyLine",
		"geographicScatterArea",
		"geographicShape",
		"geographicContourLine",
		"geographicHighDensityScatter",
		"geographicProportionalSymbol"
	]),
	name: React.PropTypes.string,
	dataSource: React.PropTypes.object,
	dataSourceUrl: React.PropTypes.string,
	dataSourceType: React.PropTypes.string,
	responseDataKey: React.PropTypes.string,
	remove: React.PropTypes.bool,
	showTooltip: React.PropTypes.bool,
	shapeDataSource: React.PropTypes.string,
	databaseSource: React.PropTypes.string,
	triangulationDataSource: React.PropTypes.string,
	legendItemBadgeTemplate: React.PropTypes.object,
	legendItemTemplate: React.PropTypes.object,
	discreteLegendItemTemplate: React.PropTypes.object,
	transitionDuration: React.PropTypes.number,
	resolution: React.PropTypes.number,
	title: React.PropTypes.string,
	brush: React.PropTypes.string,
	outline: React.PropTypes.string,
	thickness: React.PropTypes.number,
	trianglesSource: React.PropTypes.object,
	triangleVertexMemberPath1: React.PropTypes.string,
	triangleVertexMemberPath2: React.PropTypes.string,
	triangleVertexMemberPath3: React.PropTypes.string,
	colorScale: React.PropTypes.object,
	colorMemberPath: React.PropTypes.string,
	visibleFromScale: React.PropTypes.number,
	longitudeMemberPath: React.PropTypes.string,
	latitudeMemberPath: React.PropTypes.string,
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
	shapeMemberPath: React.PropTypes.string,
	shapeStyleSelector: React.PropTypes.object,
	shapeStyle: React.PropTypes.object,
	markerBrush: React.PropTypes.string,
	markerOutline: React.PropTypes.string,
	markerCollisionAvoidance: React.PropTypes.oneOf([
		"none",
		"omit",
		"fade",
		"omitAndShift"
	]),
	fillScale: React.PropTypes.object,
	fillMemberPath: React.PropTypes.string,
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
	radiusMemberPath: React.PropTypes.string,
	radiusScale: React.PropTypes.object,
	labelMemberPath: React.PropTypes.string,
	clipSeriesToBounds: React.PropTypes.bool,
	valueMemberPath: React.PropTypes.string,
	unknownValuePlotting: React.PropTypes.oneOf([
		"linearInterpolate",
		"dontPlot"
	]),
	angleMemberPath: React.PropTypes.number,
	useCartesianInterpolation: React.PropTypes.bool,
	stiffness: React.PropTypes.number,
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
	ignoreFirst: React.PropTypes.number,
	period: React.PropTypes.number,
	shortPeriod: React.PropTypes.number,
	longPeriod: React.PropTypes.number,
	valueResolver: React.PropTypes.object,
	shapeFilterResolution: React.PropTypes.number,
	useBruteForce: React.PropTypes.bool,
	progressiveLoad: React.PropTypes.bool,
	mouseOverEnabled: React.PropTypes.bool,
	useSquareCutoffStyle: React.PropTypes.bool,
	heatMinimum: React.PropTypes.number,
	heatMaximum: React.PropTypes.number
}

$.ig.react.propTypes.igMap = {
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
	autoMarginWidth: React.PropTypes.number,
	autoMarginHeight: React.PropTypes.number,
	crosshairVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	crosshairPoint: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igMapCrosshairPoint
	),
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
	windowRect: React.PropTypes.object,
	zoomable: React.PropTypes.bool,
	windowScale: React.PropTypes.number,
	windowResponse: React.PropTypes.oneOf([
		"deferred",
		"immediate"
	]),
	windowRectMinWidth: React.PropTypes.number,
	windowPositionHorizontal: React.PropTypes.number,
	windowPositionVertical: React.PropTypes.number,
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
	overviewPlusDetailPaneBackgroundImageUri: React.PropTypes.string,
	useTiledZooming: React.PropTypes.bool,
	preferHigherResolutionTiles: React.PropTypes.bool,
	zoomTileCacheSize: React.PropTypes.number,
	backgroundContent: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igMapBackgroundContent
	),
	series: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igMapSeries)
	),
	theme: React.PropTypes.string
}
