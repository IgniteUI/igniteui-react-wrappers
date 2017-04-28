(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSlider", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgSlider = React.createClass($.ig.react.core.buildComponent("igSlider"));
	if (window) {
		window.IgSlider = IgSlider;
	}
	return IgSlider;
}));

