(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotView", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgPivotView = React.createClass($.ig.react.core.buildComponent("igPivotView"));
	if (window) {
		window.IgPivotView = IgPivotView;
	}
	return IgPivotView;
}));

