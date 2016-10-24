(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igScroll = {
		id: React.PropTypes.string.isRequired,
		alwaysVisible: React.PropTypes.bool,
		scrollbarType: React.PropTypes.oneOf([
			"custom",
			"native",
			"none"
		]),
		modifyDOM: React.PropTypes.bool,
		scrollHeight: React.PropTypes.number,
		scrollWidth: React.PropTypes.number,
		scrollTop: React.PropTypes.number,
		scrollLeft: React.PropTypes.number,
		wheelStep: React.PropTypes.number,
		smallIncrementStep: React.PropTypes.number,
		bigIncrementStep: React.PropTypes.number,
		smoothing: React.PropTypes.bool,
		smoothingStep: React.PropTypes.number,
		smoothingDuration: React.PropTypes.number,
		inertiaStep: React.PropTypes.number,
		inertiaDuration: React.PropTypes.number,
		swipeToleranceX: React.PropTypes.number,
		inertiaDeltaX: React.PropTypes.number,
		inertiaDeltaY: React.PropTypes.number,
		syncedElemsH: React.PropTypes.array,
		syncedElemsV: React.PropTypes.array,
		scrollbarH: React.PropTypes.string,
		scrollbarV: React.PropTypes.string,
		scrollOnlyHBar: React.PropTypes.bool,
		scrollOnlyVBar: React.PropTypes.bool,
		scrollbarHParent: React.PropTypes.string,
		scrollbarVParent: React.PropTypes.string
	}

})(jQuery);
