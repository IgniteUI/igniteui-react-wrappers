$.ig.react.propTypes.shapes.igRadialGaugeRange = {
	name: PropTypes.string,
	startValue: PropTypes.number,
	endValue: PropTypes.number,
	outerStartExtent: PropTypes.number,
	outerEndExtent: PropTypes.number,
	innerStartExtent: PropTypes.number,
	innerEndExtent: PropTypes.number,
	brush: PropTypes.string,
	outline: PropTypes.string,
	strokeThickness: PropTypes.number,
	remove: PropTypes.bool
}

$.ig.react.propTypes.igRadialGauge = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	ranges: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igRadialGaugeRange)
	),
	rangeBrushes: PropTypes.object,
	rangeOutlines: PropTypes.object,
	minimumValue: PropTypes.number,
	maximumValue: PropTypes.number,
	interval: PropTypes.number,
	centerX: PropTypes.number,
	centerY: PropTypes.number,
	value: PropTypes.number,
	scaleStartAngle: PropTypes.number,
	scaleEndAngle: PropTypes.number,
	scaleSweepDirection: PropTypes.oneOf([
		"counterclockwise",
		"clockwise"
	]),
	transitionDuration: PropTypes.number,
	transitionEasingFunction: PropTypes.object,
	needleBrush: PropTypes.string,
	needleOutline: PropTypes.string,
	needleStartExtent: PropTypes.number,
	needleEndExtent: PropTypes.number,
	needleShape: PropTypes.oneOf([
		"none",
		"rectangle",
		"triangle",
		"needle",
		"trapezoid",
		"rectangleWithBulb",
		"triangleWithBulb",
		"needleWithBulb",
		"trapezoidWithBulb"
	]),
	needleStartWidthRatio: PropTypes.number,
	needleEndWidthRatio: PropTypes.number,
	needleBaseFeatureWidthRatio: PropTypes.number,
	needleBaseFeatureExtent: PropTypes.number,
	needlePointFeatureWidthRatio: PropTypes.number,
	needlePointFeatureExtent: PropTypes.number,
	needlePivotWidthRatio: PropTypes.number,
	needlePivotInnerWidthRatio: PropTypes.number,
	needlePivotShape: PropTypes.oneOf([
		"none",
		"circle",
		"circleWithHole",
		"circleOverlay",
		"circleOverlayWithHole",
		"circleUnderlay",
		"circleUnderlayWithHole"
	]),
	scaleStartExtent: PropTypes.number,
	needlePivotBrush: PropTypes.string,
	needlePivotOutline: PropTypes.string,
	needleStrokeThickness: PropTypes.number,
	needlePivotStrokeThickness: PropTypes.number,
	scaleEndExtent: PropTypes.number,
	labelExtent: PropTypes.number,
	labelInterval: PropTypes.number,
	tickStartExtent: PropTypes.number,
	tickEndExtent: PropTypes.number,
	tickStrokeThickness: PropTypes.number,
	tickBrush: PropTypes.string,
	fontBrush: PropTypes.string,
	minorTickStartExtent: PropTypes.number,
	minorTickEndExtent: PropTypes.number,
	minorTickStrokeThickness: PropTypes.number,
	minorTickBrush: PropTypes.string,
	minorTickCount: PropTypes.number,
	scaleBrush: PropTypes.string,
	backingBrush: PropTypes.string,
	backingOutline: PropTypes.string,
	backingStrokeThickness: PropTypes.number,
	backingOuterExtent: PropTypes.number,
	backingOversweep: PropTypes.number,
	scaleOversweep: PropTypes.number,
	scaleOversweepShape: PropTypes.oneOf([
		"auto",
		"circular",
		"fitted"
	]),
	backingCornerRadius: PropTypes.number,
	backingInnerExtent: PropTypes.number,
	backingShape: PropTypes.oneOf([
		"circular",
		"fitted"
	]),
	radiusMultiplier: PropTypes.number,
	duplicateLabelOmissionStrategy: PropTypes.oneOf([
		"omitLast",
		"omitFirst",
		"omitNeither",
		"omitBoth"
	]),
	isNeedleDraggingEnabled: PropTypes.bool,
	isNeedleDraggingConstrained: PropTypes.bool,
	font: PropTypes.string,
	transitionProgress: PropTypes.number,
	pixelScalingRatio: PropTypes.number
}
