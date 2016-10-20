(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsRequestOptions = {
		withCredentials: React.PropTypes.bool,
		beforeSend: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptionsMdxSettings = {
		nonEmptyOnRows: React.PropTypes.bool,
		nonEmptyOnColumns: React.PropTypes.bool,
		addCalculatedMembersOnRows: React.PropTypes.bool,
		addCalculatedMembersOnColumns: React.PropTypes.bool,
		dimensionPropertiesOnRows: React.PropTypes.array,
		dimensionPropertiesOnColumns: React.PropTypes.array
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsXmlaOptions = {
		serverUrl: React.PropTypes.string,
		catalog: React.PropTypes.string,
		cube: React.PropTypes.string,
		measureGroup: React.PropTypes.string,
		requestOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsXmlaOptionsRequestOptions
		),
		enableResultCache: React.PropTypes.bool,
		discoverProperties: React.PropTypes.object,
		executeProperties: React.PropTypes.object,
		mdxSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsXmlaOptionsMdxSettings
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		aggregator: React.PropTypes.func,
		displayFolder: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		measures: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure)
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		memberProvider: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		displayFolder: React.PropTypes.string,
		levels: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel)
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		hierarchies: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie)
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCube = {
		name: React.PropTypes.string,
		caption: React.PropTypes.string,
		measuresDimension: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension
		),
		dimensions: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension)
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptionsMetadata = {
		cube: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCube
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptionsFlatDataOptions = {
		dataSource: React.PropTypes.object,
		dataSourceUrl: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		responseDataType: React.PropTypes.string,
		metadata: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsFlatDataOptionsMetadata
		)
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSourceOptions = {
		xmlaOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsXmlaOptions
		),
		flatDataOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptionsFlatDataOptions
		),
		measures: React.PropTypes.string,
		filters: React.PropTypes.string,
		rows: React.PropTypes.string,
		columns: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsLevelSortDirection = {
		levelUniqueName: React.PropTypes.string,
		sortDirection: React.PropTypes.any
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptionsFeatures = {
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsGridOptions = {
		defaultColumnWidth: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		fixedHeaders: React.PropTypes.bool,
		caption: React.PropTypes.string,
		features: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewPivotGridOptionsGridOptionsFeatures
		),
		tabIndex: React.PropTypes.number,
		alternateRowStyles: React.PropTypes.bool,
		enableHoverStyles: React.PropTypes.bool
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsDragAndDropSettings = {
		appendTo: React.PropTypes.any,
		containment: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.string
		]),
		zIndex: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridOptions = {
		isParentInFrontForColumns: React.PropTypes.bool,
		isParentInFrontForRows: React.PropTypes.bool,
		compactColumnHeaders: React.PropTypes.bool,
		rowHeadersLayout: React.PropTypes.any,
		compactColumnHeaderIndentation: React.PropTypes.number,
		compactRowHeaderIndentation: React.PropTypes.number,
		defaultRowHeaderWidth: React.PropTypes.number,
		allowSorting: React.PropTypes.bool,
		firstSortDirection: React.PropTypes.any,
		allowHeaderRowsSorting: React.PropTypes.bool,
		allowHeaderColumnsSorting: React.PropTypes.bool,
		levelSortDirections: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igPivotViewPivotGridOptionsLevelSortDirection)
		),
		firstLevelSortDirection: React.PropTypes.any,
		gridOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewPivotGridOptionsGridOptions
		),
		dragAndDropSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewPivotGridOptionsDragAndDropSettings
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

	$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptionsDragAndDropSettings = {
		appendTo: React.PropTypes.any,
		containment: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.string
		]),
		zIndex: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSelectorOptions = {
		dragAndDropSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSelectorOptionsDragAndDropSettings
		),
		dropDownParent: React.PropTypes.any,
		customMoveValidation: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igPivotViewPivotGridPanel = {
		resizable: React.PropTypes.bool,
		collapsible: React.PropTypes.bool,
		collapsed: React.PropTypes.bool,
		size: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		])
	}

	$.ig.react.propTypes.shapes.igPivotViewDataSelectorPanel = {
		location: React.PropTypes.any,
		resizable: React.PropTypes.bool,
		collapsible: React.PropTypes.bool,
		collapsed: React.PropTypes.bool,
		size: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		])
	}

	$.ig.react.propTypes.igPivotView = {
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
			$.ig.react.propTypes.shapes.IgPivotViewDataSourceOptions
		),
		pivotGridOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewPivotGridOptions
		),
		dataSelectorOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSelectorOptions
		),
		pivotGridPanel: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewPivotGridPanel
		),
		dataSelectorPanel: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgPivotViewDataSelectorPanel
		)
	}

})(jQuery);
