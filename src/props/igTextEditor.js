$.ig.react.propTypes.igTextEditor = {
	id: PropTypes.string.isRequired,
	buttonType: PropTypes.oneOf([
		"dropdown",
		"clear",
		"spin"
	]),
	listItems: PropTypes.array,
	listWidth: PropTypes.number,
	listItemHoverDuration: PropTypes.number,
	dropDownAttachedToBody: PropTypes.bool,
	dropDownAnimationDuration: PropTypes.number,
	visibleItemsCount: PropTypes.number,
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
	textMode: PropTypes.oneOf([
		"text",
		"password",
		"multiline"
	]),
	spinWrapAround: PropTypes.bool,
	isLimitedToListValues: PropTypes.bool,
	revertIfNotValid: PropTypes.bool,
	preventSubmitOnEnter: PropTypes.bool,
	dropDownOrientation: PropTypes.oneOf([
		"auto",
		"bottom",
		"top"
	]),
	maxLength: PropTypes.number,
	dropDownOnReadOnly: PropTypes.bool,
	toUpper: PropTypes.bool,
	toLower: PropTypes.bool,
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
	value: PropTypes.object,
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
