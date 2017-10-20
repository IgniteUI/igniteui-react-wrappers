(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDateEditor", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, jQuery);
	}
}
(function (React, $) {
	var IgDateEditor = React.createClass($.ig.react.core.buildComponent("igDateEditor"));
	if (window) {
		window.IgDateEditor = IgDateEditor;
	}
	return IgDateEditor;
}));
