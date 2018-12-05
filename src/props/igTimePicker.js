$.ig.react.propTypes.shapes.igTimePickerItemsDelta = {
	hours: PropTypes.number,
	minutes: PropTypes.number
}

$.ig.react.propTypes.igTimePicker = {
	id: PropTypes.string.isRequired,
	itemsDelta: PropTypes.shape(
		$.ig.react.propTypes.shapes.igTimePickerItemsDelta
	),
	spinDelta: PropTypes.any,
	timeInputFormat: PropTypes.string,
	timeDisplayFormat: PropTypes.string,
	isLimitedToListValues: PropTypes.bool,
	suppressKeyboard: PropTypes.bool,
	dropDownOrientation: PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	visibleItemsCount: PropTypes.number,
	listWidth: PropTypes.number,
	listItemHoverDuration: PropTypes.number,
	dropDownAttachedToBody: PropTypes.bool,
	dropDownAnimationDuration: PropTypes.number,
	buttonType: PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	spinWrapAround: PropTypes.bool,
	value: PropTypes.instanceOf(Date),
	minValue: PropTypes.instanceOf(Date),
	maxValue: PropTypes.instanceOf(Date),
	dataMode: PropTypes.oneOf([
		"date",
		"displayModeText",
		"editModeText"
	]),
	limitSpinToCurrentField: PropTypes.bool,
	enableUTCDates: PropTypes.bool,
	centuryThreshold: PropTypes.number,
	nullValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.instanceOf(Date)
	]),
	includeKeys: PropTypes.string,
	excludeKeys: PropTypes.string,
	textAlign: PropTypes.oneOf([
		"left",
		"right",
		"center"
	]),
	placeHolder: PropTypes.string,
	selectionOnFocus: PropTypes.oneOf([
		"selectAll",
		"atStart",
		"atEnd",
		"browserDefault"
	]),
	revertIfNotValid: PropTypes.bool,
	preventSubmitOnEnter: PropTypes.bool,
	suppressNotifications: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	tabIndex: PropTypes.number,
	allowNullValue: PropTypes.bool,
	inputName: PropTypes.string,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	validatorOptions: PropTypes.object
}
