$.ig.react.propTypes.shapes.igHierarchicalGridColumnLayout = {
	key: React.PropTypes.string,
	primaryKey: React.PropTypes.string,
	foreignKey: React.PropTypes.string
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
	columns: React.PropTypes.array,
	columnLayouts: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igHierarchicalGridColumnLayout)
	)
}
