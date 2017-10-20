(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgHtmlEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgHtmlEditor = React.createClass($.ig.react.core.buildComponent("igHtmlEditor"));
	if (window) {
		window.IgHtmlEditor = IgHtmlEditor;
	}
	return IgHtmlEditor;
}));
