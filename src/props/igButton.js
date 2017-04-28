$.ig.react.propTypes.shapes.igButtonLink = {
	href: React.PropTypes.object,
	target: React.PropTypes.object,
	title: React.PropTypes.object
}

$.ig.react.propTypes.shapes.igButtonIcons = {
	primary: React.PropTypes.object,
	secondary: React.PropTypes.object
}

$.ig.react.propTypes.igButton = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.object,
	height: React.PropTypes.object,
	link: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgButtonLink
	),
	labelText: React.PropTypes.string,
	centerLabel: React.PropTypes.bool,
	css: React.PropTypes.object,
	onlyIcons: React.PropTypes.bool,
	icons: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgButtonIcons
	),
	title: React.PropTypes.bool
}
