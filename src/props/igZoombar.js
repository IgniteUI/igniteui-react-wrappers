$.ig.react.propTypes.shapes.igZoombarDefaultZoomWindow = {
	left: React.PropTypes.number,
	width: React.PropTypes.string
}

$.ig.react.propTypes.igZoombar = {
	id: React.PropTypes.string.isRequired,
	provider: React.PropTypes.object,
	target: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]),
	clone: React.PropTypes.oneOf([
		"auto",
		"none"
	]),
	width: React.PropTypes.oneOf([
		"auto",
		"null"
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	zoomAction: React.PropTypes.oneOf([
		"immediate",
		"deferred"
	]),
	zoomWindowMoveDistance: React.PropTypes.number,
	defaultZoomWindow: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igZoombarDefaultZoomWindow
	),
	zoomWindowMinWidth: React.PropTypes.number,
	hoverStyleAnimationDuration: React.PropTypes.number,
	windowPanDuration: React.PropTypes.number,
	tabIndex: React.PropTypes.number
}
