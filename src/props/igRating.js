$.ig.react.propTypes.igRating = {
	id: React.PropTypes.string.isRequired,
	vertical: React.PropTypes.bool,
	value: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	valueHover: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	voteCount: React.PropTypes.number,
	voteWidth: React.PropTypes.number,
	voteHeight: React.PropTypes.number,
	swapDirection: React.PropTypes.bool,
	valueAsPercent: React.PropTypes.bool,
	focusable: React.PropTypes.bool,
	precision: React.PropTypes.oneOf([
		"exact",
		"half",
		"whole"
	]),
	precisionZeroVote: React.PropTypes.number,
	roundedDecimalPlaces: React.PropTypes.number,
	theme: React.PropTypes.string,
	validatorOptions: React.PropTypes.object,
	cssVotes: React.PropTypes.object
}
