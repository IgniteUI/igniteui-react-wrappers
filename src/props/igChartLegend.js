$.ig.react.propTypes.igChartLegend = {
	id: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf([
		"item",
		"legend",
		"scale"
	]),
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	theme: React.PropTypes.string
}

