$.ig.react.propTypes.shapes.igSplitButtonItem = {
	name: React.PropTypes.string,
	label: React.PropTypes.string,
	iconClass: React.PropTypes.string
}

$.ig.react.propTypes.igSplitButton = {
	id: React.PropTypes.string.isRequired,
	items: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igSplitButtonItem)
	),
	defaultItemName: React.PropTypes.string,
	swapDefaultEnabled: React.PropTypes.bool
}
