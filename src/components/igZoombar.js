(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgZoombar", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgZoombar = React.createClass($.ig.react.core.buildComponent("igZoombar"));
	if (window) {
		window.IgZoombar = IgZoombar;
	}
	return IgZoombar;
}));
