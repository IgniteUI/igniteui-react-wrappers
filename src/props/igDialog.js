(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igDialog = {
		id: React.PropTypes.string.isRequired,
		mainElement: React.PropTypes.element,
		state: React.PropTypes.oneOf([
			"opened",
			"minimized",
			"maximized",
			"closed"
		]),
		pinned: React.PropTypes.bool,
		closeOnEscape: React.PropTypes.bool,
		showCloseButton: React.PropTypes.bool,
		showMaximizeButton: React.PropTypes.bool,
		showMinimizeButton: React.PropTypes.bool,
		showPinButton: React.PropTypes.bool,
		pinOnMinimized: React.PropTypes.bool,
		imageClass: React.PropTypes.string,
		headerText: React.PropTypes.string,
		showHeader: React.PropTypes.bool,
		showFooter: React.PropTypes.bool,
		footerText: React.PropTypes.string,
		dialogClass: React.PropTypes.string,
		container: React.PropTypes.object,
		height: React.PropTypes.oneOfType([	
			React.PropTypes.number,
			React.PropTypes.string
		]),
		width: React.PropTypes.oneOfType([	
			React.PropTypes.number,
			React.PropTypes.string
		]),
		minHeight: React.PropTypes.number,
		minWidth: React.PropTypes.number,
		maxHeight: React.PropTypes.number,
		maxWidth: React.PropTypes.number,
		draggable: React.PropTypes.bool,
		position: React.PropTypes.object,
		resizable: React.PropTypes.bool,
		tabIndex: React.PropTypes.number,
		openAnimation: React.PropTypes.object,
		closeAnimation: React.PropTypes.object,
		zIndex: React.PropTypes.number,
		modal: React.PropTypes.bool,
		trackFocus: React.PropTypes.bool,
		closeButtonTitle: React.PropTypes.string,
		minimizeButtonTitle: React.PropTypes.string,
		maximizeButtonTitle: React.PropTypes.string,
		pinButtonTitle: React.PropTypes.string,
		unpinButtonTitle: React.PropTypes.string,
		restoreButtonTitle: React.PropTypes.string,
		temporaryUrl: React.PropTypes.string,
		enableHeaderFocus: React.PropTypes.bool,
		enableDblclick: React.PropTypes.any
	}

})(jQuery);
