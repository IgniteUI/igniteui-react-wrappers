$.ig.react.propTypes.shapes.igTimePickerItemsDelta = {
	hours: React.PropTypes.number,
	minutes: React.PropTypes.number
}

$.ig.react.propTypes.igTimePicker = {
	id: React.PropTypes.string.isRequired,
	itemsDelta: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igTimePickerItemsDelta
	),
	spinDelta: React.PropTypes.any,
	timeInputFormat: React.PropTypes.string,
	timeDisplayFormat: React.PropTypes.string,
	isLimitedToListValues: React.PropTypes.bool,
	suppressKeyboard: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	visibleItemsCount: React.PropTypes.number,
	listWidth: React.PropTypes.number,
	listItemHoverDuration: React.PropTypes.number,
	dropDownAttachedToBody: React.PropTypes.bool,
	dropDownAnimationDuration: React.PropTypes.number,
	buttonType: React.PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	spinWrapAround: React.PropTypes.bool,
	dateDisplayFormat: React.PropTypes.object,
	dateInputFormat: React.PropTypes.object,
	yearShift: React.PropTypes.object,
	displayTimeOffset: React.PropTypes.object,
	value: React.PropTypes.instanceOf(Date),
	minValue: React.PropTypes.instanceOf(Date),
	maxValue: React.PropTypes.instanceOf(Date),
	dataMode: React.PropTypes.oneOf([
		"date",
		"displayModeText",
		"editModeText"
	]),
	limitSpinToCurrentField: React.PropTypes.bool,
	enableUTCDates: React.PropTypes.bool,
	centuryThreshold: React.PropTypes.number,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.instanceOf(Date)
	]),
	listItems: React.PropTypes.object,
	dropDownOnReadOnly: React.PropTypes.bool,
	inputMask: React.PropTypes.string,
	unfilledCharsPrompt: React.PropTypes.string,
	padChar: React.PropTypes.string,
	emptyChar: React.PropTypes.string,
	toUpper: React.PropTypes.bool,
	toLower: React.PropTypes.bool,
	includeKeys: React.PropTypes.string,
	excludeKeys: React.PropTypes.string,
	textMode: React.PropTypes.any,
	maxLength: React.PropTypes.object,
	textAlign: React.PropTypes.oneOf([
		"left",
		"right",
		"center"
	]),
	placeHolder: React.PropTypes.string,
	selectionOnFocus: React.PropTypes.oneOf([
		"selectAll",
		"atStart",
		"atEnd",
		"browserDefault"
	]),
	revertIfNotValid: React.PropTypes.bool,
	preventSubmitOnEnter: React.PropTypes.bool,
	suppressNotifications: React.PropTypes.bool,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	tabIndex: React.PropTypes.number,
	allowNullValue: React.PropTypes.bool,
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}
