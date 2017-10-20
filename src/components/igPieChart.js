(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPieChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgPieChart = React.createClass($.ig.react.core.buildComponent("igPieChart"));
	if (window) {
		window.IgPieChart = IgPieChart;
	}
	return IgPieChart;
}));
