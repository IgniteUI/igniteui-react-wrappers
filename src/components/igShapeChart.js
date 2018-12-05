(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgShapeChart", [
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
	var IgShapeChart = createReactClass($.ig.react.core.buildComponent("igShapeChart"));
	if (window) {
		window.IgShapeChart = IgShapeChart;
	}
	return IgShapeChart;
}));
