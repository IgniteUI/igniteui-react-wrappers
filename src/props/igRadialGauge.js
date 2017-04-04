$.ig.react.propTypes.shapes.igRadialGaugeRange = {
	name: React.PropTypes.string,
	startValue: React.PropTypes.number,
	endValue: React.PropTypes.number,
	outerStartExtent: React.PropTypes.number,
	outerEndExtent: React.PropTypes.number,
	innerStartExtent: React.PropTypes.number,
	innerEndExtent: React.PropTypes.number,
	brush: React.PropTypes.string,
	outline: React.PropTypes.string,
	strokeThickness: React.PropTypes.number,
	remove: React.PropTypes.bool
}

$.ig.react.propTypes.igRadialGauge = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([	
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([	
		React.PropTypes.string,
		React.PropTypes.number
	]),
	ranges: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igRadialGaugeRange)
	),
	rangeBrushes: React.PropTypes.object,
	rangeOutlines: React.PropTypes.object,
	minimumValue: React.PropTypes.number,
	maximumValue: React.PropTypes.number,
	interval: React.PropTypes.number,
	centerX: React.PropTypes.number,
	centerY: React.PropTypes.number,
	value: React.PropTypes.number,
	scaleStartAngle: React.PropTypes.number,
	scaleEndAngle: React.PropTypes.number,
	scaleSweepDirection: React.PropTypes.oneOf([
		"counterclockwise",
		"clockwise"
	]),
	transitionDuration: React.PropTypes.number,
	transitionEasingFunction: React.PropTypes.object,
	needleBrush: React.PropTypes.string,
	needleOutline: React.PropTypes.string,
	needleStartExtent: React.PropTypes.number,
	needleEndExtent: React.PropTypes.number,
	needleShape: React.PropTypes.oneOf([
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
	needleStartWidthRatio: React.PropTypes.number,
	needleEndWidthRatio: React.PropTypes.number,
	needleBaseFeatureWidthRatio: React.PropTypes.number,
	needleBaseFeatureExtent: React.PropTypes.number,
	needlePointFeatureWidthRatio: React.PropTypes.number,
	needlePointFeatureExtent: React.PropTypes.number,
	needlePivotWidthRatio: React.PropTypes.number,
	needlePivotInnerWidthRatio: React.PropTypes.number,
	needlePivotShape: React.PropTypes.oneOf([
		"none",
		"circle",
		"circleWithHole",
		"circleOverlay",
		"circleOverlayWithHole",
		"circleUnderlay",
		"circleUnderlayWithHole"
	]),
	scaleStartExtent: React.PropTypes.number,
	needlePivotBrush: React.PropTypes.string,
	needlePivotOutline: React.PropTypes.string,
	needleStrokeThickness: React.PropTypes.number,
	needlePivotStrokeThickness: React.PropTypes.number,
	scaleEndExtent: React.PropTypes.number,
	labelExtent: React.PropTypes.number,
	labelInterval: React.PropTypes.number,
	tickStartExtent: React.PropTypes.number,
	tickEndExtent: React.PropTypes.number,
	tickStrokeThickness: React.PropTypes.number,
	tickBrush: React.PropTypes.string,
	fontBrush: React.PropTypes.string,
	minorTickStartExtent: React.PropTypes.number,
	minorTickEndExtent: React.PropTypes.number,
	minorTickStrokeThickness: React.PropTypes.number,
	minorTickBrush: React.PropTypes.string,
	minorTickCount: React.PropTypes.number,
	scaleBrush: React.PropTypes.string,
	backingBrush: React.PropTypes.string,
	backingOutline: React.PropTypes.string,
	backingStrokeThickness: React.PropTypes.number,
	backingOuterExtent: React.PropTypes.number,
	backingOversweep: React.PropTypes.number,
	scaleOversweep: React.PropTypes.number,
	scaleOversweepShape: React.PropTypes.oneOf([
		"auto",
		"circular",
		"fitted"
	]),
	backingCornerRadius: React.PropTypes.number,
	backingInnerExtent: React.PropTypes.number,
	backingShape: React.PropTypes.oneOf([
		"circular",
		"fitted"
	]),
	radiusMultiplier: React.PropTypes.number,
	duplicateLabelOmissionStrategy: React.PropTypes.oneOf([
		"omitLast",
		"omitFirst",
		"omitNeither",
		"omitBoth"
	]),
	isNeedleDraggingEnabled: React.PropTypes.bool,
	isNeedleDraggingConstrained: React.PropTypes.bool,
	font: React.PropTypes.object,
	transitionProgress: React.PropTypes.number,
	pixelScalingRatio: React.PropTypes.number
}
