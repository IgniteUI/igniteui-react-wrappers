$.ig.react.propTypes.shapes.igZoombarDefaultZoomWindow = {
	left: PropTypes.number,
	width: PropTypes.string
}

$.ig.react.propTypes.igZoombar = {
	id: PropTypes.string.isRequired,
	provider: PropTypes.object,
	target: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	clone: PropTypes.oneOf([
		"auto",
		"none"
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	zoomAction: PropTypes.oneOf([
		"immediate",
		"deferred"
	]),
	zoomWindowMoveDistance: PropTypes.number,
	defaultZoomWindow: PropTypes.shape(
		$.ig.react.propTypes.shapes.igZoombarDefaultZoomWindow
	),
	zoomWindowMinWidth: PropTypes.number,
	hoverStyleAnimationDuration: PropTypes.number,
	windowPanDuration: PropTypes.number,
	tabIndex: PropTypes.number
}
