$.ig.react.propTypes.shapes.igNotifierHeaderTemplate = {
	closeButton: PropTypes.bool,
	title: PropTypes.string
}

$.ig.react.propTypes.igNotifier = {
	id: PropTypes.string.isRequired,
	state: PropTypes.oneOf([
		"success",
		"info",
		"warning",
		"error"
	]),
	notifyLevel: PropTypes.oneOf([
		"success",
		"info",
		"warning",
		"error"
	]),
	appendTo: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	mode: PropTypes.oneOf([
		"auto",
		"popover",
		"inline"
	]),
	allowCSSOnTarget: PropTypes.bool,
	showIcon: PropTypes.bool,
	contentTemplate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	headerTemplate: PropTypes.shape(
		$.ig.react.propTypes.shapes.igNotifierHeaderTemplate
	),
	showOn: PropTypes.oneOf([
		"mouseenter",
		"click",
		"focus",
		"manual"
	]),
	closeOnBlur: PropTypes.bool,
	animationDuration: PropTypes.number,
	animationSlideDistance: PropTypes.number,
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
	containment: PropTypes.object
}
