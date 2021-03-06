$.ig.react.propTypes.shapes.igLinearGaugeRange = {
	name: PropTypes.string,
	brush: PropTypes.string,
	outline: PropTypes.string,
	startValue: PropTypes.number,
	endValue: PropTypes.number,
	innerStartExtent: PropTypes.number,
	innerEndExtent: PropTypes.number,
	outerStartExtent: PropTypes.number,
	outerEndExtent: PropTypes.number,
	strokeThickness: PropTypes.number
}

$.ig.react.propTypes.igLinearGauge = {
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
		PropTypes.shape($.ig.react.propTypes.shapes.igLinearGaugeRange)
	),
	rangeToolTipTemplate: PropTypes.string,
	needleToolTipTemplate: PropTypes.string,
	orientation: PropTypes.oneOf([
		"horizontal",
		"vertical"
	]),
	rangeBrushes: PropTypes.object,
	rangeOutlines: PropTypes.object,
	minimumValue: PropTypes.number,
	maximumValue: PropTypes.number,
	value: PropTypes.number,
	needleShape: PropTypes.oneOf([
		"custom",
		"rectangle",
		"triangle",
		"needle",
		"trapezoid"
	]),
	needleName: PropTypes.string,
	rangeInnerExtent: PropTypes.number,
	scaleInnerExtent: PropTypes.number,
	rangeOuterExtent: PropTypes.number,
	scaleOuterExtent: PropTypes.number,
	needleInnerExtent: PropTypes.number,
	needleOuterExtent: PropTypes.number,
	needleInnerBaseWidth: PropTypes.number,
	needleOuterBaseWidth: PropTypes.number,
	needleInnerPointWidth: PropTypes.number,
	needleOuterPointWidth: PropTypes.number,
	needleInnerPointExtent: PropTypes.number,
	needleOuterPointExtent: PropTypes.number,
	interval: PropTypes.number,
	ticksPostInitial: PropTypes.number,
	ticksPreTerminal: PropTypes.number,
	labelInterval: PropTypes.number,
	labelExtent: PropTypes.number,
	labelsPostInitial: PropTypes.number,
	labelsPreTerminal: PropTypes.number,
	minorTickCount: PropTypes.number,
	tickStartExtent: PropTypes.number,
	tickEndExtent: PropTypes.number,
	tickStrokeThickness: PropTypes.number,
	tickBrush: PropTypes.string,
	fontBrush: PropTypes.string,
	needleBreadth: PropTypes.number,
	needleBrush: PropTypes.string,
	needleOutline: PropTypes.string,
	needleStrokeThickness: PropTypes.number,
	minorTickStartExtent: PropTypes.number,
	minorTickEndExtent: PropTypes.number,
	minorTickStrokeThickness: PropTypes.number,
	minorTickBrush: PropTypes.string,
	isScaleInverted: PropTypes.bool,
	backingBrush: PropTypes.string,
	backingOutline: PropTypes.string,
	backingStrokeThickness: PropTypes.number,
	backingInnerExtent: PropTypes.number,
	backingOuterExtent: PropTypes.number,
	scaleStartExtent: PropTypes.number,
	scaleEndExtent: PropTypes.number,
	scaleBrush: PropTypes.string,
	scaleOutline: PropTypes.string,
	scaleStrokeThickness: PropTypes.number,
	isNeedleDraggingEnabled: PropTypes.bool,
	transitionDuration: PropTypes.number,
	showToolTipTimeout: PropTypes.number,
	showToolTip: PropTypes.bool,
	font: PropTypes.string,
	pixelScalingRatio: PropTypes.number
}
