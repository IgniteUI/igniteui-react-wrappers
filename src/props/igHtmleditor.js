(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igHtmlEditor = {
		id: React.PropTypes.string.isRequired,
		showFormattingToolbar: React.PropTypes.bool,
		showTextToolbar: React.PropTypes.bool,
		showInsertObjectToolbar: React.PropTypes.bool,
		showCopyPasteToolbar: React.PropTypes.bool,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		toolbarSettings: React.PropTypes.array,
		customToolbars: React.PropTypes.array,
		inputName: React.PropTypes.string,
		value: React.PropTypes.string
	}

	$.ig.react.propTypes.igPathFinder = {
		id: React.PropTypes.string.isRequired,
		items: React.PropTypes.object
	}

	$.ig.react.propTypes.igHtmlEditorPopover = {
		id: React.PropTypes.string.isRequired,
		item: React.PropTypes.object,
		target: React.PropTypes.object,
		isHidden: React.PropTypes.bool
	}

	$.ig.react.propTypes.igLinkPropertiesDialog = {
		id: React.PropTypes.string.isRequired,
		item: React.PropTypes.object,
		target: React.PropTypes.object,
		isHidden: React.PropTypes.bool
	}

	$.ig.react.propTypes.igTablePropertiesDialog = {
		id: React.PropTypes.string.isRequired,
		item: React.PropTypes.object,
		target: React.PropTypes.object,
		isHidden: React.PropTypes.bool
	}

	$.ig.react.propTypes.igImagePropertiesDialog = {
		id: React.PropTypes.string.isRequired,
		item: React.PropTypes.object,
		target: React.PropTypes.object,
		isHidden: React.PropTypes.bool
	}

})(jQuery);
