(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igValidatorField = {
		selector: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.object
		])
	}

	$.ig.react.propTypes.igValidator = {
		id: React.PropTypes.string.isRequired,
		onchange: React.PropTypes.bool,
		onblur: React.PropTypes.bool,
		onsubmit: React.PropTypes.bool,
		required: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.object
		]),
		number: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.object
		]),
		date: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.object
		]),
		email: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.object
		]),
		lengthRange: React.PropTypes.oneOfType([	
			React.PropTypes.array,
			React.PropTypes.object
		]),
		valueRange: React.PropTypes.oneOfType([	
			React.PropTypes.array,
			React.PropTypes.object
		]),
		creditCard: React.PropTypes.oneOfType([	
			React.PropTypes.bool,
			React.PropTypes.object
		]),
		pattern: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.object
		]),
		messageTarget: React.PropTypes.element,
		errorMessage: React.PropTypes.string,
		successMessage: React.PropTypes.string,
		threshold: React.PropTypes.number,
		equalTo: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.object
		]),
		custom: React.PropTypes.oneOfType([	
			React.PropTypes.func,
			React.PropTypes.string,
			React.PropTypes.object
		]),
		fields: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igValidatorField)
		),
		notificationOptions: React.PropTypes.object,
		requiredIndication: React.PropTypes.bool,
		optionalIndication: React.PropTypes.bool
	}

})(jQuery);
