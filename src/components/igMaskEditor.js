(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgMaskEditor", [
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
	var IgMaskEditor = createReactClass($.ig.react.core.buildComponent("igMaskEditor"));
	if (window) {
		window.IgMaskEditor = IgMaskEditor;
	}
	return IgMaskEditor;
}));
