$.ig.react.propTypes.shapes.igComboLocale = {
	noMatchFoundText: PropTypes.object,
	dropDownButtonTitle: PropTypes.object,
	clearButtonTitle: PropTypes.object,
	placeHolder: PropTypes.object
}

$.ig.react.propTypes.shapes.igComboLoadOnDemandSettings = {
	enabled: PropTypes.bool,
	pageSize: PropTypes.number
}

$.ig.react.propTypes.shapes.igComboMultiSelection = {
	enabled: PropTypes.bool,
	addWithKeyModifier: PropTypes.bool,
	showCheckboxes: PropTypes.bool,
	itemSeparator: PropTypes.string
}

$.ig.react.propTypes.shapes.igComboGrouping = {
	key: PropTypes.string,
	dir: PropTypes.oneOf([
		"asc",
		"desc"
	])
}

$.ig.react.propTypes.shapes.igComboInitialSelectedItem = {
	index: PropTypes.number,
	value: PropTypes.object
}

$.ig.react.propTypes.igCombo = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	dropDownWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	dataSource: PropTypes.object,
	dataSourceType: PropTypes.string,
	dataSourceUrl: PropTypes.string,
	responseTotalRecCountKey: PropTypes.string,
	responseDataKey: PropTypes.string,
	responseDataType: PropTypes.oneOf([
		"json",
		"xml",
		"html",
		"script",
		"jsonp",
		"text"
	]),
	responseContentType: PropTypes.string,
	requestType: PropTypes.string,
	valueKey: PropTypes.string,
	textKey: PropTypes.string,
	itemTemplate: PropTypes.string,
	headerTemplate: PropTypes.string,
	footerTemplate: PropTypes.string,
	inputName: PropTypes.string,
	animationShowDuration: PropTypes.number,
	animationHideDuration: PropTypes.number,
	dropDownAttachedToBody: PropTypes.bool,
	filteringType: PropTypes.oneOf([
		"remote",
		"local",
		"none"
	]),
	filterExprUrlKey: PropTypes.string,
	filteringCondition: PropTypes.oneOf([
		"contains",
		"doesNotContain",
		"startsWith",
		"endsWith",
		"greaterThan",
		"lessThan",
		"greaterThanOrEqualTo",
		"lessThanOrEqualTo",
		"equals",
		"doesNotEqual"
	]),
	filteringLogic: PropTypes.oneOf([
		"OR",
		"AND"
	]),
	noMatchFoundText: PropTypes.string,
	dropDownButtonTitle: PropTypes.string,
	clearButtonTitle: PropTypes.string,
	placeHolder: PropTypes.string,
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboLocale
	),
	loadOnDemandSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboLoadOnDemandSettings
	),
	visibleItemsCount: PropTypes.number,
	mode: PropTypes.oneOf([
		"editable",
		"dropdown",
		"readonlylist",
		"readonly"
	]),
	virtualization: PropTypes.bool,
	multiSelection: PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboMultiSelection
	),
	grouping: PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboGrouping
	),
	validatorOptions: PropTypes.object,
	highlightMatchesMode: PropTypes.oneOf([
		"multi",
		"contains",
		"startsWith",
		"full"
	]),
	caseSensitive: PropTypes.bool,
	autoSelectFirstMatch: PropTypes.bool,
	autoComplete: PropTypes.bool,
	allowCustomValue: PropTypes.bool,
	closeDropDownOnBlur: PropTypes.bool,
	delayInputChangeProcessing: PropTypes.number,
	tabIndex: PropTypes.number,
	dropDownOnFocus: PropTypes.bool,
	closeDropDownOnSelect: PropTypes.bool,
	selectItemBySpaceKey: PropTypes.bool,
	initialSelectedItems: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igComboInitialSelectedItem)
	),
	preventSubmitOnEnter: PropTypes.bool,
	format: PropTypes.string,
	suppressKeyboard: PropTypes.bool,
	enableClearButton: PropTypes.bool,
	dropDownOrientation: PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	])
}
