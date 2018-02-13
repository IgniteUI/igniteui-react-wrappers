(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTimePicker", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTimePicker = React.createClass($.ig.react.core.buildComponent("igTimePicker"));
	if (window) {
		window.IgTimePicker = IgTimePicker;
	}
	return IgTimePicker;
}));
