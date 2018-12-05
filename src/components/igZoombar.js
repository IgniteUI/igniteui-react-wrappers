(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgZoombar", [
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
	var IgZoombar = createReactClass($.ig.react.core.buildComponent("igZoombar"));
	if (window) {
		window.IgZoombar = IgZoombar;
	}
	return IgZoombar;
}));
