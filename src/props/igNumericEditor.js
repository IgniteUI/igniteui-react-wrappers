$.ig.react.propTypes.igNumericEditor = {
	id: React.PropTypes.string.isRequired,
	listItems: React.PropTypes.array,
	regional: React.PropTypes.object,
	negativeSign: React.PropTypes.string,
	negativePattern: React.PropTypes.string,
	decimalSeparator: React.PropTypes.string,
	groupSeparator: React.PropTypes.string,
	groups: React.PropTypes.array,
	maxDecimals: React.PropTypes.number,
	minDecimals: React.PropTypes.number,
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
		"null",
		"E",
		"e",
		"E+",
		"e+"
	]),
	spinWrapAround: React.PropTypes.bool,
	maxLength: React.PropTypes.object,
	excludeKeys: React.PropTypes.object,
	includeKeys: React.PropTypes.object,
	toLower: React.PropTypes.object,
	toUpper: React.PropTypes.object,
	textMode: React.PropTypes.any,
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
	isLimitedToListValues: React.PropTypes.bool,
	revertIfNotValid: React.PropTypes.bool,
	preventSubmitOnEnter: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	dropDownOnReadOnly: React.PropTypes.bool,
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
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}
