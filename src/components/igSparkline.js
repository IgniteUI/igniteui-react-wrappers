(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSparkline", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgSparkline = React.createClass($.ig.react.core.buildComponent("igSparkline"));
	if (window) {
		window.IgSparkline = IgSparkline;
	}
	return IgSparkline;
}));
