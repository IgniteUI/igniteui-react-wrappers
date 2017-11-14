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
	displayTimeOffset: React.PropTypes.object,
	buttonType: React.PropTypes.oneOf([
		"clear",
		"spin"
	]),
	spinDelta: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.object
	]),
	limitSpinToCurrentField: React.PropTypes.bool,
	enableUTCDates: React.PropTypes.bool,
	centuryThreshold: React.PropTypes.number,
	yearShift: React.PropTypes.number,
	nullValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.instanceOf(Date)
	]),
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
	revertIfNotValid: React.PropTypes.bool,
	preventSubmitOnEnter: React.PropTypes.bool,
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
