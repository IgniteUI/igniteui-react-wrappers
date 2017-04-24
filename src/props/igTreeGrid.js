$.ig.react.propTypes.shapes.igTreeGridDataSourceSettings = {
	propertyExpanded: React.PropTypes.string,
	propertyDataLevel: React.PropTypes.string,
	initialFlatDataView: React.PropTypes.bool
}

$.ig.react.propTypes.igTreeGrid = {
	id: React.PropTypes.string.isRequired,
	indentation: React.PropTypes.string,
	initialIndentationLevel: React.PropTypes.number,
	showExpansionIndicator: React.PropTypes.bool,
	expandTooltipText: React.PropTypes.string,
	collapseTooltipText: React.PropTypes.string,
	foreignKey: React.PropTypes.string,
	initialExpandDepth: React.PropTypes.number,
	foreignKeyRootValue: React.PropTypes.number,
	renderExpansionIndicatorColumn: React.PropTypes.bool,
	renderFirstDataCellFunction: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]),
	childDataKey: React.PropTypes.string,
	renderExpansionCellFunction: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]),
	enableRemoteLoadOnDemand: React.PropTypes.bool,
	dataSourceSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgTreeGridDataSourceSettings
	),
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	autoAdjustHeight: React.PropTypes.bool,
	avgRowHeight: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	avgColumnWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	defaultColumnWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	autoGenerateColumns: React.PropTypes.bool,
	virtualization: React.PropTypes.bool,
	virtualizationMode: React.PropTypes.oneOf([
		"fixed",
		"continuous"
	]),
	requiresDataBinding: React.PropTypes.bool,
	rowVirtualization: React.PropTypes.bool,
	columnVirtualization: React.PropTypes.bool,
	virtualizationMouseWheelStep: React.PropTypes.number,
	adjustVirtualHeights: React.PropTypes.bool,
	templatingEngine: React.PropTypes.oneOf([
		"infragistics",
		"jsRender"
	]),
	columns: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igGridColumn)
	),
	dataSource: React.PropTypes.object,
	dataSourceUrl: React.PropTypes.string,
	dataSourceType: React.PropTypes.string,
	responseDataKey: React.PropTypes.string,
	responseTotalRecCountKey: React.PropTypes.string,
	requestType: React.PropTypes.string,
	responseContentType: React.PropTypes.string,
	showHeader: React.PropTypes.bool,
	showFooter: React.PropTypes.bool,
	fixedHeaders: React.PropTypes.bool,
	fixedFooters: React.PropTypes.bool,
	caption: React.PropTypes.string,
	features: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igGridFeature)
	),
	tabIndex: React.PropTypes.number,
	localSchemaTransform: React.PropTypes.bool,
	primaryKey: React.PropTypes.string,
	serializeTransactionLog: React.PropTypes.bool,
	autoCommit: React.PropTypes.bool,
	aggregateTransactions: React.PropTypes.bool,
	autoFormat: React.PropTypes.oneOf([
		"date",
		"number",
		"dateandnumber",
		"true",
		"false"
	]),
	renderCheckboxes: React.PropTypes.bool,
	updateUrl: React.PropTypes.string,
	restSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgGridRestSettings
	),
	alternateRowStyles: React.PropTypes.bool,
	autofitLastColumn: React.PropTypes.bool,
	enableHoverStyles: React.PropTypes.bool,
	enableUTCDates: React.PropTypes.bool,
	mergeUnboundColumns: React.PropTypes.bool,
	jsonpRequest: React.PropTypes.bool,
	enableResizeContainerCheck: React.PropTypes.bool,
	featureChooserIconDisplay: React.PropTypes.oneOf([
		"none",
		"desktopOnly",
		"always"
	]),
	scrollSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgGridScrollSettings
	)
}
