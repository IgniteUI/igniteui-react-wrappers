(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgColorPickerSplitButton", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgColorPickerSplitButton = React.createClass($.ig.react.core.buildComponent("igColorPickerSplitButton"));
	if (window) {
		window.IgColorPickerSplitButton = IgColorPickerSplitButton;
	}
	return IgColorPickerSplitButton;
}));
