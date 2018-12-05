(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCheckboxEditor", [
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
	var IgCheckboxEditor = createReactClass($.ig.react.core.buildComponent("igCheckboxEditor"));
	if (window) {
		window.IgCheckboxEditor = IgCheckboxEditor;
	}
	return IgCheckboxEditor;
}));
