$.ig.react.propTypes.igQRCodeBarcode = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pixelScalingRatio: PropTypes.number,
	backingBrush: PropTypes.string,
	backingOutline: PropTypes.string,
	backingStrokeThickness: PropTypes.number,
	barBrush: PropTypes.string,
	fontBrush: PropTypes.string,
	font: PropTypes.string,
	data: PropTypes.string,
	errorMessageText: PropTypes.string,
	stretch: PropTypes.oneOf([
		"none",
		"fill",
		"uniform",
		"uniformToFill"
	]),
	barsFillMode: PropTypes.oneOf([
		"fillSpace",
		"ensureEqualSize"
	]),
	widthToHeightRatio: PropTypes.number,
	xDimension: PropTypes.number,
	errorCorrectionLevel: PropTypes.oneOf([
		"low",
		"medium",
		"quartil",
		"high"
	]),
	sizeVersion: PropTypes.oneOf([
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
	encodingMode: PropTypes.oneOf([
		"undefined",
		"numeric",
		"alphanumeric",
		"byte",
		"kanji"
	]),
	eciNumber: PropTypes.number,
	eciHeaderDisplayMode: PropTypes.oneOf([
		"hide",
		"show"
	]),
	fnc1Mode: PropTypes.oneOf([
		"none",
		"gs1",
		"industry"
	]),
	applicationIndicator: PropTypes.string
}
