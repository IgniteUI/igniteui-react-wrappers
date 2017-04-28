$.ig.react.propTypes.igDatePicker = {
	id: React.PropTypes.string.isRequired,
	regional: React.PropTypes.object,
	buttonType: React.PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	datepickerOptions: React.PropTypes.object,
	dropDownOnReadOnly: React.PropTypes.bool,
	dropDownAttachedToBody: React.PropTypes.bool,
	isLimitedToListValues: React.PropTypes.bool,
	listItemHoverDuration: React.PropTypes.number,
	listItems: React.PropTypes.object,
	listWidth: React.PropTypes.number,
	value: React.PropTypes.instanceOf(Date),
	minValue: React.PropTypes.instanceOf(Date),
	maxValue: React.PropTypes.instanceOf(Date),
	dateDisplayFormat: React.PropTypes.string,
	dateInputFormat: React.PropTypes.string,
	dataMode: React.PropTypes.oneOf([
		"date",
		"displayModeText",
		"editModeText"
	]),
	spinDelta: React.PropTypes.number,
	limitSpinToCurrentField: React.PropTypes.bool,
	enableUTCDates: React.PropTypes.bool,
	centuryThreshold: React.PropTypes.number,
	yearShift: React.PropTypes.number,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	dropDownAnimationDuration: React.PropTypes.number,
	inputMask: React.PropTypes.string,
	unfilledCharsPrompt: React.PropTypes.string,
	padChar: React.PropTypes.string,
	emptyChar: React.PropTypes.string,
	toUpper: React.PropTypes.bool,
	toLower: React.PropTypes.bool,
	includeKeys: React.PropTypes.string,
	excludeKeys: React.PropTypes.string,
	spinWrapAround: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.string,
	textMode: React.PropTypes.any,
	visibleItemsCount: React.PropTypes.number,
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
	locale: React.PropTypes.object,
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
