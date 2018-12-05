$.ig.react.propTypes.shapes.igSpreadsheetBrushes = {
}

$.ig.react.propTypes.igSpreadsheet = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	activeCell: PropTypes.string,
	brushes: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSpreadsheetBrushes
	),
	isScrollLocked: PropTypes.bool,
	activeWorksheet: PropTypes.object,
	allowAddWorksheet: PropTypes.bool,
	allowDeleteWorksheet: PropTypes.bool,
	areGridlinesVisible: PropTypes.bool,
	areHeadersVisible: PropTypes.bool,
	enterKeyNavigationDirection: PropTypes.oneOf([
		"down",
		"right",
		"up",
		"left"
	]),
	fixedDecimalPlaceCount: PropTypes.number,
	isEnterKeyNavigationEnabled: PropTypes.bool,
	isFixedDecimalEnabled: PropTypes.bool,
	isFormulaBarVisible: PropTypes.bool,
	isInEndMode: PropTypes.bool,
	isUndoEnabled: PropTypes.bool,
	nameBoxWidth: PropTypes.number,
	selectionMode: PropTypes.oneOf([
		"normal",
		"extendSelection",
		"addToSelection"
	]),
	selectedWorksheets: PropTypes.object,
	validationInputMessagePosition: PropTypes.object,
	workbook: PropTypes.object,
	zoomLevel: PropTypes.number
}
