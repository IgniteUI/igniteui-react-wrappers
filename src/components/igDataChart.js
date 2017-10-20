(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDataChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgDataChart = React.createClass($.ig.react.core.buildComponent("igDataChart"));
	if (window) {
		window.IgDataChart = IgDataChart;
	}
	return IgDataChart;
}));
