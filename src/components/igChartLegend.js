(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgChartLegend", [
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
	var IgChartLegend = createReactClass($.ig.react.core.buildComponent("igChartLegend"));
	if (window) {
		window.IgChartLegend = IgChartLegend;
	}
	return IgChartLegend;
}));
