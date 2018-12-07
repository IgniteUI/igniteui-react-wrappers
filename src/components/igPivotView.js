(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotView", [
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
	var IgPivotView = createReactClass($.ig.react.core.buildComponent("igPivotView"));
	if (window) {
		window.IgPivotView = IgPivotView;
	}
	return IgPivotView;
}));
