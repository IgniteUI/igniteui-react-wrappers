(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSplitter", [
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
	var IgSplitter = createReactClass($.ig.react.core.buildComponent("igSplitter"));
	if (window) {
		window.IgSplitter = IgSplitter;
	}
	return IgSplitter;
}));
