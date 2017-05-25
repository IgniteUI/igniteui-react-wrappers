$.ig.react.propTypes.igSpreadsheet = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([	
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([	
		React.PropTypes.string,
		React.PropTypes.number
	]),
	activeCell: React.PropTypes.string,
	isScrollLocked: React.PropTypes.bool,
	activeWorksheet: React.PropTypes.object,
	allowAddWorksheet: React.PropTypes.bool,
	allowDeleteWorksheet: React.PropTypes.bool,
	areGridlinesVisible: React.PropTypes.bool,
	areHeadersVisible: React.PropTypes.bool,
	enterKeyNavigationDirection: React.PropTypes.oneOf([
		"down",
		"right",
		"up",
		"left"
	]),
	isEnterKeyNavigationEnabled: React.PropTypes.bool,
	isFormulaBarVisible: React.PropTypes.bool,
	isInEndMode: React.PropTypes.bool,
	isUndoEnabled: React.PropTypes.bool,
	nameBoxWidth: React.PropTypes.number,
	selectionMode: React.PropTypes.oneOf([
		"normal",
		"extendSelection",
		"addToSelection"
	]),
	selectedWorksheets: React.PropTypes.object,
	validationInputMessagePosition: React.PropTypes.object,
	workbook: React.PropTypes.object,
	zoomLevel: React.PropTypes.number
}
