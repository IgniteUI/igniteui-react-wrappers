$.ig.react.propTypes.shapes.igHierarchicalGridLocale = {
	expandTooltip: React.PropTypes.string,
	collapseTooltip: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igHierarchicalGridColumnLayout = {
	key: React.PropTypes.string,
	primaryKey: React.PropTypes.string,
	foreignKey: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igHierarchicalGridColumnGroupOptions = {
	expanded: React.PropTypes.bool,
	allowGroupCollapsing: React.PropTypes.bool,
	hidden: React.PropTypes.oneOf([
		"never",
		"always",
		"parentcollapsed",
		"parentexpanded"
	])
}

$.ig.react.propTypes.shapes.igHierarchicalGridColumn = {
	headerText: React.PropTypes.string,
	key: React.PropTypes.string,
	formatter: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func
	]),
	format: React.PropTypes.string,
	dataType: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.bool,
		React.PropTypes.instanceOf(Date),
		React.PropTypes.object
	]),
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	hidden: React.PropTypes.bool,
	template: React.PropTypes.string,
	unbound: React.PropTypes.bool,
	groupOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igHierarchicalGridColumnGroupOptions
	),
	group: React.PropTypes.array,
	dateDisplayType: React.PropTypes.oneOf([
		"local",
		"utc"
	]),
	rowspan: React.PropTypes.number,
	formula: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func
	]),
	unboundValues: React.PropTypes.array,
	headerCssClass: React.PropTypes.string,
	columnCssClass: React.PropTypes.string,
	mapper: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func
	]),
	rowIndex: React.PropTypes.number,
	columnIndex: React.PropTypes.number,
	navigationIndex: React.PropTypes.number,
	colSpan: React.PropTypes.number,
	rowSpan: React.PropTypes.number
}

$.ig.react.propTypes.shapes.igHierarchicalGridFeature = {
	name: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsCreate = {
	url: React.PropTypes.string,
	template: React.PropTypes.string,
	batch: React.PropTypes.bool
}

$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsUpdate = {
	url: React.PropTypes.string,
	template: React.PropTypes.string,
	batch: React.PropTypes.bool
}

$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsRemove = {
	url: React.PropTypes.string,
	template: React.PropTypes.string,
	batch: React.PropTypes.bool
}

$.ig.react.propTypes.shapes.igHierarchicalGridRestSettings = {
	create: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsCreate
	),
	update: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsUpdate
	),
	remove: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igHierarchicalGridRestSettingsRemove
	),
	encodeRemoveInRequestUri: React.PropTypes.bool,
	contentSerializer: React.PropTypes.func,
	contentType: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igHierarchicalGridScrollSettings = {
	scrollTop: React.PropTypes.number,
	scrollLeft: React.PropTypes.number,
	wheelStep: React.PropTypes.number,
	smoothing: React.PropTypes.bool,
	smoothingStep: React.PropTypes.number,
	smoothingDuration: React.PropTypes.number,
	inertiaStep: React.PropTypes.number,
	inertiaDuration: React.PropTypes.number
}

$.ig.react.propTypes.igHierarchicalGrid = {
	id: React.PropTypes.string.isRequired,
	initialDataBindDepth: React.PropTypes.number,
	initialExpandDepth: React.PropTypes.number,
	odata: React.PropTypes.bool,
	rest: React.PropTypes.bool,
	maxDataBindDepth: React.PropTypes.number,
	defaultChildrenDataProperty: React.PropTypes.string,
	autoGenerateLayouts: React.PropTypes.bool,
	expandCollapseAnimations: React.PropTypes.bool,
	expandColWidth: React.PropTypes.number,
	pathSeparator: React.PropTypes.string,
	animationDuration: React.PropTypes.number,
	expandTooltip: React.PropTypes.string,
	collapseTooltip: React.PropTypes.string,
	locale: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igHierarchicalGridLocale
	),
	columnLayouts: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igHierarchicalGridColumnLayout)
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
	rowVirtualization: React.PropTypes.bool,
	columnVirtualization: React.PropTypes.bool,
	virtualizationMouseWheelStep: React.PropTypes.number,
	adjustVirtualHeights: React.PropTypes.bool,
	templatingEngine: React.PropTypes.oneOf([
		"infragistics",
		"jsRender"
	]),
	columns: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igHierarchicalGridColumn)
	),
	dataSource: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object,
		React.PropTypes.string
	]),
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
		React.PropTypes.shape($.ig.react.propTypes.shapes.igHierarchicalGridFeature)
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
		$.ig.react.propTypes.shapes.igHierarchicalGridRestSettings
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
		$.ig.react.propTypes.shapes.igHierarchicalGridScrollSettings
	)
}
