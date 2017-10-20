(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotDataSelector", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgPivotDataSelector = React.createClass($.ig.react.core.buildComponent("igPivotDataSelector"));
	if (window) {
		window.IgPivotDataSelector = IgPivotDataSelector;
	}
	return IgPivotDataSelector;
}));
