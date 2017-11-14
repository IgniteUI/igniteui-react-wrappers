$.ig.react.propTypes.igNumericEditor = {
	id: React.PropTypes.string.isRequired,
	listItems: React.PropTypes.array,
	negativeSign: React.PropTypes.string,
	negativePattern: React.PropTypes.string,
	decimalSeparator: React.PropTypes.string,
	groupSeparator: React.PropTypes.string,
	groups: React.PropTypes.array,
	maxDecimals: React.PropTypes.number,
	minDecimals: React.PropTypes.number,
	roundDecimals: React.PropTypes.bool,
	textAlign: React.PropTypes.oneOf([
		"left",
		"right",
		"center"
	]),
	dataMode: React.PropTypes.oneOf([
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
	minValue: React.PropTypes.number,
	maxValue: React.PropTypes.number,
	allowNullValue: React.PropTypes.bool,
	spinDelta: React.PropTypes.number,
	scientificFormat: React.PropTypes.oneOf([
		"E",
		"e",
		"E+",
		"e+"
	]),
	spinWrapAround: React.PropTypes.bool,
	isLimitedToListValues: React.PropTypes.bool,
	value: React.PropTypes.number,
	buttonType: React.PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	listWidth: React.PropTypes.number,
	listItemHoverDuration: React.PropTypes.number,
	dropDownAttachedToBody: React.PropTypes.bool,
	dropDownAnimationDuration: React.PropTypes.number,
	visibleItemsCount: React.PropTypes.number,
	placeHolder: React.PropTypes.string,
	selectionOnFocus: React.PropTypes.oneOf([
		"selectAll",
		"atStart",
		"atEnd",
		"browserDefault"
	]),
	revertIfNotValid: React.PropTypes.bool,
	preventSubmitOnEnter: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	dropDownOnReadOnly: React.PropTypes.bool,
	suppressNotifications: React.PropTypes.bool,
	suppressKeyboard: React.PropTypes.bool,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	tabIndex: React.PropTypes.number,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}
