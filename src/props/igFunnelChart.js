$.ig.react.propTypes.igFunnelChart = {
	id: PropTypes.string.isRequired,
	bezierPoints: PropTypes.string,
	legend: PropTypes.object,
	valueMemberPath: PropTypes.string,
	brushes: PropTypes.object,
	outlines: PropTypes.object,
	bottomEdgeWidth: PropTypes.number,
	innerLabelMemberPath: PropTypes.string,
	outerLabelMemberPath: PropTypes.string,
	innerLabelVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	outerLabelVisibility: PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	outerLabelAlignment: PropTypes.oneOf([
		"left",
		"right"
	]),
	funnelSliceDisplay: PropTypes.oneOf([
		"uniform",
		"weighted"
	]),
	formatInnerLabel: PropTypes.object,
	formatOuterLabel: PropTypes.object,
	transitionDuration: PropTypes.number,
	isInverted: PropTypes.bool,
	useBezierCurve: PropTypes.bool,
	allowSliceSelection: PropTypes.bool,
	useUnselectedStyle: PropTypes.bool,
	selectedSliceStyle: PropTypes.object,
	unselectedSliceStyle: PropTypes.object,
	legendItemBadgeTemplate: PropTypes.object,
	useOuterLabelsForLegend: PropTypes.bool,
	textStyle: PropTypes.string,
	outerLabelTextStyle: PropTypes.string,
	outlineThickness: PropTypes.number,
	pixelScalingRatio: PropTypes.number,
	outerLabelTextColor: PropTypes.string,
	textColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	tooltipTemplate: PropTypes.string,
	maxRecCount: PropTypes.number,
	dataSource: PropTypes.object,
	dataSourceType: PropTypes.string,
	dataSourceUrl: PropTypes.string,
	responseTotalRecCountKey: PropTypes.string,
	responseDataKey: PropTypes.string
}
