(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgGrid", [
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
	var IgGrid = createReactClass($.ig.react.core.buildComponent("igGrid"));
	if (window) {
		window.IgGrid = IgGrid;
	}
	return IgGrid;
}));
