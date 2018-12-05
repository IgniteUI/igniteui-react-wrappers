(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPivotDataSelector", [
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
	var IgPivotDataSelector = createReactClass($.ig.react.core.buildComponent("igPivotDataSelector"));
	if (window) {
		window.IgPivotDataSelector = IgPivotDataSelector;
	}
	return IgPivotDataSelector;
}));
