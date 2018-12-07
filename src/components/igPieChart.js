(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPieChart", [
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
	var IgPieChart = createReactClass($.ig.react.core.buildComponent("igPieChart"));
	if (window) {
		window.IgPieChart = IgPieChart;
	}
	return IgPieChart;
}));
