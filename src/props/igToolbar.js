$.ig.react.propTypes.shapes.igToolbarLocale = {
	collapseButtonTitle: PropTypes.object,
	expandButtonTitle: PropTypes.object
}

$.ig.react.propTypes.igToolbar = {
	id: PropTypes.string.isRequired,
	height: PropTypes.object,
	width: PropTypes.object,
	allowCollapsing: PropTypes.bool,
	collapseButtonIcon: PropTypes.string,
	expandButtonIcon: PropTypes.string,
	name: PropTypes.string,
	displayName: PropTypes.string,
	items: PropTypes.array,
	isExpanded: PropTypes.bool,
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igToolbarLocale
	)
}
