$.ig.react.propTypes.shapes.igUploadLocale = {
	labelUploadButton: React.PropTypes.string,
	labelAddButton: React.PropTypes.string,
	labelClearAllButton: React.PropTypes.string,
	labelSummaryTemplate: React.PropTypes.string,
	labelSummaryProgressBarTemplate: React.PropTypes.string,
	labelShowDetails: React.PropTypes.string,
	labelHideDetails: React.PropTypes.string,
	labelSummaryProgressButtonCancel: React.PropTypes.string,
	labelSummaryProgressButtonContinue: React.PropTypes.string,
	labelSummaryProgressButtonDone: React.PropTypes.string,
	labelProgressBarFileNameContinue: React.PropTypes.string,
	errorMessageFileSizeExceeded: React.PropTypes.string,
	errorMessageGetFileStatus: React.PropTypes.string,
	errorMessageCancelUpload: React.PropTypes.string,
	errorMessageNoSuchFile: React.PropTypes.string,
	errorMessageOther: React.PropTypes.string,
	errorMessageValidatingFileExtension: React.PropTypes.string,
	errorMessageAJAXRequestFileSize: React.PropTypes.string,
	errorMessageMaxUploadedFiles: React.PropTypes.string,
	errorMessageMaxSimultaneousFiles: React.PropTypes.string,
	errorMessageTryToRemoveNonExistingFile: React.PropTypes.string,
	errorMessageTryToStartNonExistingFile: React.PropTypes.string,
	errorMessageDropMultipleFilesWhenSingleModel: React.PropTypes.string,
	titleUploadFileButtonInit: React.PropTypes.string,
	titleAddFileButton: React.PropTypes.string,
	titleCancelUploadButton: React.PropTypes.string,
	titleSummaryProgressButtonContinue: React.PropTypes.string,
	titleClearUploaded: React.PropTypes.string,
	titleShowDetailsButton: React.PropTypes.string,
	titleHideDetailsButton: React.PropTypes.string,
	titleSummaryProgressButtonCancel: React.PropTypes.string,
	titleSummaryProgressButtonDone: React.PropTypes.string,
	titleSingleUploadButtonContinue: React.PropTypes.string,
	titleClearAllButton: React.PropTypes.string
}

$.ig.react.propTypes.shapes.igUploadFileExtensionIcons = {
	ext: React.PropTypes.array,
	css: React.PropTypes.string,
	def: React.PropTypes.bool
}

$.ig.react.propTypes.igUpload = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	autostartupload: React.PropTypes.bool,
	labelUploadButton: React.PropTypes.string,
	labelAddButton: React.PropTypes.string,
	labelClearAllButton: React.PropTypes.string,
	labelSummaryTemplate: React.PropTypes.string,
	labelSummaryProgressBarTemplate: React.PropTypes.string,
	labelShowDetails: React.PropTypes.string,
	labelHideDetails: React.PropTypes.string,
	labelSummaryProgressButtonCancel: React.PropTypes.string,
	labelSummaryProgressButtonContinue: React.PropTypes.string,
	labelSummaryProgressButtonDone: React.PropTypes.string,
	labelProgressBarFileNameContinue: React.PropTypes.string,
	errorMessageMaxFileSizeExceeded: React.PropTypes.string,
	errorMessageGetFileStatus: React.PropTypes.string,
	errorMessageCancelUpload: React.PropTypes.string,
	errorMessageNoSuchFile: React.PropTypes.string,
	errorMessageOther: React.PropTypes.string,
	errorMessageValidatingFileExtension: React.PropTypes.string,
	errorMessageAJAXRequestFileSize: React.PropTypes.string,
	errorMessageTryToRemoveNonExistingFile: React.PropTypes.string,
	errorMessageTryToStartNonExistingFile: React.PropTypes.string,
	errorMessageMaxUploadedFiles: React.PropTypes.string,
	errorMessageMaxSimultaneousFiles: React.PropTypes.string,
	errorMessageDropMultipleFilesWhenSingleModel: React.PropTypes.string,
	locale: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igUploadLocale
	),
	uploadUrl: React.PropTypes.string,
	progressUrl: React.PropTypes.string,
	allowedExtensions: React.PropTypes.array,
	showFileExtensionIcon: React.PropTypes.bool,
	css: React.PropTypes.object,
	fileExtensionIcons: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igUploadFileExtensionIcons
	),
	mode: React.PropTypes.any,
	multipleFiles: React.PropTypes.bool,
	maxUploadedFiles: React.PropTypes.number,
	maxSimultaneousFilesUploads: React.PropTypes.number,
	fileSizeMetric: React.PropTypes.any,
	controlId: React.PropTypes.string,
	fileSizeDecimalDisplay: React.PropTypes.number,
	maxFileSize: React.PropTypes.object
}
