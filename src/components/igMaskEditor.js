(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgMaskEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgMaskEditor = React.createClass($.ig.react.core.buildComponent("igMaskEditor"));
	if (window) {
		window.IgMaskEditor = IgMaskEditor;
	}
	return IgMaskEditor;
}));
