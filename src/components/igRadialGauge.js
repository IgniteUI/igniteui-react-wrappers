(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRadialGauge", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgRadialGauge = React.createClass($.ig.react.core.buildComponent("igRadialGauge"));
	if (window) {
		window.IgRadialGauge = IgRadialGauge;
	}
	return IgRadialGauge;
}));

