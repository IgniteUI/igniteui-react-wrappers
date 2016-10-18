(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions = {
		withCredentials: React.PropTypes.bool,
		beforeSend: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings = {
		nonEmptyOnRows: React.PropTypes.bool,
		nonEmptyOnColumns: React.PropTypes.bool,
		addCalculatedMembersOnRows: React.PropTypes.bool,
		addCalculatedMembersOnColumns: React.PropTypes.bool,
		dimensionPropertiesOnRows: React.PropTypes.array,
		dimensionPropertiesOnColumns: React.PropTypes.array
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsXmlaOptions = {
		serverUrl: React.PropTypes.string,
		catalog: React.PropTypes.string,
		cube: React.PropTypes.string,
		measureGroup: React.PropTypes.string,
		requestOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions
		),
		enableResultCache: React.PropTypes.bool,
		discoverProperties: React.PropTypes.object,
		executeProperties: React.PropTypes.object,
		mdxSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		aggregator: React.PropTypes.func,
		displayFolder: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		measures: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		memberProvider: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		displayFolder: React.PropTypes.string,
		levels: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		hierarchies: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		measuresDimension: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
		),
		dimensions: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata = {
		cube: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptionsFlatDataOptions = {
		dataSource: React.PropTypes.object,
		dataSourceUrl: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		responseDataType: React.PropTypes.string,
		metadata: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata
		)
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDataSourceOptions = {
		xmlaOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsXmlaOptions
		),
		flatDataOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptionsFlatDataOptions
		),
		measures: React.PropTypes.string,
		filters: React.PropTypes.string,
		rows: React.PropTypes.string,
		columns: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igPivotDataSelectorDragAndDropSettings = {
		appendTo: React.PropTypes.any,
		containment: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.string
		]),
		zIndex: React.PropTypes.number
	}

	$.ig.react.propTypes.igPivotDataSelector = {
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
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDataSourceOptions
		),
		deferUpdate: React.PropTypes.bool,
		dragAndDropSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotDataSelectorDragAndDropSettings
		),
		dropDownParent: React.PropTypes.any,
		disableRowsDropArea: React.PropTypes.bool,
		disableColumnsDropArea: React.PropTypes.bool,
		disableMeasuresDropArea: React.PropTypes.bool,
		disableFiltersDropArea: React.PropTypes.bool,
		customMoveValidation: React.PropTypes.func
	}

})(jQuery);
