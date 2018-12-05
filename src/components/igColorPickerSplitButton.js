(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgColorPickerSplitButton", [
			"react",
			"jquery",
			"create-react-class",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery, createReactClass);
	}
}
(function (React, $, createReactClass) {
	var IgColorPickerSplitButton = createReactClass($.ig.react.core.buildComponent("igColorPickerSplitButton"));
	if (window) {
		window.IgColorPickerSplitButton = IgColorPickerSplitButton;
	}
	return IgColorPickerSplitButton;
}));
