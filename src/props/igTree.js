$.ig.react.propTypes.shapes.igTreeBindingsBindings = {
}

$.ig.react.propTypes.shapes.igTreeBindings = {
	textKey: PropTypes.string,
	textXPath: PropTypes.string,
	valueKey: PropTypes.string,
	valueXPath: PropTypes.string,
	imageUrlKey: PropTypes.string,
	imageUrlXPath: PropTypes.string,
	navigateUrlKey: PropTypes.string,
	navigateUrlXPath: PropTypes.string,
	targetKey: PropTypes.string,
	expandedKey: PropTypes.string,
	checkedKey: PropTypes.string,
	primaryKey: PropTypes.string,
	nodeContentTemplate: PropTypes.string,
	childDataProperty: PropTypes.string,
	childDataXPath: PropTypes.string,
	searchFieldXPath: PropTypes.string,
	bindings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTreeBindingsBindings
	)
}

$.ig.react.propTypes.shapes.igTreeDragAndDropSettings = {
	allowDrop: PropTypes.bool,
	dragAndDropMode: PropTypes.oneOf([
		"default",
		"copy",
		"move"
	]),
	dragOpacity: PropTypes.number,
	revert: PropTypes.bool,
	revertDuration: PropTypes.number,
	zIndex: PropTypes.number,
	dragStartDelay: PropTypes.number,
	expandOnDragOver: PropTypes.bool,
	expandDelay: PropTypes.number,
	helper: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string
	]),
	customDropValidation: PropTypes.oneOfType([
		PropTypes.func
	]),
	containment: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array
	]),
	invalidMoveToMarkup: PropTypes.string,
	moveToMarkup: PropTypes.string,
	moveBetweenMarkup: PropTypes.string,
	moveAfterMarkup: PropTypes.string,
	moveBeforeMarkup: PropTypes.string,
	copyToMarkup: PropTypes.string,
	copyBetweenMarkup: PropTypes.string,
	copyAfterMarkup: PropTypes.string,
	copyBeforeMarkup: PropTypes.string
}

$.ig.react.propTypes.igTree = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	checkboxMode: PropTypes.oneOf([
		"off",
		"biState",
		"triState"
	]),
	singleBranchExpand: PropTypes.bool,
	hotTracking: PropTypes.bool,
	parentNodeImageUrl: PropTypes.oneOfType([
		PropTypes.string
	]),
	parentNodeImageClass: PropTypes.oneOfType([
		PropTypes.string
	]),
	parentNodeImageTooltip: PropTypes.oneOfType([
		PropTypes.string
	]),
	leafNodeImageUrl: PropTypes.oneOfType([
		PropTypes.string
	]),
	leafNodeImageClass: PropTypes.oneOfType([
		PropTypes.string
	]),
	leafNodeImageTooltip: PropTypes.oneOfType([
		PropTypes.string
	]),
	animationDuration: PropTypes.number,
	pathSeparator: PropTypes.string,
	dataSource: PropTypes.object,
	dataSourceUrl: PropTypes.oneOfType([
		PropTypes.string
	]),
	dataSourceType: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataKey: PropTypes.oneOfType([
		PropTypes.string
	]),
	responseDataType: PropTypes.oneOfType([
		PropTypes.string
	]),
	requestType: PropTypes.string,
	responseContentType: PropTypes.string,
	initialExpandDepth: PropTypes.number,
	loadOnDemand: PropTypes.bool,
	bindings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTreeBindings
	),
	defaultNodeTarget: PropTypes.string,
	dragAndDrop: PropTypes.bool,
	updateUrl: PropTypes.string,
	dragAndDropSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTreeDragAndDropSettings
	)
}
