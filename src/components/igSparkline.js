(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSparkline", [
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
	var IgSparkline = createReactClass($.ig.react.core.buildComponent("igSparkline"));
	if (window) {
		window.IgSparkline = IgSparkline;
	}
	return IgSparkline;
}));
