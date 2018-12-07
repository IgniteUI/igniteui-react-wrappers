(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgLinearGauge", [
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
	var IgLinearGauge = createReactClass($.ig.react.core.buildComponent("igLinearGauge"));
	if (window) {
		window.IgLinearGauge = IgLinearGauge;
	}
	return IgLinearGauge;
}));
