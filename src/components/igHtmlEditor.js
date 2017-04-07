(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgHtmlEditor", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgHtmlEditor = React.createClass($.ig.react.core.buildComponent("igHtmlEditor"));
	if (window) {
		window.IgHtmlEditor = IgHtmlEditor;
	}
	return IgHtmlEditor;
}));



