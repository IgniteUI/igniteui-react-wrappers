$.ig.react.propTypes.shapes.igValidatorField = {
	selector: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	])
}

$.ig.react.propTypes.igValidator = {
	id: PropTypes.string.isRequired,
	onchange: PropTypes.bool,
	onblur: PropTypes.bool,
	onsubmit: PropTypes.bool,
	required: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	number: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	date: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	email: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	lengthRange: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
	valueRange: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
	creditCard: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	pattern: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	executeAllRules: PropTypes.bool,
	messageTarget: PropTypes.element,
	errorMessage: PropTypes.string,
	successMessage: PropTypes.string,
	threshold: PropTypes.number,
	equalTo: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	custom: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string,
		PropTypes.object
	]),
	fields: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igValidatorField)
	),
	notificationOptions: PropTypes.object,
	requiredIndication: PropTypes.bool,
	optionalIndication: PropTypes.bool
}
