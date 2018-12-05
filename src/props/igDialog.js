$.ig.react.propTypes.shapes.igDialogLocale = {
	closeButtonTitle: PropTypes.string,
	minimizeButtonTitle: PropTypes.string,
	maximizeButtonTitle: PropTypes.string,
	pinButtonTitle: PropTypes.string,
	unpinButtonTitle: PropTypes.string,
	restoreButtonTitle: PropTypes.string
}

$.ig.react.propTypes.igDialog = {
	id: PropTypes.string.isRequired,
	mainElement: PropTypes.element,
	state: PropTypes.oneOf([
		"opened",
		"minimized",
		"maximized",
		"closed"
	]),
	pinned: PropTypes.bool,
	closeOnEscape: PropTypes.bool,
	showCloseButton: PropTypes.bool,
	showMaximizeButton: PropTypes.bool,
	showMinimizeButton: PropTypes.bool,
	showPinButton: PropTypes.bool,
	pinOnMinimized: PropTypes.bool,
	imageClass: PropTypes.string,
	headerText: PropTypes.string,
	showHeader: PropTypes.bool,
	showFooter: PropTypes.bool,
	footerText: PropTypes.string,
	dialogClass: PropTypes.string,
	container: PropTypes.object,
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	minHeight: PropTypes.number,
	minWidth: PropTypes.number,
	maxHeight: PropTypes.number,
	maxWidth: PropTypes.number,
	draggable: PropTypes.bool,
	position: PropTypes.object,
	resizable: PropTypes.bool,
	tabIndex: PropTypes.number,
	openAnimation: PropTypes.object,
	closeAnimation: PropTypes.object,
	zIndex: PropTypes.number,
	modal: PropTypes.bool,
	trackFocus: PropTypes.bool,
	closeButtonTitle: PropTypes.string,
	minimizeButtonTitle: PropTypes.string,
	maximizeButtonTitle: PropTypes.string,
	pinButtonTitle: PropTypes.string,
	unpinButtonTitle: PropTypes.string,
	restoreButtonTitle: PropTypes.string,
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igDialogLocale
	),
	temporaryUrl: PropTypes.string,
	enableHeaderFocus: PropTypes.bool,
	enableDblclick: PropTypes.any
}
