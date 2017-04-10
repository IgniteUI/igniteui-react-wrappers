(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotGrid", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgPivotGrid = React.createClass($.ig.react.core.buildComponent("igPivotGrid"));
	if (window) {
		window.IgPivotGrid = IgPivotGrid;
	}
	return IgPivotGrid;
}));

