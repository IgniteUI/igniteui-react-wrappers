$.ig.react.propTypes.igChartLegend = {
	id: PropTypes.string.isRequired,
	type: PropTypes.oneOf([
		"item",
		"legend"
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}
