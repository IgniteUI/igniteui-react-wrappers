(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.igLoading = {
		id: React.PropTypes.string.isRequired,
		cssClass: React.PropTypes.object,
		includeVerticalOffset: React.PropTypes.bool
	}

	$.ig.react.propTypes.shapes.igSliderBookmarks = {
		value: React.PropTypes.number,
		title: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		css: React.PropTypes.string
	}

	$.ig.react.propTypes.igSlider = {
		id: React.PropTypes.string.isRequired,
		animate: React.PropTypes.bool,
		max: React.PropTypes.number,
		min: React.PropTypes.number,
		orientation: React.PropTypes.any,
		step: React.PropTypes.number,
		value: React.PropTypes.number,
		bookmarks: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgSliderBookmarks
		),
		showBookmarkTitle: React.PropTypes.bool,
		syncHandleWithBookmark: React.PropTypes.bool
	}

	$.ig.react.propTypes.igProgressBar = {
		id: React.PropTypes.string.isRequired,
		animate: React.PropTypes.bool,
		animateTimeout: React.PropTypes.number,
		max: React.PropTypes.number,
		min: React.PropTypes.number,
		orientation: React.PropTypes.string,
		value: React.PropTypes.number,
		width: React.PropTypes.string,
		height: React.PropTypes.string,
		range: React.PropTypes.bool,
		queue: React.PropTypes.bool,
		endValue: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igButtonLink = {
		href: React.PropTypes.object,
		target: React.PropTypes.object,
		title: React.PropTypes.object
	}

	$.ig.react.propTypes.shapes.igButtonIcons = {
		primary: React.PropTypes.object,
		secondary: React.PropTypes.object
	}

	$.ig.react.propTypes.igButton = {
		id: React.PropTypes.string.isRequired,
		width: React.PropTypes.object,
		height: React.PropTypes.object,
		link: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgButtonLink
		),
		labelText: React.PropTypes.string,
		centerLabel: React.PropTypes.bool,
		css: React.PropTypes.object,
		onlyIcons: React.PropTypes.bool,
		icons: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgButtonIcons
		),
		title: React.PropTypes.bool
	}

	$.ig.react.propTypes.igTooltip = {
		id: React.PropTypes.string.isRequired,
		text: React.PropTypes.string,
		arrowLocation: React.PropTypes.string
	}

	$.ig.react.propTypes.mouseWrapper = {
		id: React.PropTypes.string.isRequired,
		cancel: React.PropTypes.string,
		distance: React.PropTypes.number,
		delay: React.PropTypes.number
	}

	$.ig.react.propTypes.igResponsiveContainer = {
		id: React.PropTypes.string.isRequired,
		pollingInterval: React.PropTypes.number
	}

})(jQuery);
