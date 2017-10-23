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
		$.ig.react.propTypes.shapes.igSliderBookmarks
	),
	showBookmarkTitle: React.PropTypes.bool,
	syncHandleWithBookmark: React.PropTypes.bool
}
