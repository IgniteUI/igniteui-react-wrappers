(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igComboLoadOnDemandSettings = {
		enabled: React.PropTypes.bool,
		pageSize: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igComboMultiSelection = {
		enabled: React.PropTypes.bool,
		addWithKeyModifier: React.PropTypes.bool,
		showCheckboxes: React.PropTypes.bool,
		itemSeparator: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igComboGrouping = {
		key: React.PropTypes.string,
		dir: React.PropTypes.any
	}

	$.ig.react.propTypes.shapes.igComboInitialSelectedItem = {
		index: React.PropTypes.number,
		value: React.PropTypes.object
	}

	$.ig.react.propTypes.igCombo = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		dropDownWidth: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		dataSource: React.PropTypes.object,
		dataSourceType: React.PropTypes.string,
		dataSourceUrl: React.PropTypes.string,
		responseTotalRecCountKey: React.PropTypes.string,
		responseDataKey: React.PropTypes.string,
		responseDataType: React.PropTypes.oneOf([
			"json",
			"xml",
			"html",
			"script",
			"jsonp",
			"text"
		]),
		responseContentType: React.PropTypes.string,
		requestType: React.PropTypes.string,
		valueKey: React.PropTypes.string,
		textKey: React.PropTypes.string,
		itemTemplate: React.PropTypes.string,
		headerTemplate: React.PropTypes.string,
		footerTemplate: React.PropTypes.string,
		inputName: React.PropTypes.string,
		animationShowDuration: React.PropTypes.number,
		animationHideDuration: React.PropTypes.number,
		dropDownAttachedToBody: React.PropTypes.bool,
		filteringType: React.PropTypes.oneOf([
			"remote",
			"local",
			"none"
		]),
		filterExprUrlKey: React.PropTypes.string,
		filteringCondition: React.PropTypes.any,
		filteringLogic: React.PropTypes.any,
		noMatchFoundText: React.PropTypes.string,
		loadOnDemandSettings: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgComboLoadOnDemandSettings
		),
		visibleItemsCount: React.PropTypes.number,
		placeHolder: React.PropTypes.string,
		mode: React.PropTypes.oneOf([
			"editable",
			"dropdown",
			"readonlylist",
			"readonly"
		]),
		virtualization: React.PropTypes.bool,
		multiSelection: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgComboMultiSelection
		),
		grouping: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgComboGrouping
		),
		validatorOptions: React.PropTypes.object,
		highlightMatchesMode: React.PropTypes.oneOf([
			"multi",
			"contains",
			"startsWith",
			"full",
			"null"
		]),
		caseSensitive: React.PropTypes.bool,
		autoSelectFirstMatch: React.PropTypes.bool,
		autoComplete: React.PropTypes.bool,
		allowCustomValue: React.PropTypes.bool,
		closeDropDownOnBlur: React.PropTypes.bool,
		delayInputChangeProcessing: React.PropTypes.number,
		tabIndex: React.PropTypes.number,
		dropDownOnFocus: React.PropTypes.bool,
		closeDropDownOnSelect: React.PropTypes.bool,
		selectItemBySpaceKey: React.PropTypes.bool,
		initialSelectedItems: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igComboInitialSelectedItem)
		),
		preventSubmitOnEnter: React.PropTypes.bool,
		format: React.PropTypes.string,
		suppressKeyboard: React.PropTypes.bool,
		enableClearButton: React.PropTypes.bool,
		dropDownButtonTitle: React.PropTypes.string,
		clearButtonTitle: React.PropTypes.string,
		dropDownOrientation: React.PropTypes.any
	}

})(jQuery);
