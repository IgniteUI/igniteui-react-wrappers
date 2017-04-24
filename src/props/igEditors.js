$.ig.react.propTypes.igBaseEditor = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	value: React.PropTypes.string,
	tabIndex: React.PropTypes.number,
	allowNullValue: React.PropTypes.bool,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}

$.ig.react.propTypes.igTextEditor = {
	id: React.PropTypes.string.isRequired,
	buttonType: React.PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	listItems: React.PropTypes.array,
	listWidth: React.PropTypes.number,
	listItemHoverDuration: React.PropTypes.number,
	dropDownAttachedToBody: React.PropTypes.bool,
	dropDownAnimationDuration: React.PropTypes.number,
	visibleItemsCount: React.PropTypes.number,
	includeKeys: React.PropTypes.string,
	excludeKeys: React.PropTypes.string,
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
	textMode: React.PropTypes.oneOf([
		"text",
		"password",
		"multiline"
	]),
	spinWrapAround: React.PropTypes.bool,
	isLimitedToListValues: React.PropTypes.bool,
	revertIfNotValid: React.PropTypes.bool,
	preventSubmitOnEnter: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	maxLength: React.PropTypes.number,
	dropDownOnReadOnly: React.PropTypes.bool,
	toUpper: React.PropTypes.bool,
	toLower: React.PropTypes.bool,
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
	value: React.PropTypes.string,
	tabIndex: React.PropTypes.number,
	allowNullValue: React.PropTypes.bool,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}

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

$.ig.react.propTypes.igCurrencyEditor = {
	id: React.PropTypes.string.isRequired,
	positivePattern: React.PropTypes.string,
	currencySymbol: React.PropTypes.string,
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
	value: React.PropTypes.string,
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

$.ig.react.propTypes.igPercentEditor = {
	id: React.PropTypes.string.isRequired,
	positivePattern: React.PropTypes.string,
	percentSymbol: React.PropTypes.string,
	displayFactor: React.PropTypes.number,
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
	spinDelta: React.PropTypes.number,
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
	minValue: React.PropTypes.number,
	maxValue: React.PropTypes.number,
	allowNullValue: React.PropTypes.bool,
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
	value: React.PropTypes.string,
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

$.ig.react.propTypes.igMaskEditor = {
	id: React.PropTypes.string.isRequired,
	regional: React.PropTypes.object,
	buttonType: React.PropTypes.string,
	inputMask: React.PropTypes.string,
	dataMode: React.PropTypes.oneOf([
		"rawText",
		"rawTextWithRequiredPrompts",
		"rawTextWithAllPrompts",
		"rawTextWithLiterals",
		"rawTextWithRequiredPromptsAndLiterals",
		"allText"
	]),
	unfilledCharsPrompt: React.PropTypes.string,
	padChar: React.PropTypes.string,
	emptyChar: React.PropTypes.string,
	includeKeys: React.PropTypes.string,
	excludeKeys: React.PropTypes.string,
	spinWrapAround: React.PropTypes.bool,
	listItems: React.PropTypes.array,
	listWidth: React.PropTypes.number,
	listItemHoverDuration: React.PropTypes.number,
	isLimitedToListValues: React.PropTypes.bool,
	dropDownOrientation: React.PropTypes.string,
	dropDownAttachedToBody: React.PropTypes.bool,
	dropDownAnimationDuration: React.PropTypes.number,
	dropDownOnReadOnly: React.PropTypes.bool,
	textMode: React.PropTypes.any,
	visibleItemsCount: React.PropTypes.number,
	maxLength: React.PropTypes.object,
	value: React.PropTypes.string,
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
	toUpper: React.PropTypes.bool,
	toLower: React.PropTypes.bool,
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
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	inputName: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}

$.ig.react.propTypes.igDateEditor = {
	id: React.PropTypes.string.isRequired,
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
	buttonType: React.PropTypes.oneOf([
		"clear",
		"spin"
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
	isLimitedToListValues: React.PropTypes.bool,
	listItemHoverDuration: React.PropTypes.number,
	listItems: React.PropTypes.object,
	listWidth: React.PropTypes.number,
	dropDownAnimationDuration: React.PropTypes.number,
	dropDownAttachedToBody: React.PropTypes.bool,
	dropDownOnReadOnly: React.PropTypes.bool,
	inputMask: React.PropTypes.string,
	unfilledCharsPrompt: React.PropTypes.string,
	padChar: React.PropTypes.string,
	emptyChar: React.PropTypes.string,
	toUpper: React.PropTypes.bool,
	toLower: React.PropTypes.bool,
	regional: React.PropTypes.object,
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

$.ig.react.propTypes.igCheckboxEditor = {
	id: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool,
	size: React.PropTypes.oneOf([
		"verysmall",
		"small",
		"normal",
		"large"
	]),
	iconClass: React.PropTypes.string,
	tabIndex: React.PropTypes.number,
	readOnly: React.PropTypes.bool,
	allowNullValue: React.PropTypes.bool,
	nullValue: React.PropTypes.object,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	value: React.PropTypes.bool,
	inputName: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}
