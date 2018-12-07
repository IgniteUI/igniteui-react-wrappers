(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDatePicker", [
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
	var IgDatePicker = createReactClass($.ig.react.core.buildComponent("igDatePicker"));
	if (window) {
		window.IgDatePicker = IgDatePicker;
	}
	return IgDatePicker;
}));
