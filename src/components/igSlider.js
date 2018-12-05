(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSlider", [
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
	var IgSlider = createReactClass($.ig.react.core.buildComponent("igSlider"));
	if (window) {
		window.IgSlider = IgSlider;
	}
	return IgSlider;
}));
