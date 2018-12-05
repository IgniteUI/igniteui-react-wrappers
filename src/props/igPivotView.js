$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsRequestOptions = {
	withCredentials: PropTypes.bool,
	beforeSend: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsMdxSettings = {
	nonEmptyOnRows: PropTypes.bool,
	nonEmptyOnColumns: PropTypes.bool,
	addCalculatedMembersOnRows: PropTypes.bool,
	addCalculatedMembersOnColumns: PropTypes.bool,
	dimensionPropertiesOnRows: PropTypes.array,
	dimensionPropertiesOnColumns: PropTypes.array
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptions = {
	serverUrl: PropTypes.string,
	catalog: PropTypes.string,
	cube: PropTypes.string,
	measureGroup: PropTypes.string,
	requestOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsRequestOptions
	),
	enableResultCache: PropTypes.bool,
	discoverProperties: PropTypes.object,
	executeProperties: PropTypes.object,
	mdxSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsMdxSettings
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
	name: PropTypes.string,
	caption: PropTypes.string,
	aggregator: PropTypes.func,
	displayFolder: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measures: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
	name: PropTypes.string,
	caption: PropTypes.string,
	memberProvider: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
	name: PropTypes.string,
	caption: PropTypes.string,
	displayFolder: PropTypes.string,
	levels: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	hierarchies: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCube = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measuresDimension: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
	),
	dimensions: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadata = {
	cube: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCube
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptions = {
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.string,
	responseDataType: PropTypes.string,
	metadata: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadata
	)
}

$.ig.react.propTypes.shapes.igPivotViewDataSourceOptions = {
	xmlaOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptions
	),
	flatDataOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptions
	),
	measures: PropTypes.string,
	filters: PropTypes.string,
	rows: PropTypes.string,
	columns: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsLevelSortDirection = {
	levelUniqueName: PropTypes.string,
	sortDirection: PropTypes.any
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptionsFeatures = {
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptions = {
	defaultColumnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	fixedHeaders: PropTypes.bool,
	caption: PropTypes.string,
	features: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptionsFeatures
	),
	tabIndex: PropTypes.number,
	alternateRowStyles: PropTypes.bool,
	enableHoverStyles: PropTypes.bool
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsDragAndDropSettings = {
	appendTo: PropTypes.any,
	containment: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.array
	]),
	zIndex: PropTypes.number
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridOptions = {
	isParentInFrontForColumns: PropTypes.bool,
	isParentInFrontForRows: PropTypes.bool,
	compactColumnHeaders: PropTypes.bool,
	rowHeadersLayout: PropTypes.any,
	compactColumnHeaderIndentation: PropTypes.number,
	compactRowHeaderIndentation: PropTypes.number,
	defaultRowHeaderWidth: PropTypes.number,
	allowSorting: PropTypes.bool,
	firstSortDirection: PropTypes.any,
	allowHeaderRowsSorting: PropTypes.bool,
	allowHeaderColumnsSorting: PropTypes.bool,
	levelSortDirections: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsLevelSortDirection)
	),
	firstLevelSortDirection: PropTypes.any,
	gridOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptions
	),
	dragAndDropSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsDragAndDropSettings
	),
	dropDownParent: PropTypes.any,
	disableRowsDropArea: PropTypes.bool,
	disableColumnsDropArea: PropTypes.bool,
	disableMeasuresDropArea: PropTypes.bool,
	disableFiltersDropArea: PropTypes.bool,
	hideRowsDropArea: PropTypes.bool,
	hideColumnsDropArea: PropTypes.bool,
	hideMeasuresDropArea: PropTypes.bool,
	hideFiltersDropArea: PropTypes.bool,
	customMoveValidation: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptionsDragAndDropSettings = {
	appendTo: PropTypes.any,
	containment: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.array
	]),
	zIndex: PropTypes.number
}

$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptions = {
	dragAndDropSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptionsDragAndDropSettings
	),
	dropDownParent: PropTypes.any,
	customMoveValidation: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotViewPivotGridPanel = {
	resizable: PropTypes.bool,
	collapsible: PropTypes.bool,
	collapsed: PropTypes.bool,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

$.ig.react.propTypes.shapes.igPivotViewDataSelectorPanel = {
	location: PropTypes.any,
	resizable: PropTypes.bool,
	collapsible: PropTypes.bool,
	collapsed: PropTypes.bool,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

$.ig.react.propTypes.igPivotView = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	dataSource: PropTypes.object,
	dataSourceOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSourceOptions
	),
	pivotGridOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewPivotGridOptions
	),
	dataSelectorOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptions
	),
	pivotGridPanel: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewPivotGridPanel
	),
	dataSelectorPanel: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotViewDataSelectorPanel
	)
}
