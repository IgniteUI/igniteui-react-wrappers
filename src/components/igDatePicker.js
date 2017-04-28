(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDatePicker", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgDatePicker = React.createClass($.ig.react.core.buildComponent("igDatePicker"));
	if (window) {
		window.IgDatePicker = IgDatePicker;
	}
	return IgDatePicker;
}));

