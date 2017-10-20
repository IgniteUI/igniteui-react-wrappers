$.ig.react.propTypes.igFunnelChart = {
	id: React.PropTypes.string.isRequired,
	bezierPoints: React.PropTypes.string,
	legend: React.PropTypes.object,
	valueMemberPath: React.PropTypes.string,
	brushes: React.PropTypes.object,
	outlines: React.PropTypes.object,
	bottomEdgeWidth: React.PropTypes.number,
	innerLabelMemberPath: React.PropTypes.string,
	outerLabelMemberPath: React.PropTypes.string,
	innerLabelVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	outerLabelVisibility: React.PropTypes.oneOf([
		"visible",
		"collapsed"
	]),
	outerLabelAlignment: React.PropTypes.oneOf([
		"left",
		"right"
	]),
	funnelSliceDisplay: React.PropTypes.oneOf([
		"uniform",
		"weighted"
	]),
	formatInnerLabel: React.PropTypes.object,
	formatOuterLabel: React.PropTypes.object,
	transitionDuration: React.PropTypes.number,
	isInverted: React.PropTypes.bool,
	useBezierCurve: React.PropTypes.bool,
	allowSliceSelection: React.PropTypes.bool,
	useUnselectedStyle: React.PropTypes.bool,
	selectedSliceStyle: React.PropTypes.object,
	unselectedSliceStyle: React.PropTypes.object,
	legendItemBadgeTemplate: React.PropTypes.object,
	useOuterLabelsForLegend: React.PropTypes.bool,
	textStyle: React.PropTypes.string,
	outerLabelTextStyle: React.PropTypes.string,
	outlineThickness: React.PropTypes.number,
	pixelScalingRatio: React.PropTypes.number,
	outerLabelTextColor: React.PropTypes.string,
	textColor: React.PropTypes.string,
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
