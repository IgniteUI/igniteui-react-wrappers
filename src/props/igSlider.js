$.ig.react.propTypes.shapes.igSliderBookmarks = {
	value: PropTypes.number,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	css: PropTypes.string
}

$.ig.react.propTypes.igSlider = {
	id: PropTypes.string.isRequired,
	animate: PropTypes.bool,
	max: PropTypes.number,
	min: PropTypes.number,
	orientation: PropTypes.any,
	step: PropTypes.number,
	value: PropTypes.number,
	bookmarks: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSliderBookmarks
	),
	showBookmarkTitle: PropTypes.bool,
	syncHandleWithBookmark: PropTypes.bool
}
