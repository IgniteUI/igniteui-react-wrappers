$.ig.react.propTypes.shapes.igRadialMenuItem = {
	type: PropTypes.oneOf([
		"button",
		"coloritem",
		"colorwell",
		"list",
		"numericitem",
		"numericgauge"
	]),
	name: PropTypes.string,
	recentItemName: PropTypes.string,
	value: PropTypes.number,
	pendingValue: PropTypes.object,
	autoRotateChildren: PropTypes.bool,
	checkedHighlightBrush: PropTypes.string,
	foreground: PropTypes.string,
	highlightBrush: PropTypes.string,
	innerAreaFill: PropTypes.string,
	innerAreaHotTrackFill: PropTypes.string,
	innerAreaHotTrackStroke: PropTypes.string,
	innerAreaStroke: PropTypes.string,
	innerAreaStrokeThickness: PropTypes.number,
	isEnabled: PropTypes.bool,
	isToolTipEnabled: PropTypes.bool,
	outerRingButtonHotTrackFill: PropTypes.string,
	outerRingButtonHotTrackForeground: PropTypes.string,
	outerRingButtonHotTrackStroke: PropTypes.string,
	outerRingButtonFill: PropTypes.string,
	outerRingButtonForeground: PropTypes.string,
	outerRingButtonStroke: PropTypes.string,
	outerRingButtonStrokeThickness: PropTypes.number,
	toolTip: PropTypes.object,
	wedgeIndex: PropTypes.number,
	wedgeSpan: PropTypes.number,
	autoUpdateRecentItem: PropTypes.bool,
	childItemPlacement: PropTypes.oneOf([
		"asChildren",
		"asSiblingsWhenChecked",
		"none"
	]),
	checkBehavior: PropTypes.oneOf([
		"none",
		"checkBox",
		"radioButton",
		"radioButtonAllowAllUp"
	]),
	isChecked: PropTypes.bool,
	groupName: PropTypes.string,
	header: PropTypes.object,
	iconUri: PropTypes.string,
	color: PropTypes.object,
	pendingValueNeedleBrush: PropTypes.string,
	reserveFirstSlice: PropTypes.bool,
	smallIncrement: PropTypes.number,
	tickBrush: PropTypes.string,
	ticks: PropTypes.object,
	trackStartColor: PropTypes.object,
	trackEndColor: PropTypes.object,
	valueNeedleBrush: PropTypes.string,
	closed: PropTypes.object,
	opened: PropTypes.object,
	checked: PropTypes.object,
	click: PropTypes.object,
	unchecked: PropTypes.object,
	colorChanged: PropTypes.object,
	colorWellClick: PropTypes.object,
	valueChanged: PropTypes.object,
	pendingValueChanged: PropTypes.object
}

$.ig.react.propTypes.igRadialMenu = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igRadialMenuItem)
	),
	currentOpenMenuItemName: PropTypes.string,
	centerButtonContentWidth: PropTypes.number,
	centerButtonContentHeight: PropTypes.number,
	centerButtonClosedFill: PropTypes.string,
	centerButtonClosedStroke: PropTypes.string,
	centerButtonFill: PropTypes.string,
	centerButtonHotTrackFill: PropTypes.string,
	centerButtonHotTrackStroke: PropTypes.string,
	centerButtonStroke: PropTypes.string,
	centerButtonStrokeThickness: PropTypes.number,
	font: PropTypes.string,
	isOpen: PropTypes.bool,
	menuBackground: PropTypes.string,
	menuItemOpenCloseAnimationDuration: PropTypes.number,
	menuItemOpenCloseAnimationEasingFunction: PropTypes.object,
	menuOpenCloseAnimationDuration: PropTypes.number,
	menuOpenCloseAnimationEasingFunction: PropTypes.object,
	minWedgeCount: PropTypes.number,
	outerRingFill: PropTypes.string,
	outerRingThickness: PropTypes.number,
	outerRingStroke: PropTypes.string,
	outerRingStrokeThickness: PropTypes.number,
	rotationInDegrees: PropTypes.number,
	rotationAsPercentageOfWedge: PropTypes.number,
	wedgePaddingInDegrees: PropTypes.number,
	pixelScalingRatio: PropTypes.number
}
