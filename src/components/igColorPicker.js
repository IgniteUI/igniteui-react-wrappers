(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgColorPicker", [
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
	var IgColorPicker = createReactClass($.ig.react.core.buildComponent("igColorPicker"));
	if (window) {
		window.IgColorPicker = IgColorPicker;
	}
	return IgColorPicker;
}));
