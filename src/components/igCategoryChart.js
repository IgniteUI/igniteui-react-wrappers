(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCategoryChart", [
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
	var IgCategoryChart = createReactClass($.ig.react.core.buildComponent("igCategoryChart"));
	if (window) {
		window.IgCategoryChart = IgCategoryChart;
	}
	return IgCategoryChart;
}));
