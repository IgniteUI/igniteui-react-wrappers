$.ig.react.propTypes.shapes.igTreeBindingsBindings = {
}

$.ig.react.propTypes.shapes.igTreeBindings = {
	textKey: React.PropTypes.string,
	textXPath: React.PropTypes.string,
	valueKey: React.PropTypes.string,
	valueXPath: React.PropTypes.string,
	imageUrlKey: React.PropTypes.string,
	imageUrlXPath: React.PropTypes.string,
	navigateUrlKey: React.PropTypes.string,
	navigateUrlXPath: React.PropTypes.string,
	targetKey: React.PropTypes.string,
	expandedKey: React.PropTypes.string,
	primaryKey: React.PropTypes.string,
	nodeContentTemplate: React.PropTypes.string,
	childDataProperty: React.PropTypes.string,
	childDataXPath: React.PropTypes.string,
	searchFieldXPath: React.PropTypes.string,
	bindings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgTreeBindingsBindings
	)
}

$.ig.react.propTypes.shapes.igTreeDragAndDropSettings = {
	allowDrop: React.PropTypes.bool,
	dragAndDropMode: React.PropTypes.oneOf([
		"default",
		"copy",
		"move"
	]),
	dragOpacity: React.PropTypes.number,
	revert: React.PropTypes.bool,
	revertDuration: React.PropTypes.number,
	zIndex: React.PropTypes.number,
	dragStartDelay: React.PropTypes.number,
	expandOnDragOver: React.PropTypes.bool,
	expandDelay: React.PropTypes.number,
	helper: React.PropTypes.oneOf([
		"function",
		"default"
	]),
	customDropValidation: React.PropTypes.oneOfType([
		React.PropTypes.func
	]),
	containment: React.PropTypes.oneOfType([
		React.PropTypes.bool,
		React.PropTypes.string,
		React.PropTypes.array
	]),
	invalidMoveToMarkup: React.PropTypes.string,
	moveToMarkup: React.PropTypes.string,
	moveBetweenMarkup: React.PropTypes.string,
	moveAfterMarkup: React.PropTypes.string,
	moveBeforeMarkup: React.PropTypes.string,
	copyToMarkup: React.PropTypes.string,
	copyBetweenMarkup: React.PropTypes.string,
	copyAfterMarkup: React.PropTypes.string,
	copyBeforeMarkup: React.PropTypes.string
}

$.ig.react.propTypes.igTree = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	checkboxMode: React.PropTypes.oneOf([
		"off",
		"biState",
		"triState"
	]),
	singleBranchExpand: React.PropTypes.bool,
	hotTracking: React.PropTypes.bool,
	parentNodeImageUrl: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	parentNodeImageClass: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	parentNodeImageTooltip: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	leafNodeImageUrl: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	leafNodeImageClass: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	leafNodeImageTooltip: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	animationDuration: React.PropTypes.number,
	pathSeparator: React.PropTypes.string,
	dataSource: React.PropTypes.object,
	dataSourceUrl: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	dataSourceType: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	responseDataKey: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	responseDataType: React.PropTypes.oneOfType([
		React.PropTypes.string
	]),
	requestType: React.PropTypes.string,
	responseContentType: React.PropTypes.string,
	initialExpandDepth: React.PropTypes.number,
	loadOnDemand: React.PropTypes.bool,
	bindings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgTreeBindings
	),
	defaultNodeTarget: React.PropTypes.string,
	dragAndDrop: React.PropTypes.bool,
	updateUrl: React.PropTypes.string,
	dragAndDropSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.IgTreeDragAndDropSettings
	)
}
