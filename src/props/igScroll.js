$.ig.react.propTypes.igScroll = {
	id: PropTypes.string.isRequired,
	alwaysVisible: PropTypes.bool,
	scrollbarType: PropTypes.oneOf([
		"custom",
		"native",
		"none"
	]),
	minThumbSize: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	modifyDOM: PropTypes.bool,
	scrollHeight: PropTypes.number,
	scrollWidth: PropTypes.number,
	scrollTop: PropTypes.number,
	scrollLeft: PropTypes.number,
	wheelStep: PropTypes.number,
	smallIncrementStep: PropTypes.number,
	bigIncrementStep: PropTypes.number,
	smoothing: PropTypes.bool,
	smoothingStep: PropTypes.number,
	smoothingDuration: PropTypes.number,
	inertiaStep: PropTypes.number,
	inertiaDuration: PropTypes.number,
	swipeToleranceX: PropTypes.number,
	inertiaDeltaX: PropTypes.number,
	inertiaDeltaY: PropTypes.number,
	syncedElemsH: PropTypes.array,
	syncedElemsV: PropTypes.array,
	scrollbarH: PropTypes.string,
	scrollbarV: PropTypes.string,
	scrollOnlyHBar: PropTypes.bool,
	scrollOnlyVBar: PropTypes.bool,
	scrollbarHParent: PropTypes.string,
	scrollbarVParent: PropTypes.string
}
