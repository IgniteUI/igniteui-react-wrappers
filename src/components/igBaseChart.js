(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBaseChart", [
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
	var IgBaseChart = createReactClass($.ig.react.core.buildComponent("igBaseChart"));
	if (window) {
		window.IgBaseChart = IgBaseChart;
	}
	return IgBaseChart;
}));
