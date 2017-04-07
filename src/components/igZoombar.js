(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgZoombar", [
			"react",
			"jquery",
			"jquery-ui"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgZoombar = React.createClass($.ig.react.core.buildComponent("igZoombar"));
	if (window) {
		window.IgZoombar = IgZoombar;
	}
	return IgZoombar;
}));



