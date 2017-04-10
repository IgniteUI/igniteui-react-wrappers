(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgFunnelChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgFunnelChart = React.createClass($.ig.react.core.buildComponent("igFunnelChart"));
	if (window) {
		window.IgFunnelChart = IgFunnelChart;
	}
	return IgFunnelChart;
}));

