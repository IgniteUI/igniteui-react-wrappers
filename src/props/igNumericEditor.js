$.ig.react.propTypes.igNumericEditor = {
	id: PropTypes.string.isRequired,
	listItems: PropTypes.array,
	negativeSign: PropTypes.string,
	negativePattern: PropTypes.string,
	decimalSeparator: PropTypes.string,
	groupSeparator: PropTypes.string,
	groups: PropTypes.array,
	maxDecimals: PropTypes.number,
	minDecimals: PropTypes.number,
	roundDecimals: PropTypes.bool,
	textAlign: PropTypes.oneOf([
		"left",
		"right",
		"center"
	]),
	dataMode: PropTypes.oneOf([
		"double",
		"float",
		"long",
		"ulong",
		"int",
		"uint",
		"short",
		"ushort",
		"sbyte",
		"byte"
	]),
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	allowNullValue: PropTypes.bool,
	spinDelta: PropTypes.number,
	scientificFormat: PropTypes.oneOf([
		"E",
		"e",
		"E+",
		"e+"
	]),
	spinWrapAround: PropTypes.bool,
	isLimitedToListValues: PropTypes.bool,
	value: PropTypes.object,
	buttonType: PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	listWidth: PropTypes.number,
	listItemHoverDuration: PropTypes.number,
	dropDownAttachedToBody: PropTypes.bool,
	dropDownAnimationDuration: PropTypes.number,
	visibleItemsCount: PropTypes.number,
	placeHolder: PropTypes.string,
	selectionOnFocus: PropTypes.oneOf([
		"selectAll",
		"atStart",
		"atEnd",
		"browserDefault"
	]),
	revertIfNotValid: PropTypes.bool,
	preventSubmitOnEnter: PropTypes.bool,
	dropDownOrientation: PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	dropDownOnReadOnly: PropTypes.bool,
	suppressNotifications: PropTypes.bool,
	suppressKeyboard: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	tabIndex: PropTypes.number,
	nullValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	inputName: PropTypes.string,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	validatorOptions: PropTypes.object
}
