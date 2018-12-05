$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsRequestOptions = {
	withCredentials: PropTypes.bool,
	beforeSend: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsMdxSettings = {
	nonEmptyOnRows: PropTypes.bool,
	nonEmptyOnColumns: PropTypes.bool,
	addCalculatedMembersOnRows: PropTypes.bool,
	addCalculatedMembersOnColumns: PropTypes.bool,
	dimensionPropertiesOnRows: PropTypes.array,
	dimensionPropertiesOnColumns: PropTypes.array
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptions = {
	serverUrl: PropTypes.string,
	catalog: PropTypes.string,
	cube: PropTypes.string,
	measureGroup: PropTypes.string,
	requestOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsRequestOptions
	),
	enableResultCache: PropTypes.bool,
	discoverProperties: PropTypes.object,
	executeProperties: PropTypes.object,
	mdxSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsMdxSettings
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
	name: PropTypes.string,
	caption: PropTypes.string,
	aggregator: PropTypes.func,
	displayFolder: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measures: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
	name: PropTypes.string,
	caption: PropTypes.string,
	memberProvider: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
	name: PropTypes.string,
	caption: PropTypes.string,
	displayFolder: PropTypes.string,
	levels: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	hierarchies: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCube = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measuresDimension: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
	),
	dimensions: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadata = {
	cube: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCube
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptions = {
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.string,
	responseDataType: PropTypes.string,
	metadata: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadata
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptions = {
	xmlaOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptions
	),
	flatDataOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptions
	),
	measures: PropTypes.string,
	filters: PropTypes.string,
	rows: PropTypes.string,
	columns: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotGridLevelSortDirection = {
	levelUniqueName: PropTypes.string,
	sortDirection: PropTypes.any,
	sortBehavior: PropTypes.oneOf([
		"system",
		"alphabetical"
	])
}

$.ig.react.propTypes.shapes.igPivotGridGridOptionsFeatures = {
}

$.ig.react.propTypes.shapes.igPivotGridGridOptions = {
	defaultColumnWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	fixedHeaders: PropTypes.bool,
	caption: PropTypes.string,
	features: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridGridOptionsFeatures
	),
	tabIndex: PropTypes.number,
	alternateRowStyles: PropTypes.bool,
	enableHoverStyles: PropTypes.bool
}

$.ig.react.propTypes.shapes.igPivotGridDragAndDropSettings = {
	appendTo: PropTypes.any,
	containment: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.array
	]),
	zIndex: PropTypes.number
}

$.ig.react.propTypes.igPivotGrid = {
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
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptions
	),
	deferUpdate: PropTypes.bool,
	isParentInFrontForColumns: PropTypes.bool,
	isParentInFrontForRows: PropTypes.bool,
	compactColumnHeaders: PropTypes.bool,
	compactRowHeaders: PropTypes.bool,
	rowHeadersLayout: PropTypes.any,
	compactColumnHeaderIndentation: PropTypes.number,
	compactRowHeaderIndentation: PropTypes.number,
	rowHeaderLinkGroupIndentation: PropTypes.number,
	treeRowHeaderIndentation: PropTypes.number,
	defaultRowHeaderWidth: PropTypes.number,
	allowSorting: PropTypes.bool,
	firstSortDirection: PropTypes.any,
	allowHeaderRowsSorting: PropTypes.bool,
	allowHeaderColumnsSorting: PropTypes.bool,
	levelSortDirections: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridLevelSortDirection)
	),
	defaultLevelSortBehavior: PropTypes.oneOf([
		"system",
		"alphabetical"
	]),
	firstLevelSortDirection: PropTypes.any,
	gridOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridGridOptions
	),
	dragAndDropSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDragAndDropSettings
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
