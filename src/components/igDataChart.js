(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDataChart", [
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
	var IgDataChart = createReactClass($.ig.react.core.buildComponent("igDataChart"));
	if (window) {
		window.IgDataChart = IgDataChart;
	}
	return IgDataChart;
}));
