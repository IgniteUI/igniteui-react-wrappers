(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDoughnutChart", [
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
	var IgDoughnutChart = createReactClass($.ig.react.core.buildComponent("igDoughnutChart"));
	if (window) {
		window.IgDoughnutChart = IgDoughnutChart;
	}
	return IgDoughnutChart;
}));
