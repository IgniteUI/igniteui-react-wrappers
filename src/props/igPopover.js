$.ig.react.propTypes.shapes.igPopoverHeaderTemplate = {
	closeButton: PropTypes.bool,
	title: PropTypes.string
}

$.ig.react.propTypes.igPopover = {
	id: PropTypes.string.isRequired,
	closeOnBlur: PropTypes.bool,
	direction: PropTypes.oneOf([
		"auto",
		"left",
		"right",
		"top",
		"bottom"
	]),
	directionPriority: PropTypes.array,
	position: PropTypes.oneOf([
		"auto",
		"balanced",
		"start",
		"end"
	]),
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	minWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	maxWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	maxHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	animationDuration: PropTypes.number,
	contentTemplate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	selectors: PropTypes.string,
	headerTemplate: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPopoverHeaderTemplate
	),
	showOn: PropTypes.oneOf([
		"mouseenter",
		"click",
		"focus"
	]),
	containment: PropTypes.object,
	appendTo: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	])
}
