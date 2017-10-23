(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPercentEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgPercentEditor = React.createClass($.ig.react.core.buildComponent("igPercentEditor"));
	if (window) {
		window.IgPercentEditor = IgPercentEditor;
	}
	return IgPercentEditor;
}));
