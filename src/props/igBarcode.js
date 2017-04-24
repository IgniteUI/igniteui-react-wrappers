$.ig.react.propTypes.igQRCodeBarcode = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	backingBrush: React.PropTypes.string,
	backingOutline: React.PropTypes.string,
	backingStrokeThickness: React.PropTypes.number,
	barBrush: React.PropTypes.string,
	fontBrush: React.PropTypes.string,
	font: React.PropTypes.string,
	data: React.PropTypes.string,
	errorMessageText: React.PropTypes.string,
	stretch: React.PropTypes.oneOf([
		"none",
		"fill",
		"uniform",
		"uniformToFill"
	]),
	barsFillMode: React.PropTypes.oneOf([
		"fillSpace",
		"ensureEqualSize"
	]),
	widthToHeightRatio: React.PropTypes.number,
	xDimension: React.PropTypes.number,
	errorCorrectionLevel: React.PropTypes.oneOf([
		"low",
		"medium",
		"quartil",
		"high"
	]),
	sizeVersion: React.PropTypes.oneOf([
		"undefined",
		"version1",
		"version2",
		"version3",
		"version4",
		"version5",
		"version6",
		"version7",
		"version8",
		"version9",
		"version10",
		"version11",
		"version12",
		"version13",
		"version14",
		"version15",
		"version16",
		"version17",
		"version18",
		"version19",
		"version20",
		"version21",
		"version22",
		"version23",
		"version24",
		"version25",
		"version26",
		"version27",
		"version28",
		"version29",
		"version30",
		"version31",
		"version32",
		"version33",
		"version34",
		"version35",
		"version36",
		"version37",
		"version38",
		"version39",
		"version40"
	]),
	encodingMode: React.PropTypes.oneOf([
		"undefined",
		"numeric",
		"alphanumeric",
		"byte",
		"kanji"
	]),
	eciNumber: React.PropTypes.number,
	eciHeaderDisplayMode: React.PropTypes.oneOf([
		"hide",
		"show"
	]),
	fnc1Mode: React.PropTypes.oneOf([
		"none",
		"gs1",
		"industry"
	]),
	applicationIndicator: React.PropTypes.string
}

