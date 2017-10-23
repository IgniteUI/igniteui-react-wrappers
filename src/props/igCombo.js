$.ig.react.propTypes.shapes.igComboLocale = {
	noMatchFoundText: React.PropTypes.object,
	dropDownButtonTitle: React.PropTypes.object,
	clearButtonTitle: React.PropTypes.object,
	placeHolder: React.PropTypes.object
}

$.ig.react.propTypes.shapes.igComboLoadOnDemandSettings = {
	enabled: React.PropTypes.bool,
	pageSize: React.PropTypes.number
}

$.ig.react.propTypes.shapes.igComboMultiSelection = {
	enabled: React.PropTypes.bool,
	addWithKeyModifier: React.PropTypes.bool,
	showCheckboxes: React.PropTypes.bool,
	itemSeparator: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igComboGrouping = {
	key: React.PropTypes.string,
	dir: React.PropTypes.oneOf([
		"asc",
		"desc"
	])
}

$.ig.react.propTypes.shapes.igComboInitialSelectedItem = {
	index: React.PropTypes.number,
	value: React.PropTypes.object
}

$.ig.react.propTypes.igCombo = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	dropDownWidth: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	dataSource: React.PropTypes.object,
	dataSourceType: React.PropTypes.string,
	dataSourceUrl: React.PropTypes.string,
	responseTotalRecCountKey: React.PropTypes.string,
	responseDataKey: React.PropTypes.string,
	responseDataType: React.PropTypes.oneOf([
		"json",
		"xml",
		"html",
		"script",
		"jsonp",
		"text"
	]),
	responseContentType: React.PropTypes.string,
	requestType: React.PropTypes.string,
	valueKey: React.PropTypes.string,
	textKey: React.PropTypes.string,
	itemTemplate: React.PropTypes.string,
	headerTemplate: React.PropTypes.string,
	footerTemplate: React.PropTypes.string,
	inputName: React.PropTypes.string,
	animationShowDuration: React.PropTypes.number,
	animationHideDuration: React.PropTypes.number,
	dropDownAttachedToBody: React.PropTypes.bool,
	filteringType: React.PropTypes.oneOf([
		"remote",
		"local",
		"none"
	]),
	filterExprUrlKey: React.PropTypes.string,
	filteringCondition: React.PropTypes.oneOf([
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
	filteringLogic: React.PropTypes.oneOf([
		"OR",
		"AND"
	]),
	noMatchFoundText: React.PropTypes.string,
	dropDownButtonTitle: React.PropTypes.string,
	clearButtonTitle: React.PropTypes.string,
	placeHolder: React.PropTypes.string,
	locale: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboLocale
	),
	loadOnDemandSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboLoadOnDemandSettings
	),
	visibleItemsCount: React.PropTypes.number,
	mode: React.PropTypes.oneOf([
		"editable",
		"dropdown",
		"readonlylist",
		"readonly"
	]),
	virtualization: React.PropTypes.bool,
	multiSelection: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboMultiSelection
	),
	grouping: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igComboGrouping
	),
	validatorOptions: React.PropTypes.object,
	highlightMatchesMode: React.PropTypes.oneOf([
		"multi",
		"contains",
		"startsWith",
		"full"
	]),
	caseSensitive: React.PropTypes.bool,
	autoSelectFirstMatch: React.PropTypes.bool,
	autoComplete: React.PropTypes.bool,
	allowCustomValue: React.PropTypes.bool,
	closeDropDownOnBlur: React.PropTypes.bool,
	delayInputChangeProcessing: React.PropTypes.number,
	tabIndex: React.PropTypes.number,
	dropDownOnFocus: React.PropTypes.bool,
	closeDropDownOnSelect: React.PropTypes.bool,
	selectItemBySpaceKey: React.PropTypes.bool,
	initialSelectedItems: React.PropTypes.arrayOf(
		React.PropTypes.shape($.ig.react.propTypes.shapes.igComboInitialSelectedItem)
	),
	preventSubmitOnEnter: React.PropTypes.bool,
	format: React.PropTypes.string,
	suppressKeyboard: React.PropTypes.bool,
	enableClearButton: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	])
}
