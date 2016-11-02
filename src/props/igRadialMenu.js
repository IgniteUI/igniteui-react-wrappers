(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igRadialMenuItem = {
		type: React.PropTypes.oneOf([
			"button",
			"coloritem",
			"colorwell",
			"list",
			"numericitem",
			"numericgauge"
		]),
		name: React.PropTypes.string,
		recentItemName: React.PropTypes.string,
		value: React.PropTypes.number,
		pendingValue: React.PropTypes.object,
		autoRotateChildren: React.PropTypes.bool,
		checkedHighlightBrush: React.PropTypes.string,
		foreground: React.PropTypes.string,
		highlightBrush: React.PropTypes.string,
		innerAreaFill: React.PropTypes.string,
		innerAreaHotTrackFill: React.PropTypes.string,
		innerAreaHotTrackStroke: React.PropTypes.string,
		innerAreaStroke: React.PropTypes.string,
		innerAreaStrokeThickness: React.PropTypes.number,
		isEnabled: React.PropTypes.bool,
		isToolTipEnabled: React.PropTypes.bool,
		outerRingButtonHotTrackFill: React.PropTypes.string,
		outerRingButtonHotTrackForeground: React.PropTypes.string,
		outerRingButtonHotTrackStroke: React.PropTypes.string,
		outerRingButtonFill: React.PropTypes.string,
		outerRingButtonForeground: React.PropTypes.string,
		outerRingButtonStroke: React.PropTypes.string,
		outerRingButtonStrokeThickness: React.PropTypes.number,
		toolTip: React.PropTypes.object,
		wedgeIndex: React.PropTypes.number,
		wedgeSpan: React.PropTypes.number,
		autoUpdateRecentItem: React.PropTypes.bool,
		childItemPlacement: React.PropTypes.oneOf([
			"asChildren",
			"asSiblingsWhenChecked",
			"none"
		]),
		checkBehavior: React.PropTypes.oneOf([
			"none",
			"checkBox",
			"radioButton",
			"radioButtonAllowAllUp"
		]),
		isChecked: React.PropTypes.bool,
		groupName: React.PropTypes.string,
		header: React.PropTypes.object,
		iconUri: React.PropTypes.string,
		color: React.PropTypes.object,
		pendingValueNeedleBrush: React.PropTypes.string,
		reserveFirstSlice: React.PropTypes.bool,
		smallIncrement: React.PropTypes.number,
		tickBrush: React.PropTypes.string,
		ticks: React.PropTypes.object,
		trackStartColor: React.PropTypes.object,
		trackEndColor: React.PropTypes.object,
		valueNeedleBrush: React.PropTypes.string,
		closed: React.PropTypes.object,
		opened: React.PropTypes.object,
		checked: React.PropTypes.object,
		click: React.PropTypes.object,
		unchecked: React.PropTypes.object,
		colorChanged: React.PropTypes.object,
		colorWellClick: React.PropTypes.object,
		valueChanged: React.PropTypes.object,
		pendingValueChanged: React.PropTypes.object
	}

	$.ig.react.propTypes.igRadialMenu = {
		id: React.PropTypes.string.isRequired,
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igRadialMenuItem)
		),
		currentOpenMenuItemName: React.PropTypes.string,
		centerButtonContentWidth: React.PropTypes.number,
		centerButtonContentHeight: React.PropTypes.number,
		centerButtonClosedFill: React.PropTypes.string,
		centerButtonClosedStroke: React.PropTypes.string,
		centerButtonFill: React.PropTypes.string,
		centerButtonHotTrackFill: React.PropTypes.string,
		centerButtonHotTrackStroke: React.PropTypes.string,
		centerButtonStroke: React.PropTypes.string,
		centerButtonStrokeThickness: React.PropTypes.number,
		font: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		menuBackground: React.PropTypes.string,
		menuItemOpenCloseAnimationDuration: React.PropTypes.number,
		menuItemOpenCloseAnimationEasingFunction: React.PropTypes.object,
		menuOpenCloseAnimationDuration: React.PropTypes.number,
		menuOpenCloseAnimationEasingFunction: React.PropTypes.object,
		minWedgeCount: React.PropTypes.number,
		outerRingFill: React.PropTypes.string,
		outerRingThickness: React.PropTypes.number,
		outerRingStroke: React.PropTypes.string,
		outerRingStrokeThickness: React.PropTypes.number,
		rotationInDegrees: React.PropTypes.number,
		rotationAsPercentageOfWedge: React.PropTypes.number,
		wedgePaddingInDegrees: React.PropTypes.number,
		pixelScalingRatio: React.PropTypes.number
	}

})(jQuery);
