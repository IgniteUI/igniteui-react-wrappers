$.ig.react.propTypes.shapes.igToolbarLocale = {
	collapseButtonTitle: React.PropTypes.object,
	expandButtonTitle: React.PropTypes.object
}

$.ig.react.propTypes.igToolbar = {
	id: React.PropTypes.string.isRequired,
	height: React.PropTypes.object,
	width: React.PropTypes.object,
	allowCollapsing: React.PropTypes.bool,
	collapseButtonIcon: React.PropTypes.string,
	expandButtonIcon: React.PropTypes.string,
	name: React.PropTypes.string,
	displayName: React.PropTypes.string,
	items: React.PropTypes.array,
	isExpanded: React.PropTypes.bool,
	locale: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igToolbarLocale
	)
}
