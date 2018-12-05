(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgHtmlEditor", [
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
	var IgHtmlEditor = createReactClass($.ig.react.core.buildComponent("igHtmlEditor"));
	if (window) {
		window.IgHtmlEditor = IgHtmlEditor;
	}
	return IgHtmlEditor;
}));
