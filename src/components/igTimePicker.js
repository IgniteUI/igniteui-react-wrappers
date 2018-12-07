(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTimePicker", [
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
	var IgTimePicker = createReactClass($.ig.react.core.buildComponent("igTimePicker"));
	if (window) {
		window.IgTimePicker = IgTimePicker;
	}
	return IgTimePicker;
}));
