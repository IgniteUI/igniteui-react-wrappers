(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgScheduler", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgScheduler = React.createClass($.ig.react.core.buildComponent("igScheduler"));
	if (window) {
		window.IgScheduler = IgScheduler;
	}
	return IgScheduler;
}));

