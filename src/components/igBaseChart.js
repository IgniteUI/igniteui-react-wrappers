(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBaseChart", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgBaseChart = React.createClass($.ig.react.core.buildComponent("igBaseChart"));
	if (window) {
		window.IgBaseChart = IgBaseChart;
	}
	return IgBaseChart;
}));
