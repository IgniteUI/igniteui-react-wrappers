(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igBaseChart = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		tooltipTemplate: React.PropTypes.string,
		maxRecCount: React.PropTypes.number,
		dataSource: React.PropTypes.object,
		dataSourceType: React.PropTypes.string,
		dataSourceUrl: React.PropTypes.string,
		responseTotalRecCountKey: React.PropTypes.string,
		responseDataKey: React.PropTypes.string
	}

})(jQuery);
