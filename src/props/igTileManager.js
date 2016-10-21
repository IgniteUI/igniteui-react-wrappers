(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igTileManagerSplitterOptionsEvents = {
		collapsed: React.PropTypes.func,
		expanded: React.PropTypes.func
	}

	$.ig.react.propTypes.shapes.igTileManagerSplitterOptions = {
		enabled: React.PropTypes.bool,
		collapsible: React.PropTypes.bool,
		collapsed: React.PropTypes.bool,
		events: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgTileManagerSplitterOptionsEvents
		)
	}

	$.ig.react.propTypes.igTileManager = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		columnWidth: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		columnHeight: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		cols: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		rows: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		marginLeft: React.PropTypes.number,
		marginTop: React.PropTypes.number,
		rearrangeItems: React.PropTypes.bool,
		items: React.PropTypes.oneOfType([	
			React.PropTypes.array
		]),
		dataSource: React.PropTypes.object,
		minimizedState: React.PropTypes.oneOfType([	
			React.PropTypes.string
		]),
		maximizedState: React.PropTypes.oneOfType([	
			React.PropTypes.string
		]),
		maximizedTileIndex: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		rightPanelCols: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		rightPanelTilesWidth: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		rightPanelTilesHeight: React.PropTypes.oneOfType([	
			React.PropTypes.number
		]),
		showRightPanelScroll: React.PropTypes.bool,
		splitterOptions: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgTileManagerSplitterOptions
		),
		preventMaximizingSelector: React.PropTypes.string,
		animationDuration: React.PropTypes.number,
		dataSourceUrl: React.PropTypes.string,
		responseDataKey: React.PropTypes.oneOfType([	
			React.PropTypes.string
		]),
		responseDataType: React.PropTypes.string,
		dataSourceType: React.PropTypes.string,
		requestType: React.PropTypes.string,
		responseContentType: React.PropTypes.string
	}

})(jQuery);
