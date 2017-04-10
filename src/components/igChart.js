(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDataChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgDataChart = React.createClass($.ig.react.core.buildComponent("igDataChart"));
	if (window) {
		window.IgDataChart = IgDataChart;
	}
	return IgDataChart;
}));

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPieChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgPieChart = React.createClass($.ig.react.core.buildComponent("igPieChart"));
	if (window) {
		window.IgPieChart = IgPieChart;
	}
	return IgPieChart;
}));

