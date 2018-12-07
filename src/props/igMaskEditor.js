$.ig.react.propTypes.igMaskEditor = {
	id: PropTypes.string.isRequired,
	buttonType: PropTypes.oneOf([
		"clear"
	]),
	inputMask: PropTypes.string,
	dataMode: PropTypes.oneOf([
		"rawText",
		"rawTextWithRequiredPrompts",
		"rawTextWithAllPrompts",
		"rawTextWithLiterals",
		"rawTextWithRequiredPromptsAndLiterals",
		"allText"
	]),
	unfilledCharsPrompt: PropTypes.string,
	padChar: PropTypes.string,
	emptyChar: PropTypes.string,
	includeKeys: PropTypes.string,
	excludeKeys: PropTypes.string,
	value: PropTypes.object,
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
	toUpper: PropTypes.bool,
	toLower: PropTypes.bool,
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
	nullValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	inputName: PropTypes.string,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	validatorOptions: PropTypes.object
}
