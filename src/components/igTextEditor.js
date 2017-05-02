(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgTextEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgTextEditor = React.createClass($.ig.react.core.buildComponent("igTextEditor"));
	if (window) {
		window.IgTextEditor = IgTextEditor;
	}
	return IgTextEditor;
}));

