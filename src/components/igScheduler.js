(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgScheduler", [
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
	var IgScheduler = createReactClass($.ig.react.core.buildComponent("igScheduler"));
	if (window) {
		window.IgScheduler = IgScheduler;
	}
	return IgScheduler;
}));
