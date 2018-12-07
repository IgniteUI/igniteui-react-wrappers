$.ig.react.propTypes.shapes.igSplitButtonItem = {
	name: PropTypes.string,
	label: PropTypes.string,
	iconClass: PropTypes.string
}

$.ig.react.propTypes.igSplitButton = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igSplitButtonItem)
	),
	defaultItemName: PropTypes.string,
	swapDefaultEnabled: PropTypes.bool
}
