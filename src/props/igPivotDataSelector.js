$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions = {
	withCredentials: PropTypes.bool,
	beforeSend: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings = {
	nonEmptyOnRows: PropTypes.bool,
	nonEmptyOnColumns: PropTypes.bool,
	addCalculatedMembersOnRows: PropTypes.bool,
	addCalculatedMembersOnColumns: PropTypes.bool,
	dimensionPropertiesOnRows: PropTypes.array,
	dimensionPropertiesOnColumns: PropTypes.array
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptions = {
	serverUrl: PropTypes.string,
	catalog: PropTypes.string,
	cube: PropTypes.string,
	measureGroup: PropTypes.string,
	requestOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions
	),
	enableResultCache: PropTypes.bool,
	discoverProperties: PropTypes.object,
	executeProperties: PropTypes.object,
	mdxSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
	name: PropTypes.string,
	caption: PropTypes.string,
	aggregator: PropTypes.func,
	displayFolder: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measures: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
	name: PropTypes.string,
	caption: PropTypes.string,
	memberProvider: PropTypes.func
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
	name: PropTypes.string,
	caption: PropTypes.string,
	displayFolder: PropTypes.string,
	levels: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
	name: PropTypes.string,
	caption: PropTypes.string,
	hierarchies: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube = {
	name: PropTypes.string,
	caption: PropTypes.string,
	measuresDimension: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
	),
	dimensions: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata = {
	cube: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptions = {
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.string,
	responseDataType: PropTypes.string,
	metadata: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata
	)
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptions = {
	xmlaOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptions
	),
	flatDataOptions: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptions
	),
	measures: PropTypes.string,
	filters: PropTypes.string,
	rows: PropTypes.string,
	columns: PropTypes.string
}

$.ig.react.propTypes.shapes.igPivotDataSelectorDragAndDropSettings = {
	appendTo: PropTypes.any,
	containment: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.array
	]),
	zIndex: PropTypes.number
}

$.ig.react.propTypes.igPivotDataSelector = {
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
		$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptions
	),
	deferUpdate: PropTypes.bool,
	dragAndDropSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igPivotDataSelectorDragAndDropSettings
	),
	dropDownParent: PropTypes.any,
	disableRowsDropArea: PropTypes.bool,
	disableColumnsDropArea: PropTypes.bool,
	disableMeasuresDropArea: PropTypes.bool,
	disableFiltersDropArea: PropTypes.bool,
	customMoveValidation: PropTypes.func
}
