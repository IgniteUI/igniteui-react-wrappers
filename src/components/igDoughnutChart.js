(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDoughnutChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgDoughnutChart = React.createClass($.ig.react.core.buildComponent("igDoughnutChart"));
	if (window) {
		window.IgDoughnutChart = IgDoughnutChart;
	}
	return IgDoughnutChart;
}));

