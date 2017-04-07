(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSparkline", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgSparkline = React.createClass($.ig.react.core.buildComponent("igSparkline"));
	if (window) {
		window.IgSparkline = IgSparkline;
	}
	return IgSparkline;
}));

