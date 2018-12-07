(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgFunnelChart", [
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
	var IgFunnelChart = createReactClass($.ig.react.core.buildComponent("igFunnelChart"));
	if (window) {
		window.IgFunnelChart = IgFunnelChart;
	}
	return IgFunnelChart;
}));
