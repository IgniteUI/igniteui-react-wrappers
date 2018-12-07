(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgPercentEditor", [
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
	var IgPercentEditor = createReactClass($.ig.react.core.buildComponent("igPercentEditor"));
	if (window) {
		window.IgPercentEditor = IgPercentEditor;
	}
	return IgPercentEditor;
}));
