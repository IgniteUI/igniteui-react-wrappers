$.ig.react.propTypes.igPieChart = {
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
	dataSourceUrl: PropTypes.string,
	dataSourceType: PropTypes.string,
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataType: PropTypes.oneOfType([
		PropTypes.string
	])
}
