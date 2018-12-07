$.ig.react.propTypes.igCheckboxEditor = {
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	size: PropTypes.oneOf([
		"verysmall",
		"small",
		"normal",
		"large"
	]),
	iconClass: PropTypes.string,
	tabIndex: PropTypes.number,
	readOnly: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	value: PropTypes.object,
	inputName: PropTypes.string,
	disabled: PropTypes.bool,
	validatorOptions: PropTypes.object
}
