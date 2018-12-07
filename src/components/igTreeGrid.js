(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTreeGrid", [
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
	var IgTreeGrid = createReactClass($.ig.react.core.buildComponent("igTreeGrid"));
	if (window) {
		window.IgTreeGrid = IgTreeGrid;
	}
	return IgTreeGrid;
}));
