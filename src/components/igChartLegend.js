(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgChartLegend", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgChartLegend = React.createClass($.ig.react.core.buildComponent("igChartLegend"));
	if (window) {
		window.IgChartLegend = IgChartLegend;
	}
	return IgChartLegend;
}));
