$.ig.react.propTypes.igHtmlEditor = {
	id: PropTypes.string.isRequired,
	showFormattingToolbar: PropTypes.bool,
	showTextToolbar: PropTypes.bool,
	showInsertObjectToolbar: PropTypes.bool,
	showCopyPasteToolbar: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	toolbarSettings: PropTypes.array,
	customToolbars: PropTypes.array,
	inputName: PropTypes.string,
	value: PropTypes.string
}
