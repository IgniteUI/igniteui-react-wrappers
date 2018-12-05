$.ig.react.propTypes.shapes.igButtonLink = {
	href: PropTypes.object,
	target: PropTypes.object,
	title: PropTypes.object
}

$.ig.react.propTypes.shapes.igButtonIcons = {
	primary: PropTypes.object,
	secondary: PropTypes.object
}

$.ig.react.propTypes.igButton = {
	id: PropTypes.string.isRequired,
	width: PropTypes.object,
	height: PropTypes.object,
	link: PropTypes.shape(
		$.ig.react.propTypes.shapes.igButtonLink
	),
	labelText: PropTypes.string,
	centerLabel: PropTypes.bool,
	css: PropTypes.object,
	onlyIcons: PropTypes.bool,
	icons: PropTypes.shape(
		$.ig.react.propTypes.shapes.igButtonIcons
	),
	title: PropTypes.bool
}
