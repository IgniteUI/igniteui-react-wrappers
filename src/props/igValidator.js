(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igValidatorField = {
		selector: React.PropTypes.oneOfType([	
			React.PropTypes.string
		])
	}

	$.ig.react.propTypes.igValidator = {
		id: React.PropTypes.string.isRequired,
		onchange: React.PropTypes.bool,
		onblur: React.PropTypes.bool,
		onsubmit: React.PropTypes.bool,
		required: React.PropTypes.any,
		number: React.PropTypes.any,
		date: React.PropTypes.any,
		email: React.PropTypes.any,
		lengthRange: React.PropTypes.any,
		valueRange: React.PropTypes.any,
		creditCard: React.PropTypes.any,
		pattern: React.PropTypes.oneOfType([	
			React.PropTypes.string
		]),
		messageTarget: React.PropTypes.element,
		errorMessage: React.PropTypes.string,
		successMessage: React.PropTypes.string,
		threshold: React.PropTypes.number,
		equalTo: React.PropTypes.oneOfType([	
			React.PropTypes.string
		]),
		custom: React.PropTypes.oneOfType([	
			React.PropTypes.func,
			React.PropTypes.string
		]),
		fields: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igValidatorField)
		),
		notificationOptions: React.PropTypes.object,
		requiredIndication: React.PropTypes.bool,
		optionalIndication: React.PropTypes.bool
	}

})(jQuery);
