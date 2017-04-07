(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgLinearGauge", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgLinearGauge = React.createClass($.ig.react.core.buildComponent("igLinearGauge"));
	if (window) {
		window.IgLinearGauge = IgLinearGauge;
	}
	return IgLinearGauge;
}));

