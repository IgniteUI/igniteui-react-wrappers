(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRadialMenu", [
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
	var IgRadialMenu = createReactClass($.ig.react.core.buildComponent("igRadialMenu"));
	if (window) {
		window.IgRadialMenu = IgRadialMenu;
	}
	return IgRadialMenu;
}));
