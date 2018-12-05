(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTextEditor", [
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
	var IgTextEditor = createReactClass($.ig.react.core.buildComponent("igTextEditor"));
	if (window) {
		window.IgTextEditor = IgTextEditor;
	}
	return IgTextEditor;
}));
