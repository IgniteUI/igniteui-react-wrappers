$.ig.react.propTypes.igBaseEditor = {
	id: PropTypes.string.isRequired,
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
