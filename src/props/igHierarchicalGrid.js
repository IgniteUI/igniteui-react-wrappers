(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgHierarchicalGrid", [
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
	var IgHierarchicalGrid = createReactClass($.ig.react.core.buildComponent("igHierarchicalGrid"));
	if (window) {
		window.IgHierarchicalGrid = IgHierarchicalGrid;
	}
	return IgHierarchicalGrid;
}));
