$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsRequestOptions = {
	withCredentials: React.PropTypes.bool,
	beforeSend: React.PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsMdxSettings = {
	nonEmptyOnRows: React.PropTypes.bool,
	nonEmptyOnColumns: React.PropTypes.bool,
	addCalculatedMembersOnRows: React.PropTypes.bool,
	addCalculatedMembersOnColumns: React.PropTypes.bool,
	dimensionPropertiesOnRows: React.PropTypes.array,
	dimensionPropertiesOnColumns: React.PropTypes.array
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptions = {
	serverUrl: React.PropTypes.string,
	catalog: React.PropTypes.string,
	cube: React.PropTypes.string,
	measureGroup: React.PropTypes.string,
	requestOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsRequestOptions
	),
	enableResultCache: React.PropTypes.bool,
	discoverProperties: React.PropTypes.object,
	executeProperties: React.PropTypes.object,
	mdxSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptionsMdxSettings
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	aggregator: React.PropTypes.func,
	displayFolder: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	measures: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	memberProvider: React.PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	displayFolder: React.PropTypes.string,
	levels: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	hierarchies: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCube = {
	name: React.PropTypes.string,
	caption: React.PropTypes.string,
	measuresDimension: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
	),
	dimensions: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadata = {
	cube: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadataCube
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptions = {
	dataSource: React.PropTypes.object,
	dataSourceUrl: React.PropTypes.string,
	dataSourceType: React.PropTypes.string,
	responseDataKey: React.PropTypes.string,
	responseDataType: React.PropTypes.string,
	metadata: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptionsMetadata
	)
}

$.ig.react.propTypes.shapes.igPivotGridDataSourceOptions = {
	xmlaOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsXmlaOptions
	),
	flatDataOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptionsFlatDataOptions
	),
	measures: React.PropTypes.string,
	filters: React.PropTypes.string,
	rows: React.PropTypes.string,
	columns: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotGridLevelSortDirection = {
	levelUniqueName: React.PropTypes.string,
	sortDirection: React.PropTypes.any,
	sortBehavior: React.PropTypes.oneOf([
		"system",
		"alphabetical"
	])
}

$.ig.react.propTypes.shapes.igPivotGridGridOptionsFeatures = {
}

$.ig.react.propTypes.shapes.igPivotGridGridOptions = {
	defaultColumnWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	fixedHeaders: React.PropTypes.bool,
	caption: React.PropTypes.string,
	features: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridGridOptionsFeatures
	),
	tabIndex: React.PropTypes.number,
	alternateRowStyles: React.PropTypes.bool,
	enableHoverStyles: React.PropTypes.bool
}

$.ig.react.propTypes.shapes.igPivotGridDragAndDropSettings = {
	appendTo: React.PropTypes.any,
	containment: React.PropTypes.oneOfType([
		React.PropTypes.bool,
		React.PropTypes.string,
		React.PropTypes.array
	]),
	zIndex: React.PropTypes.number
}

$.ig.react.propTypes.igPivotGrid = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	dataSource: React.PropTypes.object,
	dataSourceOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDataSourceOptions
	),
	deferUpdate: React.PropTypes.bool,
	isParentInFrontForColumns: React.PropTypes.bool,
	isParentInFrontForRows: React.PropTypes.bool,
	compactColumnHeaders: React.PropTypes.bool,
	compactRowHeaders: React.PropTypes.bool,
	rowHeadersLayout: React.PropTypes.any,
	compactColumnHeaderIndentation: React.PropTypes.number,
	compactRowHeaderIndentation: React.PropTypes.number,
	rowHeaderLinkGroupIndentation: React.PropTypes.number,
	treeRowHeaderIndentation: React.PropTypes.number,
	defaultRowHeaderWidth: React.PropTypes.number,
	allowSorting: React.PropTypes.bool,
	firstSortDirection: React.PropTypes.any,
	allowHeaderRowsSorting: React.PropTypes.bool,
	allowHeaderColumnsSorting: React.PropTypes.bool,
	levelSortDirections: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotGridLevelSortDirection)
	),
	defaultLevelSortBehavior: React.PropTypes.oneOf([
		"system",
		"alphabetical"
	]),
	firstLevelSortDirection: React.PropTypes.any,
	gridOptions: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridGridOptions
	),
	dragAndDropSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotGridDragAndDropSettings
	),
	dropDownParent: React.PropTypes.any,
	disableRowsDropArea: React.PropTypes.bool,
	disableColumnsDropArea: React.PropTypes.bool,
	disableMeasuresDropArea: React.PropTypes.bool,
	disableFiltersDropArea: React.PropTypes.bool,
	hideRowsDropArea: React.PropTypes.bool,
	hideColumnsDropArea: React.PropTypes.bool,
	hideMeasuresDropArea: React.PropTypes.bool,
	hideFiltersDropArea: React.PropTypes.bool,
	customMoveValidation: React.PropTypes.func
}
