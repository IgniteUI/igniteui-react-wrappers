(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgFinancialChart", [
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
	var IgFinancialChart = createReactClass($.ig.react.core.buildComponent("igFinancialChart"));
	if (window) {
		window.IgFinancialChart = IgFinancialChart;
	}
	return IgFinancialChart;
}));
