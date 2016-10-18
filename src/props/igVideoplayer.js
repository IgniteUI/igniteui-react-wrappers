(function ($) {
	$.ig = $.ig || {};
	$.ig.react = $.ig.react || {};
	$.ig.react.propTypes = $.ig.react.propTypes || {};
	$.ig.react.propTypes.shapes = $.ig.react.propTypes.shapes || {};
	$.ig.react.propTypes.shapes.igVideoPlayerBookmark = {
		time: React.PropTypes.number,
		title: React.PropTypes.string,
		disabled: React.PropTypes.bool
	}

	$.ig.react.propTypes.shapes.igVideoPlayerRelatedVideo = {
		imageUrl: React.PropTypes.string,
		title: React.PropTypes.string,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		link: React.PropTypes.string,
		sources: React.PropTypes.array,
		css: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igVideoPlayerBanner = {
		imageUrl: React.PropTypes.string,
		times: React.PropTypes.array,
		closeBanner: React.PropTypes.bool,
		animate: React.PropTypes.bool,
		visible: React.PropTypes.bool,
		duration: React.PropTypes.number,
		autohide: React.PropTypes.bool,
		hidedelay: React.PropTypes.number,
		link: React.PropTypes.string,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.number,
			React.PropTypes.string
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.number,
			React.PropTypes.string
		]),
		css: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igVideoPlayerCommercialsLinkedCommercial = {
		sources: React.PropTypes.array,
		startTime: React.PropTypes.number,
		link: React.PropTypes.string,
		title: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igVideoPlayerCommercialsEmbeddedCommercial = {
		startTime: React.PropTypes.number,
		endTime: React.PropTypes.number,
		link: React.PropTypes.string,
		title: React.PropTypes.string
	}

	$.ig.react.propTypes.shapes.igVideoPlayerCommercialsAdMessage = {
		animate: React.PropTypes.bool,
		autoHide: React.PropTypes.bool,
		hideDelay: React.PropTypes.number,
		animationDuration: React.PropTypes.number
	}

	$.ig.react.propTypes.shapes.igVideoPlayerCommercials = {
		linkedCommercials: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerCommercialsLinkedCommercial)
		),
		embeddedCommercials: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerCommercialsEmbeddedCommercial)
		),
		alwaysPlayCommercials: React.PropTypes.bool,
		showBookmarks: React.PropTypes.bool,
		adMessage: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgVideoPlayerCommercialsAdMessage
		)
	}

	$.ig.react.propTypes.igVideoPlayer = {
		id: React.PropTypes.string.isRequired,
		sources: React.PropTypes.array,
		width: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([	
			React.PropTypes.string,
			React.PropTypes.number
		]),
		posterUrl: React.PropTypes.string,
		preload: React.PropTypes.bool,
		autoplay: React.PropTypes.bool,
		autohide: React.PropTypes.bool,
		volumeAutohideDelay: React.PropTypes.number,
		centerButtonHideDelay: React.PropTypes.number,
		loop: React.PropTypes.bool,
		browserControls: React.PropTypes.bool,
		fullscreen: React.PropTypes.bool,
		volume: React.PropTypes.number,
		muted: React.PropTypes.bool,
		title: React.PropTypes.string,
		showSeekTime: React.PropTypes.bool,
		progressLabelFormat: React.PropTypes.string,
		bookmarks: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerBookmark)
		),
		relatedVideos: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerRelatedVideo)
		),
		banners: React.PropTypes.arrayOf(
			React.PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerBanner)
		),
		commercials: React.PropTypes.shape(
			$.ig.react.propTypes.shapes.IgVideoPlayerCommercials
		)
	}

})(jQuery);
