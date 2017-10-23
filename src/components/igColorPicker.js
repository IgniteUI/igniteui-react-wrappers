(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgColorPicker", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgColorPicker = React.createClass($.ig.react.core.buildComponent("igColorPicker"));
	if (window) {
		window.IgColorPicker = IgColorPicker;
	}
	return IgColorPicker;
}));
