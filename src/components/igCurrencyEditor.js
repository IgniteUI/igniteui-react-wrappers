(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgCurrencyEditor", [
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
	var IgCurrencyEditor = createReactClass($.ig.react.core.buildComponent("igCurrencyEditor"));
	if (window) {
		window.IgCurrencyEditor = IgCurrencyEditor;
	}
	return IgCurrencyEditor;
}));
