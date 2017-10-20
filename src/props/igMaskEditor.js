$.ig.react.propTypes.igMaskEditor = {
	id: React.PropTypes.string.isRequired,
	buttonType: React.PropTypes.oneOf([
		"clear"
	]),
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
	suppressKeyboard: React.PropTypes.bool,
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
