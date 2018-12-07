(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBaseEditor", [
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
	var IgBaseEditor = createReactClass($.ig.react.core.buildComponent("igBaseEditor"));
	if (window) {
		window.IgBaseEditor = IgBaseEditor;
	}
	return IgBaseEditor;
}));
