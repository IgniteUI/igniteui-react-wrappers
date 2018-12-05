$.ig.react.propTypes.igRating = {
	id: PropTypes.string.isRequired,
	vertical: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	valueHover: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	voteCount: PropTypes.number,
	voteWidth: PropTypes.number,
	voteHeight: PropTypes.number,
	swapDirection: PropTypes.bool,
	valueAsPercent: PropTypes.bool,
	focusable: PropTypes.bool,
	precision: PropTypes.oneOf([
		"exact",
		"half",
		"whole"
	]),
	precisionZeroVote: PropTypes.number,
	roundedDecimalPlaces: PropTypes.number,
	theme: PropTypes.string,
	validatorOptions: PropTypes.object,
	cssVotes: PropTypes.object
}
