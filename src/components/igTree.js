(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTree", [
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
	var IgTree = createReactClass($.ig.react.core.buildComponent("igTree"));
	if (window) {
		window.IgTree = IgTree;
	}
	return IgTree;
}));
