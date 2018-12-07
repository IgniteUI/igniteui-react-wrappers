$.ig.react.propTypes.shapes.igGridColumnGroupOptions = {
	expanded: PropTypes.bool,
	allowGroupCollapsing: PropTypes.bool,
	hidden: PropTypes.oneOf([
		"never",
		"always",
		"parentcollapsed",
		"parentexpanded"
	])
}

$.ig.react.propTypes.shapes.igGridColumn = {
	headerText: PropTypes.string,
	key: PropTypes.string,
	formatter: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	format: PropTypes.string,
	dataType: PropTypes.oneOf([
		"number",
		"boolean",
		"date",
		"time",
		"object",
		"string"
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	hidden: PropTypes.bool,
	template: PropTypes.string,
	unbound: PropTypes.bool,
	groupOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridColumnGroupOptions
	),
	group: PropTypes.array,
	dateDisplayType: PropTypes.oneOf([
		"local",
		"utc"
	]),
	rowspan: PropTypes.number,
	formula: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	unboundValues: PropTypes.array,
	headerCssClass: PropTypes.string,
	columnCssClass: PropTypes.string,
	mapper: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	rowIndex: PropTypes.number,
	columnIndex: PropTypes.number,
	navigationIndex: PropTypes.number,
	colSpan: PropTypes.number,
	rowSpan: PropTypes.number
}

$.ig.react.propTypes.shapes.igGridFeature = {
	name: PropTypes.string
}

$.ig.react.propTypes.shapes.igGridRestSettingsCreate = {
	url: PropTypes.string,
	template: PropTypes.string,
	batch: PropTypes.bool
}

$.ig.react.propTypes.shapes.igGridRestSettingsUpdate = {
	url: PropTypes.string,
	template: PropTypes.string,
	batch: PropTypes.bool
}

$.ig.react.propTypes.shapes.igGridRestSettingsRemove = {
	url: PropTypes.string,
	template: PropTypes.string,
	batch: PropTypes.bool
}

$.ig.react.propTypes.shapes.igGridRestSettings = {
	create: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridRestSettingsCreate
	),
	update: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridRestSettingsUpdate
	),
	remove: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridRestSettingsRemove
	),
	encodeRemoveInRequestUri: PropTypes.bool,
	contentSerializer: PropTypes.func,
	contentType: PropTypes.string
}

$.ig.react.propTypes.shapes.igGridScrollSettings = {
	scrollTop: PropTypes.number,
	scrollLeft: PropTypes.number,
	wheelStep: PropTypes.number,
	smoothing: PropTypes.bool,
	smoothingStep: PropTypes.number,
	smoothingDuration: PropTypes.number,
	inertiaStep: PropTypes.number,
	inertiaDuration: PropTypes.number
}

$.ig.react.propTypes.igGrid = {
	id: PropTypes.string.isRequired,
	locale: PropTypes.object,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	autoAdjustHeight: PropTypes.bool,
	avgRowHeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	avgColumnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	defaultColumnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	autoGenerateColumns: PropTypes.bool,
	virtualization: PropTypes.bool,
	virtualizationMode: PropTypes.oneOf([
		"fixed",
		"continuous"
	]),
	rowVirtualization: PropTypes.bool,
	columnVirtualization: PropTypes.bool,
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
	restSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igGridRestSettings
	),
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
