$.ig.react.propTypes.shapes.igVideoPlayerBookmark = {
	time: PropTypes.number,
	title: PropTypes.string,
	disabled: PropTypes.bool
}

$.ig.react.propTypes.shapes.igVideoPlayerRelatedVideo = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	link: PropTypes.string,
	sources: PropTypes.array,
	css: PropTypes.string
}

$.ig.react.propTypes.shapes.igVideoPlayerBanner = {
	imageUrl: PropTypes.string,
	times: PropTypes.array,
	closeBanner: PropTypes.bool,
	animate: PropTypes.bool,
	visible: PropTypes.bool,
	duration: PropTypes.number,
	autohide: PropTypes.bool,
	hidedelay: PropTypes.number,
	link: PropTypes.string,
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	css: PropTypes.string
}

$.ig.react.propTypes.shapes.igVideoPlayerCommercialsLinkedCommercial = {
	sources: PropTypes.array,
	startTime: PropTypes.number,
	link: PropTypes.string,
	title: PropTypes.string
}

$.ig.react.propTypes.shapes.igVideoPlayerCommercialsEmbeddedCommercial = {
	startTime: PropTypes.number,
	endTime: PropTypes.number,
	link: PropTypes.string,
	title: PropTypes.string
}

$.ig.react.propTypes.shapes.igVideoPlayerCommercialsAdMessage = {
	animate: PropTypes.bool,
	autoHide: PropTypes.bool,
	hideDelay: PropTypes.number,
	animationDuration: PropTypes.number
}

$.ig.react.propTypes.shapes.igVideoPlayerCommercials = {
	linkedCommercials: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerCommercialsLinkedCommercial)
	),
	embeddedCommercials: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerCommercialsEmbeddedCommercial)
	),
	alwaysPlayCommercials: PropTypes.bool,
	showBookmarks: PropTypes.bool,
	adMessage: PropTypes.shape(
		$.ig.react.propTypes.shapes.igVideoPlayerCommercialsAdMessage
	)
}

$.ig.react.propTypes.shapes.igVideoPlayerLocale = {
	liveStream: PropTypes.bool,
	live: PropTypes.bool,
	paused: PropTypes.bool,
	playing: PropTypes.bool,
	play: PropTypes.bool,
	volume: PropTypes.bool,
	progressLabelLongFormat: PropTypes.bool,
	progressLabelShortFormat: PropTypes.bool,
	enterFullscreen: PropTypes.bool,
	exitFullscreen: PropTypes.bool,
	skipTo: PropTypes.bool,
	buffering: PropTypes.bool,
	adMessage: PropTypes.bool,
	adMessageLong: PropTypes.bool,
	adMessageNoDuration: PropTypes.bool,
	adNewWindowTip: PropTypes.bool,
	relatedVideos: PropTypes.bool,
	replayButton: PropTypes.bool,
	replayTooltip: PropTypes.bool
}

$.ig.react.propTypes.igVideoPlayer = {
	id: PropTypes.string.isRequired,
	sources: PropTypes.array,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	posterUrl: PropTypes.string,
	preload: PropTypes.bool,
	autoplay: PropTypes.bool,
	autohide: PropTypes.bool,
	volumeAutohideDelay: PropTypes.number,
	centerButtonHideDelay: PropTypes.number,
	loop: PropTypes.bool,
	browserControls: PropTypes.bool,
	fullscreen: PropTypes.bool,
	volume: PropTypes.number,
	muted: PropTypes.bool,
	title: PropTypes.string,
	showSeekTime: PropTypes.bool,
	progressLabelFormat: PropTypes.string,
	bookmarks: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerBookmark)
	),
	relatedVideos: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerRelatedVideo)
	),
	banners: PropTypes.arrayOf(
		PropTypes.shape($.ig.react.propTypes.shapes.igVideoPlayerBanner)
	),
	commercials: PropTypes.shape(
		$.ig.react.propTypes.shapes.igVideoPlayerCommercials
	),
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igVideoPlayerLocale
	)
}
