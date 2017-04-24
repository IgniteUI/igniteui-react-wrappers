$.ig.react.propTypes.shapes.igPopoverHeaderTemplate = {
	closeButton: React.PropTypes.bool,
	title: React.PropTypes.string
}

$.ig.react.propTypes.igPopover = {
	id: React.PropTypes.string.isRequired,
	closeOnBlur: React.PropTypes.bool,
	direction: React.PropTypes.oneOf([
		"auto",
		"left",
		"right",
		"top",
		"bottom"
	]),
	position: React.PropTypes.oneOf([
		"auto",
		"balanced",
		"start",
		"end"
	]),
	width: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	minWidth: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	maxWidth: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	maxHeight: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	animationDuration: React.PropTypes.number,
	contentTemplate: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func
	]),
	selectors: React.PropTypes.string,
	headerTemplate: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgPopoverHeaderTemplate
	),
	showOn: React.PropTypes.oneOf([
		"mouseenter",
		"click",
		"focus"
	]),
	containment: React.PropTypes.object,
	appendTo: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	])
}
