(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgRadialMenu", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgRadialMenu = React.createClass($.ig.react.core.buildComponent("igRadialMenu"));
	if (window) {
		window.IgRadialMenu = IgRadialMenu;
	}
	return IgRadialMenu;
}));

