$.ig.react.propTypes.shapes.igMapCrosshairPoint = {
	x: PropTypes.number,
	y: PropTypes.number
}

$.ig.react.propTypes.shapes.igMapBackgroundContent = {
	type: PropTypes.oneOf([
		"openStreet",
		"cloudMade",
		"bing"
	]),
	key: PropTypes.string,
	parameter: PropTypes.string,
	tilePath: PropTypes.string,
	imagerySet: PropTypes.string,
	bingUrl: PropTypes.string
}

$.ig.react.propTypes.shapes.igMapSeries = {
	type: PropTypes.oneOf([
		"geographicSymbolSeries",
		"geographicPolyLine",
		"geographicScatterArea",
		"geographicShape",
		"geographicContourLine",
		"geographicHighDensityScatter",
		"geographicProportionalSymbol"
	]),
	name: PropTypes.string,
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.string,
	remove: PropTypes.bool,
	showTooltip: PropTypes.bool,
	shapeDataSource: PropTypes.string,
	databaseSource: PropTypes.string,
	triangulationDataSource: PropTypes.string,
	legendItemBadgeTemplate: PropTypes.object,
	legendItemTemplate: PropTypes.object,
	discreteLegendItemTemplate: PropTypes.object,
	transitionDuration: PropTypes.number,
	resolution: PropTypes.number,
	title: PropTypes.string,
	brush: PropTypes.string,
	outline: PropTypes.string,
	thickness: PropTypes.number,
	trianglesSource: PropTypes.object,
	triangleVertexMemberPath1: PropTypes.string,
	triangleVertexMemberPath2: PropTypes.string,
	triangleVertexMemberPath3: PropTypes.string,
	colorScale: PropTypes.object,
	colorMemberPath: PropTypes.string,
	visibleFromScale: PropTypes.number,
	longitudeMemberPath: PropTypes.string,
	latitudeMemberPath: PropTypes.string,
	markerType: PropTypes.oneOf([
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
	markerTemplate: PropTypes.object,
	shapeMemberPath: PropTypes.string,
	shapeStyleSelector: PropTypes.object,
	shapeStyle: PropTypes.object,
	markerBrush: PropTypes.string,
	markerOutline: PropTypes.string,
	markerCollisionAvoidance: PropTypes.oneOf([
		"none",
		"omit",
		"fade",
		"omitAndShift"
	]),
	fillScale: PropTypes.object,
	fillMemberPath: PropTypes.string,
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
	trendLineBrush: PropTypes.string,
	trendLineThickness: PropTypes.number,
	trendLinePeriod: PropTypes.number,
	trendLineZIndex: PropTypes.number,
	maximumMarkers: PropTypes.number,
	radiusMemberPath: PropTypes.string,
	radiusScale: PropTypes.object,
	labelMemberPath: PropTypes.string,
	clipSeriesToBounds: PropTypes.bool,
	valueMemberPath: PropTypes.string,
	unknownValuePlotting: PropTypes.oneOf([
		"linearInterpolate",
		"dontPlot"
	]),
	angleMemberPath: PropTypes.number,
	useCartesianInterpolation: PropTypes.bool,
	stiffness: PropTypes.number,
	negativeBrush: PropTypes.string,
	splineType: PropTypes.oneOf([
		"natural",
		"clamped"
	]),
	lowMemberPath: PropTypes.string,
	highMemberPath: PropTypes.string,
	openMemberPath: PropTypes.string,
	closeMemberPath: PropTypes.string,
	volumeMemberPath: PropTypes.string,
	ignoreFirst: PropTypes.number,
	period: PropTypes.number,
	shortPeriod: PropTypes.number,
	longPeriod: PropTypes.number,
	valueResolver: PropTypes.object,
	shapeFilterResolution: PropTypes.number,
	useBruteForce: PropTypes.bool,
	progressiveLoad: PropTypes.bool,
	mouseOverEnabled: PropTypes.bool,
	useSquareCutoffStyle: PropTypes.bool,
	heatMinimum: PropTypes.number,
	heatMaximum: PropTypes.number
}

$.ig.react.propTypes.igMap = {
	id: PropTypes.string.isRequired,
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
	responseDataKey: PropTypes.string,
	autoMarginWidth: PropTypes.number,
	autoMarginHeight: PropTypes.number,
	crosshairVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	crosshairPoint: PropTypes.shape(
		$.ig.react.propTypes.shapes.igMapCrosshairPoint
	),
	plotAreaBackground: PropTypes.string,
	defaultInteraction: PropTypes.oneOf([
		"none",
		"dragZoom",
		"dragPan"
	]),
	dragModifier: PropTypes.oneOf([
		"none",
		"alt",
		"control",
		"shift"
	]),
	panModifier: PropTypes.oneOf([
		"none",
		"alt",
		"control",
		"shift"
	]),
	previewRect: PropTypes.object,
	windowRect: PropTypes.object,
	zoomable: PropTypes.bool,
	windowScale: PropTypes.number,
	windowResponse: PropTypes.oneOf([
		"deferred",
		"immediate"
	]),
	windowRectMinWidth: PropTypes.number,
	windowPositionHorizontal: PropTypes.number,
	windowPositionVertical: PropTypes.number,
	circleMarkerTemplate: PropTypes.object,
	triangleMarkerTemplate: PropTypes.object,
	pyramidMarkerTemplate: PropTypes.object,
	squareMarkerTemplate: PropTypes.object,
	diamondMarkerTemplate: PropTypes.object,
	pentagonMarkerTemplate: PropTypes.object,
	hexagonMarkerTemplate: PropTypes.object,
	tetragramMarkerTemplate: PropTypes.object,
	pentagramMarkerTemplate: PropTypes.object,
	hexagramMarkerTemplate: PropTypes.object,
	overviewPlusDetailPaneBackgroundImageUri: PropTypes.string,
	useTiledZooming: PropTypes.bool,
	preferHigherResolutionTiles: PropTypes.bool,
	zoomTileCacheSize: PropTypes.number,
	backgroundContent: PropTypes.shape(
		$.ig.react.propTypes.shapes.igMapBackgroundContent
	),
	series: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igMapSeries)
	),
	theme: PropTypes.string
}
