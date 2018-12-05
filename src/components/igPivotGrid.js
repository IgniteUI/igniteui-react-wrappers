(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotGrid", [
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
	var IgPivotGrid = createReactClass($.ig.react.core.buildComponent("igPivotGrid"));
	if (window) {
		window.IgPivotGrid = IgPivotGrid;
	}
	return IgPivotGrid;
}));
