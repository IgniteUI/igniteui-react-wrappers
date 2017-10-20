(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgBaseEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgBaseEditor = React.createClass($.ig.react.core.buildComponent("igBaseEditor"));
	if (window) {
		window.IgBaseEditor = IgBaseEditor;
	}
	return IgBaseEditor;
}));
