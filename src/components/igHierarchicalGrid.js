(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgHierarchicalGrid", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgHierarchicalGrid = React.createClass($.ig.react.core.buildComponent("igHierarchicalGrid"));
	if (window) {
		window.IgHierarchicalGrid = IgHierarchicalGrid;
	}
	return IgHierarchicalGrid;
}));

