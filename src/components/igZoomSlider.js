(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgZoomSlider", [
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
	var IgZoomSlider = createReactClass($.ig.react.core.buildComponent("igZoomSlider"));
	if (window) {
		window.IgZoomSlider = IgZoomSlider;
	}
	return IgZoomSlider;
}));
