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
	value: React.PropTypes.object,
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
