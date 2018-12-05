$.ig.react.propTypes.shapes.igUploadLocale = {
	labelUploadButton: PropTypes.string,
	labelAddButton: PropTypes.string,
	labelClearAllButton: PropTypes.string,
	labelSummaryTemplate: PropTypes.string,
	labelSummaryProgressBarTemplate: PropTypes.string,
	labelShowDetails: PropTypes.string,
	labelHideDetails: PropTypes.string,
	labelSummaryProgressButtonCancel: PropTypes.string,
	labelSummaryProgressButtonContinue: PropTypes.string,
	labelSummaryProgressButtonDone: PropTypes.string,
	labelProgressBarFileNameContinue: PropTypes.string,
	errorMessageFileSizeExceeded: PropTypes.string,
	errorMessageGetFileStatus: PropTypes.string,
	errorMessageCancelUpload: PropTypes.string,
	errorMessageNoSuchFile: PropTypes.string,
	errorMessageOther: PropTypes.string,
	errorMessageValidatingFileExtension: PropTypes.string,
	errorMessageAJAXRequestFileSize: PropTypes.string,
	errorMessageMaxUploadedFiles: PropTypes.string,
	errorMessageMaxSimultaneousFiles: PropTypes.string,
	errorMessageTryToRemoveNonExistingFile: PropTypes.string,
	errorMessageTryToStartNonExistingFile: PropTypes.string,
	errorMessageDropMultipleFilesWhenSingleModel: PropTypes.string,
	titleUploadFileButtonInit: PropTypes.string,
	titleAddFileButton: PropTypes.string,
	titleCancelUploadButton: PropTypes.string,
	titleSummaryProgressButtonContinue: PropTypes.string,
	titleClearUploaded: PropTypes.string,
	titleShowDetailsButton: PropTypes.string,
	titleHideDetailsButton: PropTypes.string,
	titleSummaryProgressButtonCancel: PropTypes.string,
	titleSummaryProgressButtonDone: PropTypes.string,
	titleSingleUploadButtonContinue: PropTypes.string,
	titleClearAllButton: PropTypes.string
}

$.ig.react.propTypes.shapes.igUploadFileExtensionIcons = {
	ext: PropTypes.array,
	css: PropTypes.string,
	def: PropTypes.bool
}

$.ig.react.propTypes.igUpload = {
	id: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	autostartupload: PropTypes.bool,
	labelUploadButton: PropTypes.string,
	labelAddButton: PropTypes.string,
	labelClearAllButton: PropTypes.string,
	labelSummaryTemplate: PropTypes.string,
	labelSummaryProgressBarTemplate: PropTypes.string,
	labelShowDetails: PropTypes.string,
	labelHideDetails: PropTypes.string,
	labelSummaryProgressButtonCancel: PropTypes.string,
	labelSummaryProgressButtonContinue: PropTypes.string,
	labelSummaryProgressButtonDone: PropTypes.string,
	labelProgressBarFileNameContinue: PropTypes.string,
	errorMessageMaxFileSizeExceeded: PropTypes.string,
	errorMessageGetFileStatus: PropTypes.string,
	errorMessageCancelUpload: PropTypes.string,
	errorMessageNoSuchFile: PropTypes.string,
	errorMessageOther: PropTypes.string,
	errorMessageValidatingFileExtension: PropTypes.string,
	errorMessageAJAXRequestFileSize: PropTypes.string,
	errorMessageTryToRemoveNonExistingFile: PropTypes.string,
	errorMessageTryToStartNonExistingFile: PropTypes.string,
	errorMessageMaxUploadedFiles: PropTypes.string,
	errorMessageMaxSimultaneousFiles: PropTypes.string,
	errorMessageDropMultipleFilesWhenSingleModel: PropTypes.string,
	locale: PropTypes.shape(
		$.ig.react.propTypes.shapes.igUploadLocale
	),
	uploadUrl: PropTypes.string,
	progressUrl: PropTypes.string,
	allowedExtensions: PropTypes.array,
	showFileExtensionIcon: PropTypes.bool,
	css: PropTypes.object,
	fileExtensionIcons: PropTypes.shape(
		$.ig.react.propTypes.shapes.igUploadFileExtensionIcons
	),
	mode: PropTypes.any,
	multipleFiles: PropTypes.bool,
	maxUploadedFiles: PropTypes.number,
	maxSimultaneousFilesUploads: PropTypes.number,
	fileSizeMetric: PropTypes.any,
	controlId: PropTypes.string,
	fileSizeDecimalDisplay: PropTypes.number,
	maxFileSize: PropTypes.object,
	useSingleRequest: PropTypes.bool
}
