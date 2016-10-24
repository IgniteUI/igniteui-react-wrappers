(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igBulletGraphRange = {
		name: React.PropTypes.string,
		brush: React.PropTypes.string,
		outline: React.PropTypes.string,
		startValue: React.PropTypes.number,
		endValue: React.PropTypes.number,
		innerStartExtent: React.PropTypes.number,
		innerEndExtent: React.PropTypes.number,
		outerStartExtent: React.PropTypes.number,
		outerEndExtent: React.PropTypes.number,
		strokeThickness: React.PropTypes.number
	}

	$.ig.react.propTypes.igBulletGraph = {
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
			React.PropTypes.shape($.ig.react.propTypes.shapes.igBulletGraphRange)
		),
		rangeToolTipTemplate: React.PropTypes.string,
		valueToolTipTemplate: React.PropTypes.string,
		targetValueToolTipTemplate: React.PropTypes.string,
		orientation: React.PropTypes.oneOf([
			"horizontal",
			"vertical"
		]),
		rangeBrushes: React.PropTypes.object,
		rangeOutlines: React.PropTypes.object,
		minimumValue: React.PropTypes.number,
		maximumValue: React.PropTypes.number,
		targetValue: React.PropTypes.number,
		targetValueName: React.PropTypes.string,
		value: React.PropTypes.number,
		valueName: React.PropTypes.string,
		rangeInnerExtent: React.PropTypes.number,
		rangeOuterExtent: React.PropTypes.number,
		valueInnerExtent: React.PropTypes.number,
		valueOuterExtent: React.PropTypes.number,
		interval: React.PropTypes.number,
		ticksPostInitial: React.PropTypes.number,
		ticksPreTerminal: React.PropTypes.number,
		labelInterval: React.PropTypes.number,
		labelExtent: React.PropTypes.number,
		labelsPostInitial: React.PropTypes.number,
		labelsPreTerminal: React.PropTypes.number,
		minorTickCount: React.PropTypes.number,
		tickStartExtent: React.PropTypes.number,
		tickEndExtent: React.PropTypes.number,
		tickStrokeThickness: React.PropTypes.number,
		tickBrush: React.PropTypes.string,
		fontBrush: React.PropTypes.string,
		valueBrush: React.PropTypes.string,
		valueOutline: React.PropTypes.string,
		valueStrokeThickness: React.PropTypes.number,
		minorTickStartExtent: React.PropTypes.number,
		minorTickEndExtent: React.PropTypes.number,
		minorTickStrokeThickness: React.PropTypes.number,
		minorTickBrush: React.PropTypes.string,
		isScaleInverted: React.PropTypes.bool,
		backingBrush: React.PropTypes.string,
		backingOutline: React.PropTypes.string,
		backingStrokeThickness: React.PropTypes.number,
		backingInnerExtent: React.PropTypes.number,
		backingOuterExtent: React.PropTypes.number,
		scaleStartExtent: React.PropTypes.number,
		scaleEndExtent: React.PropTypes.number,
		targetValueBrush: React.PropTypes.string,
		targetValueBreadth: React.PropTypes.number,
		targetValueInnerExtent: React.PropTypes.number,
		targetValueOuterExtent: React.PropTypes.number,
		targetValueOutline: React.PropTypes.string,
		targetValueStrokeThickness: React.PropTypes.number,
		transitionDuration: React.PropTypes.number,
		showToolTipTimeout: React.PropTypes.number,
		showToolTip: React.PropTypes.bool,
		font: React.PropTypes.string,
		pixelScalingRatio: React.PropTypes.number
	}

})(jQuery);
