$.ig.react.propTypes.shapes.igTreeGridDataSourceSettings = {
	propertyExpanded: PropTypes.object,
	propertyDataLevel: PropTypes.object,
	expandedKey: PropTypes.string,
	dataLevelKey: PropTypes.string,
	initialFlatDataView: PropTypes.bool
}

$.ig.react.propTypes.shapes.igTreeGridLocale = {
	expandTooltipText: PropTypes.string,
	collapseTooltipText: PropTypes.string
}

$.ig.react.propTypes.igTreeGrid = {
	id: PropTypes.string.isRequired,
	indentation: PropTypes.string,
	initialIndentationLevel: PropTypes.number,
	showExpansionIndicator: PropTypes.bool,
	expandTooltipText: PropTypes.string,
	collapseTooltipText: PropTypes.string,
	foreignKey: PropTypes.string,
	initialExpandDepth: PropTypes.number,
	foreignKeyRootValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	renderExpansionIndicatorColumn: PropTypes.bool,
	renderFirstDataCellFunction: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	childDataKey: PropTypes.string,
	renderExpansionCellFunction: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	enableRemoteLoadOnDemand: PropTypes.bool,
	dataSourceSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTreeGridDataSourceSettings
	),
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTreeGridLocale
	),
	virtualizationMode: PropTypes.string,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	autoAdjustHeight: PropTypes.bool,
	defaultColumnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	autoGenerateColumns: PropTypes.bool,
	virtualization: PropTypes.bool,
	rowVirtualization: PropTypes.bool,
	virtualizationMouseWheelStep: PropTypes.number,
	adjustVirtualHeights: PropTypes.bool,
	templatingEngine: PropTypes.oneOf([
		"infragistics",
		"jsRender"
	]),
	columns: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igGridColumn)
	),
	dataSource: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string
	]),
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.string,
	responseTotalRecCountKey: PropTypes.string,
	requestType: PropTypes.string,
	responseContentType: PropTypes.string,
	showHeader: PropTypes.bool,
	showFooter: PropTypes.bool,
	fixedHeaders: PropTypes.bool,
	fixedFooters: PropTypes.bool,
	caption: PropTypes.string,
	features: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igGridFeature)
	),
	tabIndex: PropTypes.number,
	localSchemaTransform: PropTypes.bool,
	primaryKey: PropTypes.string,
	serializeTransactionLog: PropTypes.bool,
	autoCommit: PropTypes.bool,
	aggregateTransactions: PropTypes.bool,
	autoFormat: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]),
	renderCheckboxes: PropTypes.bool,
	updateUrl: PropTypes.string,
	alternateRowStyles: PropTypes.bool,
	autofitLastColumn: PropTypes.bool,
	enableHoverStyles: PropTypes.bool,
	enableUTCDates: PropTypes.bool,
	mergeUnboundColumns: PropTypes.bool,
	jsonpRequest: PropTypes.bool,
	enableResizeContainerCheck: PropTypes.bool,
	featureChooserIconDisplay: PropTypes.oneOf([
		"none",
		"desktopOnly",
		"always"
	]),
	scrollSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridScrollSettings
	)
}
