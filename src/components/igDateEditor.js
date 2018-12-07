(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDateEditor", [
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
	var IgDateEditor = createReactClass($.ig.react.core.buildComponent("igDateEditor"));
	if (window) {
		window.IgDateEditor = IgDateEditor;
	}
	return IgDateEditor;
}));
