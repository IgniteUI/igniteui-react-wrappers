$.ig.react.propTypes.igDateEditor = {
	id: PropTypes.string.isRequired,
	value: PropTypes.instanceOf(Date),
	minValue: PropTypes.instanceOf(Date),
	maxValue: PropTypes.instanceOf(Date),
	dateDisplayFormat: PropTypes.string,
	dateInputFormat: PropTypes.string,
	dataMode: PropTypes.oneOf([
		"date",
		"displayModeText",
		"editModeText"
	]),
	displayTimeOffset: PropTypes.object,
	buttonType: PropTypes.oneOf([
		"clear",
		"spin"
	]),
	spinDelta: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.object
	]),
	limitSpinToCurrentField: PropTypes.bool,
	enableUTCDates: PropTypes.bool,
	centuryThreshold: PropTypes.number,
	yearShift: PropTypes.number,
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
