(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRadialGauge", [
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
	var IgRadialGauge = createReactClass($.ig.react.core.buildComponent("igRadialGauge"));
	if (window) {
		window.IgRadialGauge = IgRadialGauge;
	}
	return IgRadialGauge;
}));
